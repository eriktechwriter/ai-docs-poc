/**
 * URL State Management Hook for Filters
 * 
 * Provides URL state management for shareable filtered views
 */

import { useState, useEffect, useCallback } from 'react';
import { FilterState } from './AdvancedFilters';

const DEFAULT_FILTERS: FilterState = {
  category: 'all',
  type: 'all',
  priority: 'all',
  productArea: 'all',
  dateRange: 'all',
  searchTerm: '',
  tags: []
};

export function useURLFilters(): {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
} {
  const [filters, setFiltersState] = useState<FilterState>(DEFAULT_FILTERS);

  // Parse URL parameters on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const urlFilters: FilterState = { ...DEFAULT_FILTERS };

    // Parse individual filter parameters
    const category = urlParams.get('category');
    if (category) urlFilters.category = category;

    const type = urlParams.get('type');
    if (type) urlFilters.type = type;

    const priority = urlParams.get('priority');
    if (priority) urlFilters.priority = priority;

    const productArea = urlParams.get('productArea');
    if (productArea) urlFilters.productArea = productArea;

    const dateRange = urlParams.get('dateRange');
    if (dateRange) urlFilters.dateRange = dateRange;

    const searchTerm = urlParams.get('search');
    if (searchTerm) urlFilters.searchTerm = searchTerm;

    const tags = urlParams.get('tags');
    if (tags) {
      urlFilters.tags = tags.split(',').filter(tag => tag.trim() !== '');
    }

    setFiltersState(urlFilters);
  }, []);

  // Update URL when filters change
  const setFilters = useCallback((newFilters: FilterState) => {
    setFiltersState(newFilters);

    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams();

    // Only add non-default values to URL
    if (newFilters.category !== 'all') {
      urlParams.set('category', newFilters.category);
    }

    if (newFilters.type !== 'all') {
      urlParams.set('type', newFilters.type);
    }

    if (newFilters.priority !== 'all') {
      urlParams.set('priority', newFilters.priority);
    }

    if (newFilters.productArea !== 'all') {
      urlParams.set('productArea', newFilters.productArea);
    }

    if (newFilters.dateRange !== 'all') {
      urlParams.set('dateRange', newFilters.dateRange);
    }

    if (newFilters.searchTerm) {
      urlParams.set('search', newFilters.searchTerm);
    }

    if (newFilters.tags.length > 0) {
      urlParams.set('tags', newFilters.tags.join(','));
    }

    // Update URL without page reload
    const newUrl = urlParams.toString() 
      ? `${window.location.pathname}?${urlParams.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, '', newUrl);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, [setFilters]);

  return {
    filters,
    setFilters,
    resetFilters
  };
}