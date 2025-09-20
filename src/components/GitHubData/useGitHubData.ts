/**
 * React Hook for GitHub YAML Data Integration
 * 
 * Provides easy-to-use React hooks for fetching and managing GitHub YAML data
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { gitHubDataService, GitHubDataConfig, GitHubDataOptions } from './GitHubDataService';

export interface UseGitHubDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  lastUpdated: Date | null;
  refetch: () => Promise<void>;
  clearCache: () => void;
}

export interface UseGitHubDataOptions extends GitHubDataOptions {
  enabled?: boolean;
  refetchInterval?: number;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for fetching GitHub YAML data
 */
export function useGitHubData<T = any>(
  config: GitHubDataConfig | null,
  options: UseGitHubDataOptions = {}
): UseGitHubDataResult<T> {
  const {
    enabled = true,
    refetchInterval,
    onSuccess,
    onError,
    ...serviceOptions
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const intervalRef = useRef<NodeJS.Timeout>();
  const configRef = useRef(config);
  const optionsRef = useRef(serviceOptions);

  // Update refs when props change
  useEffect(() => {
    configRef.current = config;
    optionsRef.current = serviceOptions;
  }, [config, serviceOptions]);

  const fetchData = useCallback(async () => {
    if (!configRef.current || !enabled) return;

    setLoading(true);
    setError(null);

    try {
      const result = await gitHubDataService.fetchYAMLData<T>(
        configRef.current,
        optionsRef.current
      );
      
      setData(result);
      setLastUpdated(new Date());
      onSuccess?.(result);
    } catch (err) {
      const error = err as Error;
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [enabled, onSuccess, onError]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const clearCache = useCallback(() => {
    gitHubDataService.clearCache();
  }, []);

  // Initial fetch
  useEffect(() => {
    if (config && enabled) {
      fetchData();
    }
  }, [config, enabled, fetchData]);

  // Set up refetch interval
  useEffect(() => {
    if (refetchInterval && enabled && config) {
      intervalRef.current = setInterval(fetchData, refetchInterval);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [refetchInterval, enabled, config, fetchData]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    data,
    loading,
    error,
    lastUpdated,
    refetch,
    clearCache
  };
}

/**
 * Hook for watching GitHub data changes
 */
export function useGitHubDataWatcher<T = any>(
  config: GitHubDataConfig | null,
  options: UseGitHubDataOptions & { pollInterval?: number } = {}
): UseGitHubDataResult<T> & { isChanged: boolean } {
  const {
    enabled = true,
    pollInterval = 60000,
    onSuccess,
    onError,
    ...serviceOptions
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isChanged, setIsChanged] = useState(false);

  const stopWatchingRef = useRef<(() => void) | null>(null);

  const clearCache = useCallback(() => {
    gitHubDataService.clearCache();
  }, []);

  const refetch = useCallback(async () => {
    if (!config || !enabled) return;

    setLoading(true);
    setError(null);

    try {
      const result = await gitHubDataService.fetchYAMLData<T>(config, serviceOptions);
      setData(result);
      setLastUpdated(new Date());
      onSuccess?.(result);
    } catch (err) {
      const error = err as Error;
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [config, enabled, serviceOptions, onSuccess, onError]);

  // Set up watcher
  useEffect(() => {
    if (!config || !enabled) return;

    setLoading(true);

    const stopWatching = gitHubDataService.watchForChanges<T>(
      config,
      (newData, changed) => {
        setData(newData);
        setLastUpdated(new Date());
        setIsChanged(changed);
        setLoading(false);
        setError(null);
        onSuccess?.(newData);
      },
      { ...serviceOptions, pollInterval }
    );

    stopWatchingRef.current = stopWatching;

    return () => {
      stopWatching();
      stopWatchingRef.current = null;
    };
  }, [config, enabled, pollInterval, serviceOptions, onSuccess]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (stopWatchingRef.current) {
        stopWatchingRef.current();
      }
    };
  }, []);

  return {
    data,
    loading,
    error,
    lastUpdated,
    isChanged,
    refetch,
    clearCache
  };
}

/**
 * Hook for multiple GitHub data sources
 */
export function useMultipleGitHubData<T = any>(
  configs: Array<{ key: string; config: GitHubDataConfig; options?: GitHubDataOptions }>,
  globalOptions: UseGitHubDataOptions = {}
): Record<string, UseGitHubDataResult<T>> & {
  allLoading: boolean;
  anyError: boolean;
  refetchAll: () => Promise<void>;
} {
  const [results, setResults] = useState<Record<string, UseGitHubDataResult<T>>>({});

  const { enabled = true } = globalOptions;

  const refetchAll = useCallback(async () => {
    if (!enabled) return;

    const newResults: Record<string, UseGitHubDataResult<T>> = {};

    for (const { key, config, options = {} } of configs) {
      const mergedOptions = { ...globalOptions, ...options };
      
      try {
        const data = await gitHubDataService.fetchYAMLData<T>(config, mergedOptions);
        newResults[key] = {
          data,
          loading: false,
          error: null,
          lastUpdated: new Date(),
          refetch: async () => {
            const refreshedData = await gitHubDataService.fetchYAMLData<T>(config, mergedOptions);
            setResults(prev => ({
              ...prev,
              [key]: { ...prev[key], data: refreshedData, lastUpdated: new Date() }
            }));
          },
          clearCache: () => gitHubDataService.clearCache()
        };
      } catch (error) {
        newResults[key] = {
          data: null,
          loading: false,
          error: error as Error,
          lastUpdated: null,
          refetch: async () => refetchAll(),
          clearCache: () => gitHubDataService.clearCache()
        };
      }
    }

    setResults(newResults);
  }, [configs, enabled, globalOptions]);

  // Initial fetch
  useEffect(() => {
    if (enabled && configs.length > 0) {
      refetchAll();
    }
  }, [enabled, configs, refetchAll]);

  const allLoading = Object.values(results).some(result => result.loading);
  const anyError = Object.values(results).some(result => result.error !== null);

  return {
    ...results,
    allLoading,
    anyError,
    refetchAll
  };
}