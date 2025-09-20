/**
 * Enhanced What's New Component with Advanced Filtering
 * 
 * Task 5.2: Implement What's New filtering system
 * - Create filterable content component with dropdown controls
 * - Build real-time filtering logic for date ranges, product areas, and content types
 * - Implement URL state management for shareable filtered views
 * - Create responsive design for mobile and desktop filtering interfaces
 */

import React, { useMemo } from 'react';
import { useGitHubData, useGitHubDataWatcher } from './useGitHubData';
import AdvancedFilters, { FilterState } from './AdvancedFilters';
import { useURLFilters } from './useURLFilters';
import { 
  filterItems, 
  extractFilterOptions, 
  sortItems, 
  generateShareableURL,
  WhatsNewItem 
} from './filterUtils';
import './EnhancedWhatsNew.css';

interface WhatsNewData {
  lastUpdated: string;
  version: string;
  items: WhatsNewItem[];
}

interface EnhancedWhatsNewProps {
  githubConfig?: {
    owner: string;
    repo: string;
    path: string;
    branch?: string;
  };
  enableWatcher?: boolean;
  showMetadata?: boolean;
  showShareButton?: boolean;
  className?: string;
}

const EnhancedWhatsNew: React.FC<EnhancedWhatsNewProps> = ({
  githubConfig = {
    owner: 'eriktechwriter',
    repo: 'ai-docs-poc',
    path: 'data/whats-new.yaml',
    branch: 'main'
  },
  enableWatcher = false,
  showMetadata = true,
  showShareButton = true,
  className = ''
}) => {
  const { filters, setFilters } = useURLFilters();

  // Use either watcher or regular fetch based on enableWatcher prop
  const hookResult = enableWatcher
    ? useGitHubDataWatcher<WhatsNewData>(githubConfig, {
        cacheTTL: 2 * 60 * 1000, // 2 minutes
        pollInterval: 30000, // 30 seconds
        validateSchema: {
          required: ['items'],
          properties: {
            items: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'title', 'description', 'date', 'category', 'type'],
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  date: { type: 'string' },
                  category: { type: 'string' },
                  type: { type: 'string' }
                }
              }
            }
          }
        }
      })
    : useGitHubData<WhatsNewData>(githubConfig, {
        cacheTTL: 5 * 60 * 1000, // 5 minutes
        validateSchema: {
          required: ['items'],
          properties: {
            items: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'title', 'description', 'date', 'category', 'type'],
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  date: { type: 'string' },
                  category: { type: 'string' },
                  type: { type: 'string' }
                }
              }
            }
          }
        }
      });

  const { data, loading, error, lastUpdated, refetch } = hookResult;
  const isChanged = 'isChanged' in hookResult ? hookResult.isChanged : false;

  // Process and filter data
  const { filteredItems, filterOptions, totalCount } = useMemo(() => {
    if (!data?.items) {
      return {
        filteredItems: [],
        filterOptions: {
          categories: [],
          types: [],
          priorities: [],
          productAreas: [],
          tags: []
        },
        totalCount: 0
      };
    }

    const sortedItems = sortItems(data.items);
    const options = extractFilterOptions(sortedItems);
    const filtered = filterItems(sortedItems, filters);

    return {
      filteredItems: filtered,
      filterOptions: options,
      totalCount: sortedItems.length
    };
  }, [data, filters]);

  // Format date for display
  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Get type icon
  const getTypeIcon = (type: string): string => {
    const icons = {
      feature: '🚀',
      improvement: '✨',
      bugfix: '🐛',
      announcement: '📢'
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  // Get priority color
  const getPriorityColor = (priority: string): string => {
    const colors = {
      high: '#dc3545',
      medium: '#ffc107',
      low: '#28a745'
    };
    return colors[priority as keyof typeof colors] || '#6c757d';
  };

  // Handle share button click
  const handleShare = async () => {
    const shareUrl = generateShareableURL(filters);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'What\'s New - Filtered View',
          text: `Check out these ${filteredItems.length} updates`,
          url: shareUrl
        });
      } catch (err) {
        // User cancelled or share failed, fall back to clipboard
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could show a toast notification here
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  if (loading && !data) {
    return (
      <div className={`enhanced-whats-new loading ${className}`}>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading What's New content from GitHub...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`enhanced-whats-new error ${className}`}>
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Failed to Load Content</h3>
          <p>{error.message}</p>
          <button className="retry-button" onClick={refetch}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={`enhanced-whats-new no-data ${className}`}>
        <div className="no-data-container">
          <div className="no-data-icon">📄</div>
          <h3>No Data Available</h3>
          <p>No content configuration provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`enhanced-whats-new ${className}`}>
      {showMetadata && (
        <div className="content-metadata">
          <div className="metadata-row">
            <span className="metadata-label">Source:</span>
            <span className="metadata-value">
              {githubConfig.owner}/{githubConfig.repo}/{githubConfig.path}
            </span>
          </div>
          {lastUpdated && (
            <div className="metadata-row">
              <span className="metadata-label">Last Updated:</span>
              <span className="metadata-value">
                {lastUpdated.toLocaleString()}
                {isChanged && <span className="changed-indicator">• Updated</span>}
              </span>
            </div>
          )}
          {data.version && (
            <div className="metadata-row">
              <span className="metadata-label">Data Version:</span>
              <span className="metadata-value">{data.version}</span>
            </div>
          )}
          <div className="metadata-actions">
            <button className="refresh-button" onClick={refetch} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
            {showShareButton && (
              <button className="share-button" onClick={handleShare}>
                Share Filtered View
              </button>
            )}
          </div>
        </div>
      )}

      <div className="content-header">
        <h2>What's New</h2>
        <p className="content-subtitle">
          Dynamic content with advanced filtering and URL state management
        </p>
      </div>

      <AdvancedFilters
        filters={filters}
        options={filterOptions}
        onFiltersChange={setFilters}
        resultCount={filteredItems.length}
        totalCount={totalCount}
      />

      <div className="content-items">
        {filteredItems.length === 0 ? (
          <div className="no-items">
            <div className="no-items-icon">🔍</div>
            <h3>No items match your filters</h3>
            <p>Try adjusting your filters to see more results.</p>
            <button 
              className="clear-filters-button"
              onClick={() => setFilters({
                category: 'all',
                type: 'all',
                priority: 'all',
                productArea: 'all',
                dateRange: 'all',
                searchTerm: '',
                tags: []
              })}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className="content-item">
              <div className="item-header">
                <div className="item-type">
                  <span className="type-icon">{getTypeIcon(item.type)}</span>
                  <span className="type-label">{item.type}</span>
                </div>
                <div className="item-priority">
                  <span 
                    className="priority-indicator"
                    style={{ backgroundColor: getPriorityColor(item.priority) }}
                  ></span>
                  <span className="priority-label">{item.priority}</span>
                </div>
              </div>

              <h3 className="item-title">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>

              <p className="item-description">{item.description}</p>

              <div className="item-meta">
                <div className="item-date">{formatDate(item.date)}</div>
                <div className="item-category">{item.category}</div>
                {item.productArea && (
                  <div className="item-product">{item.productArea}</div>
                )}
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="item-tags">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="item-tag"
                      onClick={() => {
                        const newTags = filters.tags.includes(tag)
                          ? filters.tags.filter(t => t !== tag)
                          : [...filters.tags, tag];
                        setFilters({ ...filters, tags: newTags });
                      }}
                      title={`Filter by ${tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {enableWatcher && (
        <div className="watcher-status">
          <div className="watcher-indicator">
            <span className="watcher-dot"></span>
            <span className="watcher-text">
              Watching for changes • Updates every 30 seconds
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedWhatsNew;