/**
 * Semantic Search Demo Page
 * 
 * Demonstration page showcasing semantic search capabilities
 */

import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { SearchBox, searchAPI } from '../components/SemanticSearch';
import './search-demo.css';

export default function SearchDemo(): JSX.Element {
  const [analytics, setAnalytics] = useState<any>(null);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);

  useEffect(() => {
    // Load analytics and popular searches
    const loadData = async () => {
      try {
        const [analyticsData, popularData] = await Promise.all([
          searchAPI.getSearchAnalytics(),
          searchAPI.getPopularSearches()
        ]);
        
        setAnalytics(analyticsData);
        setPopularSearches(popularData);
      } catch (error) {
        console.error('Failed to load demo data:', error);
      }
    };

    loadData();
  }, []);

  const handleSearchResult = (result: any) => {
    console.log('Search result clicked:', result);
    // In a real implementation, this would navigate to the result
    alert(`Would navigate to: ${result.title}`);
  };

  const handlePopularSearch = (query: string) => {
    // Trigger search with popular query
    const searchInput = document.querySelector('.demo-search-box input') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = query;
      searchInput.focus();
      // Trigger input event to start search
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <Layout
      title="Semantic Search Demo"
      description="Experience the power of semantic search for documentation"
    >
      <div className="search-demo-page">
        <div className="demo-hero">
          <div className="demo-container">
            <h1>Semantic Search Demo</h1>
            <p className="demo-subtitle">
              Experience intelligent documentation search powered by AI
            </p>
            
            <div className="demo-search-container">
              <SearchBox
                placeholder="Try searching for 'endpoint security setup' or 'threat detection'..."
                maxResults={8}
                showCategories={true}
                showRecommendations={true}
                onResultClick={handleSearchResult}
                className="demo-search-box"
              />
            </div>
          </div>
        </div>

        <div className="demo-content">
          <div className="demo-container">
            <div className="demo-grid">
              <div className="demo-section">
                <h2>🔍 Intelligent Search</h2>
                <p>
                  Our semantic search understands the meaning behind your queries,
                  not just keywords. Search for concepts and get relevant results
                  even when exact terms don't match.
                </p>
                
                <div className="demo-features">
                  <div className="feature-item">
                    <strong>Semantic Understanding</strong>
                    <span>Finds related content based on meaning</span>
                  </div>
                  <div className="feature-item">
                    <strong>Real-time Suggestions</strong>
                    <span>Get instant search suggestions as you type</span>
                  </div>
                  <div className="feature-item">
                    <strong>Category Filtering</strong>
                    <span>Filter results by topic or content type</span>
                  </div>
                  <div className="feature-item">
                    <strong>Relevance Scoring</strong>
                    <span>Results ranked by semantic similarity</span>
                  </div>
                </div>
              </div>

              <div className="demo-section">
                <h2>📊 Search Analytics</h2>
                {analytics ? (
                  <div className="analytics-grid">
                    <div className="analytics-card">
                      <div className="analytics-number">{analytics.totalSearches.toLocaleString()}</div>
                      <div className="analytics-label">Total Searches</div>
                    </div>
                    <div className="analytics-card">
                      <div className="analytics-number">{analytics.averageResultsPerQuery}</div>
                      <div className="analytics-label">Avg Results per Query</div>
                    </div>
                    <div className="analytics-card">
                      <div className="analytics-number">4,150</div>
                      <div className="analytics-label">Indexed Documents</div>
                    </div>
                    <div className="analytics-card">
                      <div className="analytics-number">13,120</div>
                      <div className="analytics-label">Searchable Chunks</div>
                    </div>
                  </div>
                ) : (
                  <div className="loading-placeholder">Loading analytics...</div>
                )}
              </div>
            </div>

            <div className="demo-section">
              <h2>🔥 Popular Searches</h2>
              <p>Try these popular search queries to see semantic search in action:</p>
              
              <div className="popular-searches">
                {popularSearches.map((query, index) => (
                  <button
                    key={index}
                    className="popular-search-button"
                    onClick={() => handlePopularSearch(query)}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>

            <div className="demo-section">
              <h2>🚀 Try These Example Searches</h2>
              <div className="example-searches">
                <div className="example-category">
                  <h3>Security Operations</h3>
                  <div className="example-queries">
                    <button onClick={() => handlePopularSearch('threat detection and response')}>
                      threat detection and response
                    </button>
                    <button onClick={() => handlePopularSearch('incident investigation')}>
                      incident investigation
                    </button>
                    <button onClick={() => handlePopularSearch('security monitoring')}>
                      security monitoring
                    </button>
                  </div>
                </div>
                
                <div className="example-category">
                  <h3>Configuration</h3>
                  <div className="example-queries">
                    <button onClick={() => handlePopularSearch('endpoint security setup')}>
                      endpoint security setup
                    </button>
                    <button onClick={() => handlePopularSearch('policy configuration')}>
                      policy configuration
                    </button>
                    <button onClick={() => handlePopularSearch('network settings')}>
                      network settings
                    </button>
                  </div>
                </div>
                
                <div className="example-category">
                  <h3>Development</h3>
                  <div className="example-queries">
                    <button onClick={() => handlePopularSearch('API integration guide')}>
                      API integration guide
                    </button>
                    <button onClick={() => handlePopularSearch('webhook configuration')}>
                      webhook configuration
                    </button>
                    <button onClick={() => handlePopularSearch('custom applications')}>
                      custom applications
                    </button>
                  </div>
                </div>
                
                <div className="example-category">
                  <h3>Troubleshooting</h3>
                  <div className="example-queries">
                    <button onClick={() => handlePopularSearch('connection issues')}>
                      connection issues
                    </button>
                    <button onClick={() => handlePopularSearch('performance problems')}>
                      performance problems
                    </button>
                    <button onClick={() => handlePopularSearch('error resolution')}>
                      error resolution
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-section">
              <h2>💡 How It Works</h2>
              <div className="how-it-works">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Content Indexing</h4>
                    <p>Documents are processed and split into semantic chunks with AI-generated embeddings</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Query Processing</h4>
                    <p>Search queries are analyzed for semantic meaning and intent</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Similarity Matching</h4>
                    <p>Content is ranked by semantic similarity, not just keyword matching</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Intelligent Results</h4>
                    <p>Results include relevance scores, categories, and content recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}