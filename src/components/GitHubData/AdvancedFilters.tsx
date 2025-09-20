/**
 * Advanced Filtering Component for What's New Content
 * 
 * Task 5.2: Implement What's New filtering system
 * - Create filterable content component with dropdown controls
 * - Build real-time filtering logic for date ranges, product areas, and content types
 * - Implement URL state management for shareable filtered views
 * - Create responsive design for mobile and desktop filtering interfaces
 */

import React, { useState, useEffect, useCallback } from 'react';
import './AdvancedFilters.css';

export interface FilterState {
  category: string;
  type: string;
  priority: string;
  productArea: string;
  dateRange: string;
  searchTerm: string;
  tags: string[];
}

export interface FilterOptions {
  categories: string[];
  types: string[];
  priorities: string[];
  productAreas: string[];
  tags: string[];
}

interface AdvancedFiltersProps {
  filters: FilterState;
  options: FilterOptions;
  onFiltersChange: (filters: FilterState) => void;
  resultCount: number;
  totalCount: number;
  className?: string;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  filters,
  options,
  onFiltersChange,
  resultCount,
  totalCount,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchInput, setSearchInput] = useState(filters.searchTerm);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== filters.searchTerm) {
        onFiltersChange({ ...filters, searchTerm: searchInput });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, filters, onFiltersChange]);

  const handleFilterChange = useCallback((key: keyof FilterState, value: string | string[]) => {
    onFiltersChange({ ...filters, [key]: value });
  }, [filters, onFiltersChange]);

  const handleTagToggle = useCallback((tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    handleFilterChange('tags', newTags);
  }, [filters.tags, handleFilterChange]);

  const clearAllFilters = useCallback(() => {
    const clearedFilters: FilterState = {
      category: 'all',
      type: 'all',
      priority: 'all',
      productArea: 'all',
      dateRange: 'all',
      searchTerm: '',
      tags: []
    };
    setSearchInput('');
    onFiltersChange(clearedFilters);
  }, [onFiltersChange]);

  const hasActiveFilters = 
    filters.category !== 'all' ||
    filters.type !== 'all' ||
    filters.priority !== 'all' ||
    filters.productArea !== 'all' ||
    filters.dateRange !== 'all' ||
    filters.searchTerm !== '' ||
    filters.tags.length > 0;

  const getDateRangeLabel = (range: string): string => {
    const labels: Record<string, string> = {
      'all': 'All Time',
      'today': 'Today',
      'week': 'This Week',
      'month': 'This Month',
      'quarter': 'This Quarter',
      'year': 'This Year'
    };
    return labels[range] || range;
  };

  const getTypeIcon = (type: string): string => {
    const icons: Record<string, string> = {
      feature: '🚀',
      improvement: '✨',
      bugfix: '🐛',
      announcement: '📢'
    };
    return icons[type] || '📄';
  };

  return (
    <div className={`advanced-filters ${className}`}>
      <div className="filters-header">
        <div className="filters-summary">
          <h3>Filter What's New</h3>
          <div className="result-count">
            Showing {resultCount} of {totalCount} items
            {hasActiveFilters && (
              <button 
                className="clear-all-button"
                onClick={clearAllFilters}
                title="Clear all filters"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        
        <button 
          className={`expand-toggle ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
        >
          <span className="expand-icon">
            {isExpanded ? '▲' : '▼'}
          </span>
          <span className="expand-text">
            {isExpanded ? 'Less Filters' : 'More Filters'}
          </span>
        </button>
      </div>

      <div className="filters-content">
        {/* Primary Filters - Always Visible */}
        <div className="primary-filters">
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="search-input">Search:</label>
              <div className="search-input-container">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search titles and descriptions..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="search-input"
                />
                {searchInput && (
                  <button
                    className="clear-search-button"
                    onClick={() => setSearchInput('')}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="filter-group">
              <label htmlFor="category-select">Category:</label>
              <select
                id="category-select"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="all">All Categories</option>
                {options.categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type-select">Type:</label>
              <select
                id="type-select"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="all">All Types</option>
                {options.types.map(type => (
                  <option key={type} value={type}>
                    {getTypeIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Secondary Filters - Expandable */}
        <div className={`secondary-filters ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="priority-select">Priority:</label>
              <select
                id="priority-select"
                value={filters.priority}
                onChange={(e) => handleFilterChange('priority', e.target.value)}
              >
                <option value="all">All Priorities</option>
                {options.priorities.map(priority => (
                  <option key={priority} value={priority}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="product-area-select">Product Area:</label>
              <select
                id="product-area-select"
                value={filters.productArea}
                onChange={(e) => handleFilterChange('productArea', e.target.value)}
              >
                <option value="all">All Product Areas</option>
                {options.productAreas.map(area => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="date-range-select">Date Range:</label>
              <select
                id="date-range-select"
                value={filters.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>

          {/* Tag Filters */}
          {options.tags.length > 0 && (
            <div className="tag-filters">
              <label>Tags:</label>
              <div className="tag-list">
                {options.tags.map(tag => (
                  <button
                    key={tag}
                    className={`tag-button ${filters.tags.includes(tag) ? 'active' : ''}`}
                    onClick={() => handleTagToggle(tag)}
                    title={`Toggle ${tag} filter`}
                  >
                    {tag}
                    {filters.tags.includes(tag) && <span className="tag-remove">✕</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="active-filters">
            <span className="active-filters-label">Active filters:</span>
            <div className="active-filter-tags">
              {filters.category !== 'all' && (
                <span className="active-filter-tag">
                  Category: {filters.category}
                  <button onClick={() => handleFilterChange('category', 'all')}>✕</button>
                </span>
              )}
              {filters.type !== 'all' && (
                <span className="active-filter-tag">
                  Type: {filters.type}
                  <button onClick={() => handleFilterChange('type', 'all')}>✕</button>
                </span>
              )}
              {filters.priority !== 'all' && (
                <span className="active-filter-tag">
                  Priority: {filters.priority}
                  <button onClick={() => handleFilterChange('priority', 'all')}>✕</button>
                </span>
              )}
              {filters.productArea !== 'all' && (
                <span className="active-filter-tag">
                  Product: {filters.productArea}
                  <button onClick={() => handleFilterChange('productArea', 'all')}>✕</button>
                </span>
              )}
              {filters.dateRange !== 'all' && (
                <span className="active-filter-tag">
                  Date: {getDateRangeLabel(filters.dateRange)}
                  <button onClick={() => handleFilterChange('dateRange', 'all')}>✕</button>
                </span>
              )}
              {filters.searchTerm && (
                <span className="active-filter-tag">
                  Search: "{filters.searchTerm}"
                  <button onClick={() => {
                    setSearchInput('');
                    handleFilterChange('searchTerm', '');
                  }}>✕</button>
                </span>
              )}
              {filters.tags.map(tag => (
                <span key={tag} className="active-filter-tag">
                  Tag: {tag}
                  <button onClick={() => handleTagToggle(tag)}>✕</button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFilters;