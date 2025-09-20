/**
 * Dynamic Content Component
 * 
 * Demonstrates dynamic content loading from GitHub YAML sources
 * with real-time updates and caching
 */

import React, { useState } from 'react';
import { useGitHubData, useGitHubDataWatcher } from './useGitHubData';
import './DynamicContent.css';

interface WhatsNewItem {
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

interface WhatsNewData {
  lastUpdated: string;
  version: string;
  items: WhatsNewItem[];
}

interface DynamicContentProps {
  githubConfig?: {
    owner: string;
    repo: string;
    path: string;
    branch?: string;
  };
  enableWatcher?: boolean;
  showMetadata?: boolean;
  className?: string;
}

const DynamicContent: React.FC<DynamicContentProps> = ({
  githubConfig = {
    owner: 'eriktechwriter',
    repo: 'ai-docs-poc',
    path: 'data/whats-new.yaml',
    branch: 'main'
  },
  enableWatcher = false,
  showMetadata = true,
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

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

  // Filter items based on selected filters
  const filteredItems = data?.items?.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    if (selectedPriority !== 'all' && item.priority !== selectedPriority) return false;
    return true;
  }) || [];

  // Get unique values for filters
  const categories = [...new Set(data?.items?.map(item => item.category) || [])];
  const types = [...new Set(data?.items?.map(item => item.type) || [])];
  const priorities = [...new Set(data?.items?.map(item => item.priority) || [])];

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

  if (loading && !data) {
    return (
      <div className={`dynamic-content loading ${className}`}>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dynamic content from GitHub...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`dynamic-content error ${className}`}>
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Failed to Load Dynamic Content</h3>
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
      <div className={`dynamic-content no-data ${className}`}>
        <div className="no-data-container">
          <div className="no-data-icon">📄</div>
          <h3>No Data Available</h3>
          <p>No dynamic content configuration provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`dynamic-content ${className}`}>
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
          </div>
        </div>
      )}

      <div className="content-header">
        <h2>What's New</h2>
        <p className="content-subtitle">
          Dynamic content loaded from GitHub • {filteredItems.length} items
        </p>
      </div>

      <div className="content-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Type:</label>
          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {getTypeIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Priority:</label>
          <select 
            value={selectedPriority} 
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="all">All Priorities</option>
            {priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-results">
          Showing {filteredItems.length} of {data.items?.length || 0} items
        </div>
      </div>

      <div className="content-items">
        {filteredItems.length === 0 ? (
          <div className="no-items">
            <p>No items match the selected filters.</p>
            <button 
              className="clear-filters-button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSelectedPriority('all');
              }}
            >
              Clear Filters
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
                    <span key={tag} className="item-tag">{tag}</span>
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
              {enableWatcher ? 'Watching for changes' : 'Static content'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicContent;