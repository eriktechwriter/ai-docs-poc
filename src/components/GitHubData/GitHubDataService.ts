/**
 * GitHub YAML Data Integration Service
 * 
 * Task 5.1: Build GitHub YAML data integration
 * - Create system to fetch YAML data from GitHub repositories
 * - Implement change detection and automatic content updates
 * - Build data validation and schema checking for YAML sources
 * - Create caching system for offline development and performance
 */

import yaml from 'js-yaml';

export interface GitHubDataConfig {
  owner: string;
  repo: string;
  path: string;
  branch?: string;
  token?: string;
}

export interface CacheEntry<T = any> {
  data: T;
  etag: string;
  lastModified: string;
  timestamp: number;
  url: string;
}

export interface DataValidationSchema {
  type?: 'string' | 'number' | 'boolean' | 'array' | 'object';
  required?: string[];
  properties?: Record<string, DataValidationSchema>;
  items?: DataValidationSchema;
  format?: string;
}

export interface GitHubDataOptions {
  cacheTTL?: number; // Cache time-to-live in milliseconds
  validateSchema?: DataValidationSchema;
  retryAttempts?: number;
  retryDelay?: number;
}

class GitHubDataService {
  private cache = new Map<string, CacheEntry>();
  private readonly defaultCacheTTL = 5 * 60 * 1000; // 5 minutes
  private readonly defaultRetryAttempts = 3;
  private readonly defaultRetryDelay = 1000; // 1 second

  /**
   * Fetch YAML data from GitHub repository
   */
  async fetchYAMLData<T = any>(
    config: GitHubDataConfig,
    options: GitHubDataOptions = {}
  ): Promise<T> {
    const {
      cacheTTL = this.defaultCacheTTL,
      validateSchema,
      retryAttempts = this.defaultRetryAttempts,
      retryDelay = this.defaultRetryDelay
    } = options;

    const url = this.buildGitHubURL(config);
    const cacheKey = this.getCacheKey(config);

    // Check cache first
    const cachedData = this.getCachedData<T>(cacheKey, cacheTTL);
    if (cachedData) {
      return cachedData;
    }

    // Fetch from GitHub with retry logic
    let lastError: Error | null = null;
    for (let attempt = 1; attempt <= retryAttempts; attempt++) {
      try {
        const data = await this.fetchFromGitHub<T>(url, config, cacheKey);
        
        // Validate data if schema provided
        if (validateSchema) {
          this.validateData(data, validateSchema);
        }

        return data;
      } catch (error) {
        lastError = error as Error;
        console.warn(`GitHub fetch attempt ${attempt} failed:`, error);
        
        if (attempt < retryAttempts) {
          await this.delay(retryDelay * attempt); // Exponential backoff
        }
      }
    }

    // If all retries failed, try to return stale cached data
    const staleData = this.getStaleData<T>(cacheKey);
    if (staleData) {
      console.warn('Using stale cached data due to fetch failures');
      return staleData;
    }

    throw new Error(`Failed to fetch data after ${retryAttempts} attempts: ${lastError?.message}`);
  }

  /**
   * Fetch data from GitHub API
   */
  private async fetchFromGitHub<T>(
    url: string,
    config: GitHubDataConfig,
    cacheKey: string
  ): Promise<T> {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Agentic-Docs-POC/1.0'
    };

    // Add authentication if token provided
    if (config.token) {
      headers['Authorization'] = `token ${config.token}`;
    }

    // Add conditional request headers if we have cached data
    const cachedEntry = this.cache.get(cacheKey);
    if (cachedEntry) {
      if (cachedEntry.etag) {
        headers['If-None-Match'] = cachedEntry.etag;
      }
      if (cachedEntry.lastModified) {
        headers['If-Modified-Since'] = cachedEntry.lastModified;
      }
    }

    const response = await fetch(url, { headers });

    // Handle 304 Not Modified - return cached data
    if (response.status === 304 && cachedEntry) {
      console.log('Data not modified, using cached version');
      return cachedEntry.data;
    }

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    
    // Decode base64 content
    if (responseData.content && responseData.encoding === 'base64') {
      const decodedContent = atob(responseData.content.replace(/\n/g, ''));
      
      // Parse YAML content
      let parsedData: T;
      try {
        parsedData = yaml.load(decodedContent) as T;
      } catch (yamlError) {
        throw new Error(`YAML parsing error: ${yamlError}`);
      }

      // Cache the data
      this.cacheData(cacheKey, {
        data: parsedData,
        etag: response.headers.get('etag') || '',
        lastModified: response.headers.get('last-modified') || '',
        timestamp: Date.now(),
        url
      });

      return parsedData;
    }

    throw new Error('Invalid GitHub API response format');
  }

  /**
   * Build GitHub API URL
   */
  private buildGitHubURL(config: GitHubDataConfig): string {
    const { owner, repo, path, branch = 'main' } = config;
    return `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  }

  /**
   * Generate cache key
   */
  private getCacheKey(config: GitHubDataConfig): string {
    const { owner, repo, path, branch = 'main' } = config;
    return `${owner}/${repo}/${path}@${branch}`;
  }

  /**
   * Get cached data if valid
   */
  private getCachedData<T>(cacheKey: string, cacheTTL: number): T | null {
    const cached = this.cache.get(cacheKey);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > cacheTTL;
    if (isExpired) return null;

    return cached.data;
  }

  /**
   * Get stale cached data (ignoring TTL)
   */
  private getStaleData<T>(cacheKey: string): T | null {
    const cached = this.cache.get(cacheKey);
    return cached ? cached.data : null;
  }

  /**
   * Cache data
   */
  private cacheData<T>(cacheKey: string, entry: CacheEntry<T>): void {
    this.cache.set(cacheKey, entry);
  }

  /**
   * Validate data against schema
   */
  private validateData(data: any, schema: DataValidationSchema): void {
    if (schema.required) {
      for (const field of schema.required) {
        if (!(field in data)) {
          throw new Error(`Required field '${field}' is missing`);
        }
      }
    }

    if (schema.properties) {
      for (const [field, fieldSchema] of Object.entries(schema.properties)) {
        if (field in data) {
          this.validateField(data[field], fieldSchema, field);
        } else if (fieldSchema.required) {
          throw new Error(`Required field '${field}' is missing`);
        }
      }
    }
  }

  /**
   * Validate individual field
   */
  private validateField(value: any, schema: DataValidationSchema, fieldName: string): void {
    if (schema.type) {
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      
      if (actualType !== schema.type) {
        throw new Error(`Field '${fieldName}' should be ${schema.type}, got ${actualType}`);
      }

      if (schema.type === 'array' && schema.items) {
        for (let i = 0; i < value.length; i++) {
          this.validateField(value[i], schema.items, `${fieldName}[${i}]`);
        }
      }
    }
  }

  /**
   * Delay utility for retry logic
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): {
    totalEntries: number;
    totalSize: number;
    entries: Array<{
      key: string;
      timestamp: number;
      age: number;
      url: string;
    }>;
  } {
    const entries = Array.from(this.cache.entries()).map(([key, entry]) => ({
      key,
      timestamp: entry.timestamp,
      age: Date.now() - entry.timestamp,
      url: entry.url
    }));

    return {
      totalEntries: this.cache.size,
      totalSize: JSON.stringify(Array.from(this.cache.values())).length,
      entries
    };
  }

  /**
   * Watch for changes (polling-based)
   */
  watchForChanges<T>(
    config: GitHubDataConfig,
    callback: (data: T, isChanged: boolean) => void,
    options: GitHubDataOptions & { pollInterval?: number } = {}
  ): () => void {
    const { pollInterval = 60000 } = options; // Default 1 minute
    let isWatching = true;
    let lastEtag = '';

    const poll = async () => {
      if (!isWatching) return;

      try {
        const data = await this.fetchYAMLData<T>(config, options);
        const cacheKey = this.getCacheKey(config);
        const cached = this.cache.get(cacheKey);
        const currentEtag = cached?.etag || '';
        
        const isChanged = currentEtag !== lastEtag;
        if (isChanged || !lastEtag) {
          callback(data, isChanged);
          lastEtag = currentEtag;
        }
      } catch (error) {
        console.error('Error polling for changes:', error);
      }

      if (isWatching) {
        setTimeout(poll, pollInterval);
      }
    };

    // Start polling
    poll();

    // Return stop function
    return () => {
      isWatching = false;
    };
  }
}

// Export singleton instance
export const gitHubDataService = new GitHubDataService();
export default gitHubDataService;