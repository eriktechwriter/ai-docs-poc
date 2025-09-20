/**
 * Filtering Utilities for What's New Content
 * 
 * Provides advanced filtering logic for date ranges, search, and multi-dimensional filtering
 */

import { FilterState } from './AdvancedFilters';

export interface WhatsNewItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  productArea: string;
  type: 'feature' | 'improvement' | 'bugfix' | 'announcement';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  url?: string;
}

/**
 * Filter items based on filter state
 */
export function filterItems(items: WhatsNewItem[], filters: FilterState): WhatsNewItem[] {
  return items.filter(item => {
    // Category filter
    if (filters.category !== 'all' && item.category !== filters.category) {
      return false;
    }

    // Type filter
    if (filters.type !== 'all' && item.type !== filters.type) {
      return false;
    }

    // Priority filter
    if (filters.priority !== 'all' && item.priority !== filters.priority) {
      return false;
    }

    // Product area filter
    if (filters.productArea !== 'all' && item.productArea !== filters.productArea) {
      return false;
    }

    // Date range filter
    if (filters.dateRange !== 'all' && !isWithinDateRange(item.date, filters.dateRange)) {
      return false;
    }

    // Search term filter
    if (filters.searchTerm && !matchesSearchTerm(item, filters.searchTerm)) {
      return false;
    }

    // Tags filter
    if (filters.tags.length > 0 && !hasMatchingTags(item.tags, filters.tags)) {
      return false;
    }

    return true;
  });
}

/**
 * Check if date is within specified range
 */
function isWithinDateRange(dateString: string, range: string): boolean {
  try {
    const itemDate = new Date(dateString);
    const now = new Date();
    
    switch (range) {
      case 'today':
        return isSameDay(itemDate, now);
      
      case 'week':
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        return itemDate >= weekAgo;
      
      case 'month':
        const monthAgo = new Date(now);
        monthAgo.setMonth(now.getMonth() - 1);
        return itemDate >= monthAgo;
      
      case 'quarter':
        const quarterAgo = new Date(now);
        quarterAgo.setMonth(now.getMonth() - 3);
        return itemDate >= quarterAgo;
      
      case 'year':
        const yearAgo = new Date(now);
        yearAgo.setFullYear(now.getFullYear() - 1);
        return itemDate >= yearAgo;
      
      default:
        return true;
    }
  } catch {
    return true; // If date parsing fails, include the item
  }
}

/**
 * Check if two dates are on the same day
 */
function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

/**
 * Check if item matches search term
 */
function matchesSearchTerm(item: WhatsNewItem, searchTerm: string): boolean {
  const term = searchTerm.toLowerCase();
  
  return (
    item.title.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term) ||
    item.productArea.toLowerCase().includes(term) ||
    item.type.toLowerCase().includes(term) ||
    item.tags.some(tag => tag.toLowerCase().includes(term))
  );
}

/**
 * Check if item has matching tags
 */
function hasMatchingTags(itemTags: string[], filterTags: string[]): boolean {
  return filterTags.every(filterTag => 
    itemTags.some(itemTag => 
      itemTag.toLowerCase() === filterTag.toLowerCase()
    )
  );
}

/**
 * Extract unique filter options from items
 */
export function extractFilterOptions(items: WhatsNewItem[]): {
  categories: string[];
  types: string[];
  priorities: string[];
  productAreas: string[];
  tags: string[];
} {
  const categories = [...new Set(items.map(item => item.category))].sort();
  const types = [...new Set(items.map(item => item.type))].sort();
  const priorities = [...new Set(items.map(item => item.priority))].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a as keyof typeof order] - order[b as keyof typeof order];
  });
  const productAreas = [...new Set(items.map(item => item.productArea))].sort();
  const tags = [...new Set(items.flatMap(item => item.tags))].sort();

  return {
    categories,
    types,
    priorities,
    productAreas,
    tags
  };
}

/**
 * Sort items by date (newest first) and then by priority
 */
export function sortItems(items: WhatsNewItem[]): WhatsNewItem[] {
  return [...items].sort((a, b) => {
    // First sort by date (newest first)
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    if (dateA.getTime() !== dateB.getTime()) {
      return dateB.getTime() - dateA.getTime();
    }

    // Then sort by priority (high > medium > low)
    const priorityOrder = { high: 2, medium: 1, low: 0 };
    const priorityA = priorityOrder[a.priority];
    const priorityB = priorityOrder[b.priority];
    
    return priorityB - priorityA;
  });
}

/**
 * Get filter summary text
 */
export function getFilterSummary(filters: FilterState, resultCount: number, totalCount: number): string {
  const activeFilters: string[] = [];

  if (filters.category !== 'all') {
    activeFilters.push(`category: ${filters.category}`);
  }

  if (filters.type !== 'all') {
    activeFilters.push(`type: ${filters.type}`);
  }

  if (filters.priority !== 'all') {
    activeFilters.push(`priority: ${filters.priority}`);
  }

  if (filters.productArea !== 'all') {
    activeFilters.push(`product: ${filters.productArea}`);
  }

  if (filters.dateRange !== 'all') {
    activeFilters.push(`date: ${filters.dateRange}`);
  }

  if (filters.searchTerm) {
    activeFilters.push(`search: "${filters.searchTerm}"`);
  }

  if (filters.tags.length > 0) {
    activeFilters.push(`tags: ${filters.tags.join(', ')}`);
  }

  if (activeFilters.length === 0) {
    return `Showing all ${totalCount} items`;
  }

  return `Showing ${resultCount} of ${totalCount} items (filtered by ${activeFilters.join(', ')})`;
}

/**
 * Generate shareable URL for current filters
 */
export function generateShareableURL(filters: FilterState, baseUrl?: string): string {
  const url = baseUrl || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '');
  const params = new URLSearchParams();

  if (filters.category !== 'all') params.set('category', filters.category);
  if (filters.type !== 'all') params.set('type', filters.type);
  if (filters.priority !== 'all') params.set('priority', filters.priority);
  if (filters.productArea !== 'all') params.set('productArea', filters.productArea);
  if (filters.dateRange !== 'all') params.set('dateRange', filters.dateRange);
  if (filters.searchTerm) params.set('search', filters.searchTerm);
  if (filters.tags.length > 0) params.set('tags', filters.tags.join(','));

  const queryString = params.toString();
  return queryString ? `${url}?${queryString}` : url;
}