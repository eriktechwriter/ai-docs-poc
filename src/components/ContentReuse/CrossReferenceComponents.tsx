/**
 * Cross-Reference React Components
 * 
 * Components for displaying and managing cross-references and related content
 */

import React, { useState, useEffect } from 'react';
import { 
  crossReferenceManager, 
  ContentNode, 
  CrossReference, 
  RelatedContentSuggestion,
  LinkValidationResult 
} from './CrossReferenceManager';
import './CrossReferenceComponents.css';

// Related Content Component
interface RelatedContentProps {
  nodeId: string;
  maxSuggestions?: number;
  algorithms?: string[];
  showReasons?: boolean;
  className?: string;
}

export const RelatedContent: React.FC<RelatedContentProps> = ({
  nodeId,
  maxSuggestions = 5,
  algorithms = ['semantic', 'structural', 'categorical'],
  showReasons = false,
  className = ''
}) => {
  const [suggestions, setSuggestions] = useState<RelatedContentSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadSuggestions = async () => {
      setLoading(true);
      setError('');

      try {
        const results = await crossReferenceManager.getRelatedContent(
          nodeId, 
          maxSuggestions, 
          algorithms
        );
        setSuggestions(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load related content');
      } finally {
        setLoading(false);
      }
    };

    loadSuggestions();
  }, [nodeId, maxSuggestions, algorithms]);

  if (loading) {
    return (
      <div className={`related-content loading ${className}`}>
        <div className="loading-spinner"></div>
        <span>Loading related content...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`related-content error ${className}`}>
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className={`related-content empty ${className}`}>
        <p>No related content found.</p>
      </div>
    );
  }

  return (
    <div className={`related-content ${className}`}>
      <h3>Related Content</h3>
      <div className="suggestions-list">
        {suggestions.map(suggestion => (
          <div key={suggestion.targetId} className="suggestion-item">
            <div className="suggestion-header">
              <a href={suggestion.path} className="suggestion-title">
                {suggestion.title}
              </a>
              <div className="suggestion-score">
                {Math.round(suggestion.relevanceScore * 100)}%
              </div>
            </div>
            
            <div className="suggestion-meta">
              <span className="suggestion-type">{suggestion.metadata.type}</span>
              <span className="suggestion-category">{suggestion.metadata.category}</span>
              <span className="suggestion-reason">{suggestion.reason}</span>
            </div>

            {showReasons && (
              <div className="suggestion-explanation">
                {suggestion.explanation}
              </div>
            )}

            {suggestion.metadata.tags.length > 0 && (
              <div className="suggestion-tags">
                {suggestion.metadata.tags.map(tag => (
                  <span key={tag} className="suggestion-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Breadcrumb Navigation Component
interface BreadcrumbProps {
  nodeId: string;
  separator?: string;
  showHome?: boolean;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  nodeId,
  separator = '/',
  showHome = true,
  className = ''
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState<ContentNode[]>([]);

  useEffect(() => {
    const crumbs = crossReferenceManager.getBreadcrumbs(nodeId);
    setBreadcrumbs(crumbs);
  }, [nodeId]);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {showHome && (
          <li className="breadcrumb-item">
            <a href="/" className="breadcrumb-link">
              🏠 Home
            </a>
            <span className="breadcrumb-separator">{separator}</span>
          </li>
        )}
        
        {breadcrumbs.map((node, index) => (
          <li key={node.id} className="breadcrumb-item">
            {index < breadcrumbs.length - 1 ? (
              <>
                <a href={node.path} className="breadcrumb-link">
                  {node.title}
                </a>
                <span className="breadcrumb-separator">{separator}</span>
              </>
            ) : (
              <span className="breadcrumb-current" aria-current="page">
                {node.title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Cross-Reference List Component
interface CrossReferenceListProps {
  nodeId: string;
  types?: string[];
  showValidation?: boolean;
  className?: string;
}

export const CrossReferenceList: React.FC<CrossReferenceListProps> = ({
  nodeId,
  types,
  showValidation = false,
  className = ''
}) => {
  const [references, setReferences] = useState<CrossReference[]>([]);
  const [validationResults, setValidationResults] = useState<Map<string, LinkValidationResult>>(new Map());

  useEffect(() => {
    const refs = types 
      ? types.flatMap(type => crossReferenceManager.getReferences(nodeId, type))
      : crossReferenceManager.getReferences(nodeId);
    
    setReferences(refs);

    if (showValidation) {
      // Validate links
      const validateLinks = async () => {
        const results = new Map<string, LinkValidationResult>();
        
        for (const ref of refs) {
          const result = await crossReferenceManager.validateLink(ref);
          results.set(ref.id, result);
        }
        
        setValidationResults(results);
      };

      validateLinks();
    }
  }, [nodeId, types, showValidation]);

  if (references.length === 0) {
    return (
      <div className={`cross-reference-list empty ${className}`}>
        <p>No cross-references found.</p>
      </div>
    );
  }

  const groupedRefs = references.reduce((groups, ref) => {
    if (!groups[ref.type]) {
      groups[ref.type] = [];
    }
    groups[ref.type].push(ref);
    return groups;
  }, {} as Record<string, CrossReference[]>);

  return (
    <div className={`cross-reference-list ${className}`}>
      <h3>Cross-References</h3>
      
      {Object.entries(groupedRefs).map(([type, refs]) => (
        <div key={type} className="reference-group">
          <h4 className="reference-type-header">
            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          </h4>
          
          <ul className="reference-list">
            {refs.map(ref => {
              const validation = validationResults.get(ref.id);
              
              return (
                <li key={ref.id} className="reference-item">
                  <div className="reference-content">
                    <a 
                      href={`#${ref.targetId}`} 
                      className={`reference-link ${validation && !validation.isValid ? 'invalid' : ''}`}
                    >
                      {ref.label || ref.targetId}
                    </a>
                    
                    {ref.description && (
                      <span className="reference-description">
                        - {ref.description}
                      </span>
                    )}
                  </div>

                  <div className="reference-meta">
                    <span className="reference-strength">
                      {Math.round(ref.strength * 100)}%
                    </span>
                    
                    {ref.automatic && (
                      <span className="reference-badge auto">Auto</span>
                    )}
                    
                    {ref.bidirectional && (
                      <span className="reference-badge bidirectional">↔</span>
                    )}

                    {showValidation && validation && (
                      <span className={`validation-status ${validation.isValid ? 'valid' : 'invalid'}`}>
                        {validation.isValid ? '✅' : '❌'}
                      </span>
                    )}
                  </div>

                  {ref.context && (
                    <div className="reference-context">
                      {ref.context}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Navigation Tree Component
interface NavigationTreeProps {
  rootId: string;
  currentNodeId?: string;
  maxDepth?: number;
  className?: string;
}

export const NavigationTree: React.FC<NavigationTreeProps> = ({
  rootId,
  currentNodeId,
  maxDepth = 5,
  className = ''
}) => {
  const [navigationStructure, setNavigationStructure] = useState<any>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    const structure = crossReferenceManager.getNavigationStructure(rootId);
    setNavigationStructure(structure);

    // Auto-expand path to current node
    if (currentNodeId) {
      const breadcrumbs = crossReferenceManager.getBreadcrumbs(currentNodeId);
      const expanded = new Set(breadcrumbs.map(node => node.id));
      setExpandedNodes(expanded);
    }
  }, [rootId, currentNodeId]);

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: any, depth: number = 0): React.ReactNode => {
    if (depth >= maxDepth) return null;

    const isExpanded = expandedNodes.has(node.id);
    const isCurrent = node.id === currentNodeId;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <li key={node.id} className="nav-item">
        <div className={`nav-node ${isCurrent ? 'current' : ''}`}>
          {hasChildren && (
            <button
              className={`nav-toggle ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleNode(node.id)}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? '▼' : '▶'}
            </button>
          )}
          
          <a 
            href={node.path} 
            className={`nav-link ${isCurrent ? 'current' : ''}`}
          >
            <span className="nav-icon">{getTypeIcon(node.type)}</span>
            <span className="nav-title">{node.title}</span>
          </a>
        </div>

        {hasChildren && isExpanded && (
          <ul className="nav-children">
            {node.children.map((child: any) => renderNode(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  if (!navigationStructure) {
    return (
      <div className={`navigation-tree loading ${className}`}>
        <div className="loading-spinner"></div>
        <span>Loading navigation...</span>
      </div>
    );
  }

  return (
    <nav className={`navigation-tree ${className}`}>
      <ul className="nav-root">
        {renderNode(navigationStructure)}
      </ul>
    </nav>
  );
};

// Link Validation Report Component
interface LinkValidationReportProps {
  nodeId?: string; // If provided, validate only this node's links
  className?: string;
}

export const LinkValidationReport: React.FC<LinkValidationReportProps> = ({
  nodeId,
  className = ''
}) => {
  const [validationResults, setValidationResults] = useState<Map<string, LinkValidationResult>>(new Map());
  const [loading, setLoading] = useState(false);
  const [lastValidated, setLastValidated] = useState<Date | null>(null);

  const runValidation = async () => {
    setLoading(true);
    
    try {
      let results: Map<string, LinkValidationResult>;
      
      if (nodeId) {
        // Validate only specific node's links
        results = new Map();
        const refs = crossReferenceManager.getReferences(nodeId);
        
        for (const ref of refs) {
          const result = await crossReferenceManager.validateLink(ref);
          results.set(ref.id, result);
        }
      } else {
        // Validate all links
        results = await crossReferenceManager.validateAllLinks();
      }
      
      setValidationResults(results);
      setLastValidated(new Date());
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runValidation();
  }, [nodeId]);

  const validLinks = Array.from(validationResults.values()).filter(r => r.isValid);
  const invalidLinks = Array.from(validationResults.values()).filter(r => !r.isValid);

  return (
    <div className={`link-validation-report ${className}`}>
      <div className="report-header">
        <h3>Link Validation Report</h3>
        <button 
          className="validate-button" 
          onClick={runValidation}
          disabled={loading}
        >
          {loading ? 'Validating...' : 'Validate Links'}
        </button>
      </div>

      {lastValidated && (
        <div className="report-meta">
          Last validated: {lastValidated.toLocaleString()}
        </div>
      )}

      <div className="validation-summary">
        <div className="summary-item valid">
          <span className="summary-count">{validLinks.length}</span>
          <span className="summary-label">Valid Links</span>
        </div>
        <div className="summary-item invalid">
          <span className="summary-count">{invalidLinks.length}</span>
          <span className="summary-label">Invalid Links</span>
        </div>
      </div>

      {invalidLinks.length > 0 && (
        <div className="invalid-links">
          <h4>Invalid Links</h4>
          <ul className="invalid-links-list">
            {invalidLinks.map((result, index) => (
              <li key={index} className="invalid-link-item">
                <div className="invalid-link-info">
                  <span className="invalid-link-status">❌</span>
                  <span className="invalid-link-error">
                    {result.error || 'Link validation failed'}
                  </span>
                </div>
                <div className="invalid-link-details">
                  Checked: {result.lastChecked.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Helper function to get type icons
const getTypeIcon = (type: string): string => {
  const icons: Record<string, string> = {
    document: '📄',
    section: '📑',
    topic: '📝',
    concept: '💡',
    task: '✅',
    reference: '📚'
  };
  return icons[type] || '📄';
};