/**
 * Search Results Page Component
 * 
 * Full-page search interface with advanced filtering,
 * pagination, and detailed result display.
 */

import React, { useState, useEffect } from 'react';
import { searchAPI, SearchResult, SearchResponse } from './SearchAPI';
import SearchBox from './SearchBox';
import './SearchResultsPage.css';

interface SearchResultsPageProps {
  initialQuery?: string;
  initialCategory?: string;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  initialQuery = '',
  initialCategory = ''
}) => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'relevance' | 'title' | 'category'>('relevance');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  
  const resultsPerPage = 10;

  // Perform search
  const performSearch = async (query: string, page: number = 1) => {
    if (!query.trim()) {
      setSearchResponse(null);
      return;
    }

    setIsLoading(true);
    setCurrentQuery(query);
    setCurrentPage(page);

    try {
      const response = await searchAPI.search(query, {
        limit: resultsPerPage * 3, // Get more results for better pagination
        categoryFilter: selectedCategories.length === 1 ? selectedCategories[0] : undefined,
        includeRecommendations: true
      });

      // Sort results based on selected criteria
      const sortedResults = sortResults(response.results, sortBy);
      
      setSearchResponse({
        ...response,
        results: sortedResults
      });
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Sort results
  const sortResults = (results: SearchResult[], sortCriteria: string): SearchResult[] => {
    const sorted = [...results];
    
    switch (sortCriteria) {
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'category':
        return sorted.sort((a, b) => a.category.localeCompare(b.category));
      case 'relevance':
      default:
        return sorted.sort((a, b) => b.similarity - a.similarity);
    }
  };

  // Handle search from SearchBox
  const handleSearch = (result: SearchResult) => {
    // Navigate to the result or perform custom action
    window.location.href = result.url;
  };

  // Handle category filter change
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      // Re-search with new filters
      if (currentQuery) {
        setTimeout(() => performSearch(currentQuery), 100);
      }
      
      return newCategories;
    });
  };

  // Handle sort change
  const handleSortChange = (newSortBy: 'relevance' | 'title' | 'category') => {
    setSortBy(newSortBy);
    if (searchResponse) {
      const sortedResults = sortResults(searchResponse.results, newSortBy);
      setSearchResponse({
        ...searchResponse,
        results: sortedResults
      });
    }
  };

  // Get paginated results
  const getPaginatedResults = (): SearchResult[] => {
    if (!searchResponse) return [];
    
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return searchResponse.results.slice(startIndex, endIndex);
  };

  // Get total pages
  const getTotalPages = (): number => {
    if (!searchResponse) return 0;
    return Math.ceil(searchResponse.results.length / resultsPerPage);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize search if initial query provided
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  // Available categories
  const availableCategories = [
    { id: 'endpoint-security', label: 'Endpoint Security' },
    { id: 'network-security', label: 'Network Security' },
    { id: 'administration', label: 'Administration' },
    { id: 'development', label: 'Development' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
    { id: 'security', label: 'Security' }
  ];

  return (
    <div className="search-results-page">
      <div className="search-header">
        <div className="search-container">
          <h1>Search Documentation</h1>
          <SearchBox
            placeholder="Search for guides, tutorials, and references..."
            maxResults={5}
            showCategories={false}
            onResultClick={handleSearch}
            className="main-search-box"
          />
        </div>
      </div>

      <div className="search-content">
        <div className="search-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {availableCategories.map(category => (
                <label key={category.id} className="category-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                  <span className="checkmark"></span>
                  {category.label}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <div className="sort-options">
              {[
                { value: 'relevance', label: 'Relevance' },
                { value: 'title', label: 'Title' },
                { value: 'category', label: 'Category' }
              ].map(option => (
                <label key={option.value} className="sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={() => handleSortChange(option.value as any)}
                  />
                  <span className="radio-mark"></span>
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="search-main">
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner-large"></div>
              <p>Searching documentation...</p>
            </div>
          )}

          {searchResponse && !isLoading && (
            <>
              <div className="results-header">
                <div className="results-info">
                  <h2>
                    {searchResponse.totalResults} results for "{currentQuery}"
                  </h2>
                  <p className="search-time">
                    Search completed in {searchResponse.queryTime}ms
                  </p>
                </div>
              </div>

              <div className="results-list">
                {getPaginatedResults().map((result, index) => (
                  <div key={result.id} className="result-card">
                    <div className="result-header">
                      <h3 className="result-title">
                        <a href={result.url}>{result.title}</a>
                      </h3>
                      <div className="result-meta">
                        <span className="similarity-score">
                          {Math.round(result.similarity * 100)}% match
                        </span>
                        <span className="result-category">
                          {result.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    <p className="result-description">{result.preview}</p>
                    
                    {result.heading && (
                      <p className="result-section">
                        Section: {result.heading}
                      </p>
                    )}
                    
                    {result.tags.length > 0 && (
                      <div className="result-tags">
                        {result.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    
                    <div className="result-actions">
                      <a href={result.url} className="view-button">
                        View Document
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {getTotalPages() > 1 && (
                <div className="pagination">
                  <button
                    className="page-button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: getTotalPages() }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`page-button ${page === currentPage ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    className="page-button"
                    disabled={currentPage === getTotalPages()}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              )}

              {searchResponse.recommendations && searchResponse.recommendations.length > 0 && (
                <div className="recommendations-section">
                  <h3>Recommended for you</h3>
                  <div className="recommendations-grid">
                    {searchResponse.recommendations.map(rec => (
                      <div key={rec.id} className="recommendation-card">
                        <h4>
                          <a href={rec.url}>{rec.title}</a>
                        </h4>
                        <p>{rec.preview}</p>
                        <span className="recommendation-score">
                          {Math.round(rec.similarity * 100)}% relevant
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {searchResponse && searchResponse.results.length === 0 && !isLoading && (
            <div className="no-results-state">
              <div className="no-results-icon">🔍</div>
              <h2>No results found</h2>
              <p>
                We couldn't find any documents matching "{currentQuery}".
                Try adjusting your search terms or filters.
              </p>
              
              {searchResponse.suggestions && searchResponse.suggestions.length > 0 && (
                <div className="search-suggestions">
                  <h3>Try searching for:</h3>
                  <div className="suggestion-buttons">
                    {searchResponse.suggestions.map(suggestion => (
                      <button
                        key={suggestion}
                        className="suggestion-button"
                        onClick={() => performSearch(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;