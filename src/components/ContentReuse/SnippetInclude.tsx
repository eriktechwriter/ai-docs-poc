/**
 * Snippet Include Component for MDX
 * 
 * Allows including reusable content snippets in MDX documents
 */

import React, { useState, useEffect } from 'react';
import { snippetManager, Snippet, ValidationResult } from './SnippetManager';
import './SnippetInclude.css';

interface SnippetIncludeProps {
  id: string;
  variables?: Record<string, any>;
  showMetadata?: boolean;
  className?: string;
  onError?: (error: string) => void;
}

const SnippetInclude: React.FC<SnippetIncludeProps> = ({
  id,
  variables = {},
  showMetadata = false,
  className = '',
  onError
}) => {
  const [content, setContent] = useState<string>('');
  const [snippet, setSnippet] = useState<Snippet | null>(null);
  const [error, setError] = useState<string>('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSnippet = async () => {
      setIsLoading(true);
      setError('');

      try {
        const snippetData = snippetManager.getSnippet(id);
        
        if (!snippetData) {
          throw new Error(`Snippet not found: ${id}`);
        }

        setSnippet(snippetData);

        // Validate variables
        const validationResult = snippetManager.validateVariables(snippetData, variables);
        setValidation(validationResult);

        if (!validationResult.isValid) {
          const errorMessage = validationResult.errors.map(e => e.message).join(', ');
          throw new Error(`Validation failed: ${errorMessage}`);
        }

        // Render snippet
        const renderedContent = snippetManager.renderSnippet(id, variables);
        setContent(renderedContent);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        onError?.(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadSnippet();
  }, [id, variables, onError]);

  if (isLoading) {
    return (
      <div className={`snippet-include loading ${className}`}>
        <div className="snippet-loading">
          <div className="loading-spinner"></div>
          <span>Loading snippet...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`snippet-include error ${className}`}>
        <div className="snippet-error">
          <div className="error-icon">⚠️</div>
          <div className="error-content">
            <h4>Snippet Error</h4>
            <p>{error}</p>
            <div className="error-details">
              <strong>Snippet ID:</strong> {id}
              {Object.keys(variables).length > 0 && (
                <>
                  <br />
                  <strong>Variables:</strong> {JSON.stringify(variables, null, 2)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`snippet-include ${className}`}>
      {showMetadata && snippet && (
        <div className="snippet-metadata">
          <div className="metadata-header">
            <h4>📄 {snippet.name}</h4>
            <span className="snippet-id">ID: {snippet.id}</span>
          </div>
          
          {snippet.description && (
            <p className="snippet-description">{snippet.description}</p>
          )}
          
          <div className="metadata-details">
            <div className="metadata-item">
              <strong>Category:</strong> {snippet.category}
            </div>
            <div className="metadata-item">
              <strong>Version:</strong> {snippet.version}
            </div>
            <div className="metadata-item">
              <strong>Author:</strong> {snippet.author}
            </div>
            <div className="metadata-item">
              <strong>Last Modified:</strong> {snippet.lastModified.toLocaleDateString()}
            </div>
            {snippet.tags.length > 0 && (
              <div className="metadata-item">
                <strong>Tags:</strong>
                <div className="snippet-tags">
                  {snippet.tags.map(tag => (
                    <span key={tag} className="snippet-tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {Object.keys(variables).length > 0 && (
            <div className="snippet-variables">
              <strong>Variables Used:</strong>
              <div className="variables-list">
                {Object.entries(variables).map(([name, value]) => (
                  <div key={name} className="variable-item">
                    <code className="variable-name">{name}</code>
                    <span className="variable-value">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {validation && validation.warnings.length > 0 && (
            <div className="snippet-warnings">
              <strong>Warnings:</strong>
              <ul>
                {validation.warnings.map((warning, index) => (
                  <li key={index} className="warning-item">
                    {warning.message}
                    {warning.suggestion && (
                      <div className="warning-suggestion">
                        💡 {warning.suggestion}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div 
        className="snippet-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default SnippetInclude;