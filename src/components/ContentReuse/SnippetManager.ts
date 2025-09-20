/**
 * Snippet Management System for Content Reuse
 * 
 * Task 6.1: Create content reuse system
 * - Build snippet management system for reusable content blocks
 * - Implement variable substitution system for dynamic content
 * - Create shared content library with version control
 * - Build validation system for content references and dependencies
 */

import yaml from 'js-yaml';

export interface Snippet {
  id: string;
  name: string;
  description: string;
  content: string;
  variables: Record<string, SnippetVariable>;
  category: string;
  tags: string[];
  version: string;
  lastModified: Date;
  author: string;
  dependencies: string[];
  usageCount: number;
}

export interface SnippetVariable {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  description: string;
  defaultValue?: any;
  required: boolean;
  validation?: {
    pattern?: string;
    min?: number;
    max?: number;
    options?: string[];
  };
}

export interface SnippetLibrary {
  snippets: Record<string, Snippet>;
  categories: string[];
  tags: string[];
  version: string;
  lastUpdated: Date;
}

export interface SnippetUsage {
  snippetId: string;
  documentPath: string;
  variables: Record<string, any>;
  lineNumber?: number;
  context?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  type: 'missing_snippet' | 'invalid_variable' | 'circular_dependency' | 'syntax_error';
  message: string;
  snippetId?: string;
  variableName?: string;
  location?: string;
}

export interface ValidationWarning {
  type: 'unused_variable' | 'deprecated_snippet' | 'performance' | 'style';
  message: string;
  snippetId?: string;
  suggestion?: string;
}

class SnippetManager {
  private library: SnippetLibrary;
  private usageTracker: Map<string, SnippetUsage[]>;
  private dependencyGraph: Map<string, Set<string>>;

  constructor() {
    this.library = {
      snippets: {},
      categories: [],
      tags: [],
      version: '1.0.0',
      lastUpdated: new Date()
    };
    this.usageTracker = new Map();
    this.dependencyGraph = new Map();
  }

  /**
   * Load snippet library from YAML file
   */
  async loadLibrary(yamlContent: string): Promise<void> {
    try {
      const data = yaml.load(yamlContent) as any;
      
      if (!data.snippets) {
        throw new Error('Invalid snippet library format: missing snippets');
      }

      this.library = {
        snippets: {},
        categories: data.categories || [],
        tags: data.tags || [],
        version: data.version || '1.0.0',
        lastUpdated: new Date(data.lastUpdated || Date.now())
      };

      // Process snippets
      for (const [id, snippetData] of Object.entries(data.snippets as Record<string, any>)) {
        const snippet: Snippet = {
          id,
          name: snippetData.name || id,
          description: snippetData.description || '',
          content: snippetData.content || '',
          variables: this.processVariables(snippetData.variables || {}),
          category: snippetData.category || 'general',
          tags: snippetData.tags || [],
          version: snippetData.version || '1.0.0',
          lastModified: new Date(snippetData.lastModified || Date.now()),
          author: snippetData.author || 'unknown',
          dependencies: snippetData.dependencies || [],
          usageCount: 0
        };

        this.library.snippets[id] = snippet;
        this.updateDependencyGraph(snippet);
      }

      this.updateCategories();
      this.updateTags();
    } catch (error) {
      throw new Error(`Failed to load snippet library: ${error}`);
    }
  }

  /**
   * Save snippet library to YAML format
   */
  exportLibrary(): string {
    const exportData = {
      version: this.library.version,
      lastUpdated: this.library.lastUpdated.toISOString(),
      categories: this.library.categories,
      tags: this.library.tags,
      snippets: Object.fromEntries(
        Object.entries(this.library.snippets).map(([id, snippet]) => [
          id,
          {
            name: snippet.name,
            description: snippet.description,
            content: snippet.content,
            variables: snippet.variables,
            category: snippet.category,
            tags: snippet.tags,
            version: snippet.version,
            lastModified: snippet.lastModified.toISOString(),
            author: snippet.author,
            dependencies: snippet.dependencies
          }
        ])
      )
    };

    return yaml.dump(exportData, { 
      indent: 2, 
      lineWidth: 100,
      noRefs: true 
    });
  }

  /**
   * Create a new snippet
   */
  createSnippet(snippet: Omit<Snippet, 'id' | 'lastModified' | 'usageCount'>): string {
    const id = this.generateSnippetId(snippet.name);
    
    const newSnippet: Snippet = {
      ...snippet,
      id,
      lastModified: new Date(),
      usageCount: 0
    };

    this.library.snippets[id] = newSnippet;
    this.updateDependencyGraph(newSnippet);
    this.updateCategories();
    this.updateTags();
    this.library.lastUpdated = new Date();

    return id;
  }

  /**
   * Update an existing snippet
   */
  updateSnippet(id: string, updates: Partial<Snippet>): void {
    const snippet = this.library.snippets[id];
    if (!snippet) {
      throw new Error(`Snippet not found: ${id}`);
    }

    const updatedSnippet = {
      ...snippet,
      ...updates,
      id, // Ensure ID doesn't change
      lastModified: new Date()
    };

    this.library.snippets[id] = updatedSnippet;
    this.updateDependencyGraph(updatedSnippet);
    this.updateCategories();
    this.updateTags();
    this.library.lastUpdated = new Date();
  }

  /**
   * Delete a snippet
   */
  deleteSnippet(id: string): void {
    if (!this.library.snippets[id]) {
      throw new Error(`Snippet not found: ${id}`);
    }

    // Check for dependencies
    const dependents = this.getDependents(id);
    if (dependents.length > 0) {
      throw new Error(`Cannot delete snippet ${id}: used by ${dependents.join(', ')}`);
    }

    delete this.library.snippets[id];
    this.dependencyGraph.delete(id);
    this.usageTracker.delete(id);
    this.updateCategories();
    this.updateTags();
    this.library.lastUpdated = new Date();
  }

  /**
   * Get a snippet by ID
   */
  getSnippet(id: string): Snippet | null {
    return this.library.snippets[id] || null;
  }

  /**
   * Search snippets
   */
  searchSnippets(query: {
    text?: string;
    category?: string;
    tags?: string[];
    author?: string;
  }): Snippet[] {
    const snippets = Object.values(this.library.snippets);

    return snippets.filter(snippet => {
      if (query.text) {
        const searchText = query.text.toLowerCase();
        const matchesText = 
          snippet.name.toLowerCase().includes(searchText) ||
          snippet.description.toLowerCase().includes(searchText) ||
          snippet.content.toLowerCase().includes(searchText);
        
        if (!matchesText) return false;
      }

      if (query.category && snippet.category !== query.category) {
        return false;
      }

      if (query.tags && query.tags.length > 0) {
        const hasMatchingTag = query.tags.some(tag => 
          snippet.tags.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }

      if (query.author && snippet.author !== query.author) {
        return false;
      }

      return true;
    });
  }

  /**
   * Render snippet with variable substitution
   */
  renderSnippet(id: string, variables: Record<string, any> = {}): string {
    const snippet = this.getSnippet(id);
    if (!snippet) {
      throw new Error(`Snippet not found: ${id}`);
    }

    // Validate variables
    const validation = this.validateVariables(snippet, variables);
    if (!validation.isValid) {
      throw new Error(`Variable validation failed: ${validation.errors.map(e => e.message).join(', ')}`);
    }

    // Merge with default values
    const mergedVariables = this.mergeWithDefaults(snippet, variables);

    // Perform substitution
    let content = snippet.content;

    // Replace variables in format {{variableName}}
    content = content.replace(/\{\{(\w+)\}\}/g, (match, variableName) => {
      if (variableName in mergedVariables) {
        const value = mergedVariables[variableName];
        return this.formatVariableValue(value);
      }
      return match; // Keep original if variable not found
    });

    // Handle nested snippet includes
    content = this.processNestedSnippets(content, variables);

    // Track usage
    this.trackUsage(id, variables);

    return content;
  }

  /**
   * Validate snippet variables
   */
  validateVariables(snippet: Snippet, variables: Record<string, any>): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // Check required variables
    for (const [varName, varDef] of Object.entries(snippet.variables)) {
      if (varDef.required && !(varName in variables)) {
        errors.push({
          type: 'invalid_variable',
          message: `Required variable '${varName}' is missing`,
          snippetId: snippet.id,
          variableName: varName
        });
      }

      if (varName in variables) {
        const value = variables[varName];
        const validationError = this.validateVariableValue(varName, varDef, value);
        if (validationError) {
          errors.push({
            type: 'invalid_variable',
            message: validationError,
            snippetId: snippet.id,
            variableName: varName
          });
        }
      }
    }

    // Check for unused variables
    for (const varName of Object.keys(variables)) {
      if (!(varName in snippet.variables)) {
        warnings.push({
          type: 'unused_variable',
          message: `Variable '${varName}' is not defined in snippet`,
          snippetId: snippet.id,
          suggestion: `Remove unused variable or add it to snippet definition`
        });
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate all snippet dependencies
   */
  validateDependencies(): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // Check for circular dependencies
    for (const snippetId of Object.keys(this.library.snippets)) {
      if (this.hasCircularDependency(snippetId)) {
        errors.push({
          type: 'circular_dependency',
          message: `Circular dependency detected for snippet '${snippetId}'`,
          snippetId
        });
      }
    }

    // Check for missing dependencies
    for (const snippet of Object.values(this.library.snippets)) {
      for (const depId of snippet.dependencies) {
        if (!this.library.snippets[depId]) {
          errors.push({
            type: 'missing_snippet',
            message: `Dependency '${depId}' not found for snippet '${snippet.id}'`,
            snippetId: snippet.id
          });
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Get snippet usage statistics
   */
  getUsageStats(): Record<string, {
    snippet: Snippet;
    usageCount: number;
    lastUsed: Date | null;
    usedIn: string[];
  }> {
    const stats: Record<string, any> = {};

    for (const snippet of Object.values(this.library.snippets)) {
      const usages = this.usageTracker.get(snippet.id) || [];
      const usedIn = [...new Set(usages.map(u => u.documentPath))];
      const lastUsed = usages.length > 0 
        ? new Date(Math.max(...usages.map(u => new Date(u.documentPath).getTime())))
        : null;

      stats[snippet.id] = {
        snippet,
        usageCount: usages.length,
        lastUsed,
        usedIn
      };
    }

    return stats;
  }

  /**
   * Get all categories
   */
  getCategories(): string[] {
    return [...this.library.categories];
  }

  /**
   * Get all tags
   */
  getTags(): string[] {
    return [...this.library.tags];
  }

  /**
   * Get dependency graph
   */
  getDependencyGraph(): Record<string, string[]> {
    const graph: Record<string, string[]> = {};
    
    for (const [snippetId, dependencies] of this.dependencyGraph.entries()) {
      graph[snippetId] = Array.from(dependencies);
    }

    return graph;
  }

  // Private helper methods

  private processVariables(variables: Record<string, any>): Record<string, SnippetVariable> {
    const processed: Record<string, SnippetVariable> = {};

    for (const [name, varData] of Object.entries(variables)) {
      processed[name] = {
        name,
        type: varData.type || 'string',
        description: varData.description || '',
        defaultValue: varData.defaultValue,
        required: varData.required || false,
        validation: varData.validation
      };
    }

    return processed;
  }

  private generateSnippetId(name: string): string {
    const baseId = name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    let id = baseId;
    let counter = 1;
    
    while (this.library.snippets[id]) {
      id = `${baseId}-${counter}`;
      counter++;
    }

    return id;
  }

  private updateDependencyGraph(snippet: Snippet): void {
    this.dependencyGraph.set(snippet.id, new Set(snippet.dependencies));
  }

  private updateCategories(): void {
    const categories = new Set(
      Object.values(this.library.snippets).map(s => s.category)
    );
    this.library.categories = Array.from(categories).sort();
  }

  private updateTags(): void {
    const tags = new Set(
      Object.values(this.library.snippets).flatMap(s => s.tags)
    );
    this.library.tags = Array.from(tags).sort();
  }

  private getDependents(snippetId: string): string[] {
    const dependents: string[] = [];
    
    for (const snippet of Object.values(this.library.snippets)) {
      if (snippet.dependencies.includes(snippetId)) {
        dependents.push(snippet.id);
      }
    }

    return dependents;
  }

  private hasCircularDependency(snippetId: string, visited = new Set<string>()): boolean {
    if (visited.has(snippetId)) {
      return true;
    }

    visited.add(snippetId);
    const dependencies = this.dependencyGraph.get(snippetId) || new Set();

    for (const depId of dependencies) {
      if (this.hasCircularDependency(depId, new Set(visited))) {
        return true;
      }
    }

    return false;
  }

  private mergeWithDefaults(snippet: Snippet, variables: Record<string, any>): Record<string, any> {
    const merged = { ...variables };

    for (const [varName, varDef] of Object.entries(snippet.variables)) {
      if (!(varName in merged) && varDef.defaultValue !== undefined) {
        merged[varName] = varDef.defaultValue;
      }
    }

    return merged;
  }

  private validateVariableValue(name: string, definition: SnippetVariable, value: any): string | null {
    // Type validation
    const actualType = Array.isArray(value) ? 'array' : typeof value;
    if (actualType !== definition.type) {
      return `Variable '${name}' should be ${definition.type}, got ${actualType}`;
    }

    // Additional validation
    if (definition.validation) {
      const validation = definition.validation;

      if (validation.pattern && typeof value === 'string') {
        const regex = new RegExp(validation.pattern);
        if (!regex.test(value)) {
          return `Variable '${name}' does not match pattern: ${validation.pattern}`;
        }
      }

      if (validation.min !== undefined && typeof value === 'number') {
        if (value < validation.min) {
          return `Variable '${name}' must be at least ${validation.min}`;
        }
      }

      if (validation.max !== undefined && typeof value === 'number') {
        if (value > validation.max) {
          return `Variable '${name}' must be at most ${validation.max}`;
        }
      }

      if (validation.options && !validation.options.includes(value)) {
        return `Variable '${name}' must be one of: ${validation.options.join(', ')}`;
      }
    }

    return null;
  }

  private formatVariableValue(value: any): string {
    if (typeof value === 'string') {
      return value;
    }
    
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }

    if (Array.isArray(value)) {
      return value.join(', ');
    }

    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }

    return String(value);
  }

  private processNestedSnippets(content: string, variables: Record<string, any>): string {
    // Handle nested snippet includes in format {{>snippetId}}
    return content.replace(/\{\{>(\w+)\}\}/g, (match, snippetId) => {
      try {
        return this.renderSnippet(snippetId, variables);
      } catch (error) {
        console.warn(`Failed to render nested snippet ${snippetId}:`, error);
        return match; // Keep original if rendering fails
      }
    });
  }

  private trackUsage(snippetId: string, variables: Record<string, any>): void {
    const usage: SnippetUsage = {
      snippetId,
      documentPath: 'unknown', // This would be set by the calling context
      variables
    };

    if (!this.usageTracker.has(snippetId)) {
      this.usageTracker.set(snippetId, []);
    }

    this.usageTracker.get(snippetId)!.push(usage);
    
    // Update usage count
    if (this.library.snippets[snippetId]) {
      this.library.snippets[snippetId].usageCount++;
    }
  }
}

// Export singleton instance
export const snippetManager = new SnippetManager();
export default snippetManager;