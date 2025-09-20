/**
 * Semantic Search Box Component
 * 
 * Advanced search interface with semantic search capabilities,
 * real-time suggestions, and intelligent result ranking.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { searchAPI, SearchResult, SearchResponse } from './SearchAPI';
import './SearchBox.css';

interface SearchBoxProps {
  placeholder?: string;
  maxResults?: number;
  showCategories?: boolean;
  showRecommendations?: boolean;
  onResultClick?: (result: SearchResult) => void;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search documentation...",
  maxResults = 10,
  showCategories = true,
  showRecommendations = true,
  onResultClick,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Initialize search API
  useEffect(() => {
    searchAPI.initialize();
  }, []);

  // Debounced search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults(null);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await searchAPI.search(searchQuery, {
        limit: maxResults,
        categoryFilter: categoryFilter || undefined,
        includeRecommendations: showRecommendations
      });
      
      setResults(response);
      setIsOpen(true);
      setSelectedIndex(-1);
    } catch (error) {
      console.error('Search failed:', error);
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  }, [maxResults, categoryFilter, showRecommendations]);

  // Handle input changes with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Debounce search
    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results || results.results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.results.length) {
          handleResultClick(results.results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    setSelectedIndex(-1);
    
    if (onResultClick) {
      onResultClick(result);
    } else {
      // Default behavior: navigate to the result URL
      window.location.href = result.url;
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    performSearch(suggestion);
    inputRef.current?.focus();
  };

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    if (query.trim()) {
      performSearch(query);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format similarity percentage
  const formatSimilarity = (similarity: number): string => {
    return `${Math.round(similarity * 100)}%`;
  };

  // Get category display name
  const getCategoryDisplayName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'endpoint-security': 'Endpoint Security',
      'network-security': 'Network Security',
      'administration': 'Administration',
      'development': 'Development',
      'troubleshooting': 'Troubleshooting',
      'security': 'Security'
    };
    return categoryMap[category] || category;
  };

  return (
    <div className={`semantic-search-box ${className}`} ref={searchRef}>
      <div className="search-input-container">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className="search-input"
          autoComplete="off"
        />
        
        {isLoading && (
          <div className="search-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
        
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>

      {showCategories && (
        <div className="category-filters">
          <button
            className={`category-filter ${!categoryFilter ? 'active' : ''}`}
            onClick={() => handleCategoryChange('')}
          >
            All
          </button>
          {['endpoint-security', 'network-security', 'administration', 'development'].map(category => (
            <button
              key={category}
              className={`category-filter ${categoryFilter === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </div>
      )}

      {isOpen && results && (
        <div className="search-dropdown">
          {results.results.length > 0 ? (
            <>
              <div className="search-results-header">
                <span className="results-count">
                  {results.totalResults} results ({results.queryTime}ms)
                </span>
              </div>
              
              <div className="search-results">
                {results.results.map((result, index) => (
                  <div
                    key={result.id}
                    className={`search-result ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="result-header">
                      <h4 className="result-title">{result.title}</h4>
                      <div className="result-meta">
                        <span className="result-similarity">
                          {formatSimilarity(result.similarity)}
                        </span>
                        <span className="result-category">
                          {getCategoryDisplayName(result.category)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="result-preview">{result.preview}</p>
                    
                    {result.tags.length > 0 && (
                      <div className="result-tags">
                        {result.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="result-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {results.suggestions && results.suggestions.length > 0 && (
                <div className="search-suggestions">
                  <div className="suggestions-header">Related searches:</div>
                  <div className="suggestions-list">
                    {results.suggestions.map(suggestion => (
                      <button
                        key={suggestion}
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.recommendations && results.recommendations.length > 0 && (
                <div className="search-recommendations">
                  <div className="recommendations-header">Recommended:</div>
                  <div className="recommendations-list">
                    {results.recommendations.map(rec => (
                      <div
                        key={rec.id}
                        className="recommendation-item"
                        onClick={() => handleResultClick(rec)}
                      >
                        <span className="recommendation-title">{rec.title}</span>
                        <span className="recommendation-similarity">
                          {formatSimilarity(rec.similarity)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-message">
                No results found for "{query}"
              </div>
              {results.suggestions && results.suggestions.length > 0 && (
                <div className="no-results-suggestions">
                  <div>Try searching for:</div>
                  {results.suggestions.map(suggestion => (
                    <button
                      key={suggestion}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;