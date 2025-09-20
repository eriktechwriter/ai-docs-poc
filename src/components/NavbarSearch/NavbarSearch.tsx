/**
 * Navbar Search Component
 * 
 * Compact search component for integration with Docusaurus navbar
 */

import React, { useState, useRef, useEffect } from 'react';
import { searchAPI, SearchResult } from '../SemanticSearch/SearchAPI';
import './NavbarSearch.css';

interface NavbarSearchProps {
  placeholder?: string;
  maxResults?: number;
}

const NavbarSearch: React.FC<NavbarSearchProps> = ({
  placeholder = "Search docs...",
  maxResults = 5
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Initialize search API
  useEffect(() => {
    searchAPI.initialize();
  }, []);

  // Debounced search
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await searchAPI.search(searchQuery, {
        limit: maxResults,
        minSimilarity: 0.2
      });
      
      setResults(response.results);
      setIsOpen(true);
      setSelectedIndex(-1);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex]);
        } else if (query.trim()) {
          // Navigate to full search page
          window.location.href = `/search?q=${encodeURIComponent(query)}`;
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
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    window.location.href = result.url;
  };

  // Handle "View all results" click
  const handleViewAllResults = () => {
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
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

  return (
    <div className="navbar-search" ref={searchRef}>
      <div className="navbar-search-input-container">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className="navbar-search-input"
          autoComplete="off"
        />
        
        {isLoading && (
          <div className="navbar-search-loading">
            <div className="navbar-loading-spinner"></div>
          </div>
        )}
        
        <div className="navbar-search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-search-dropdown">
          {results.length > 0 ? (
            <>
              <div className="navbar-search-results">
                {results.map((result, index) => (
                  <div
                    key={result.id}
                    className={`navbar-search-result ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="navbar-result-title">{result.title}</div>
                    <div className="navbar-result-preview">
                      {result.preview.substring(0, 80)}...
                    </div>
                    <div className="navbar-result-meta">
                      <span className="navbar-result-category">
                        {result.category.replace('-', ' ')}
                      </span>
                      <span className="navbar-result-similarity">
                        {Math.round(result.similarity * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="navbar-search-footer">
                <button 
                  className="navbar-view-all-button"
                  onClick={handleViewAllResults}
                >
                  View all results for "{query}"
                </button>
              </div>
            </>
          ) : query.trim() ? (
            <div className="navbar-no-results">
              <div className="navbar-no-results-message">
                No quick results found
              </div>
              <button 
                className="navbar-view-all-button"
                onClick={handleViewAllResults}
              >
                Search all documentation
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;