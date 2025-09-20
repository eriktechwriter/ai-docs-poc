/**
 * Shared Content Library Component
 * 
 * Provides a UI for managing and browsing the shared content library
 */

import React, { useState, useEffect } from 'react';
import { snippetManager, Snippet, ValidationResult } from './SnippetManager';
import SnippetInclude from './SnippetInclude';
import './SharedContentLibrary.css';

interface SharedContentLibraryProps {
  showCreateForm?: boolean;
  showUsageStats?: boolean;
  allowEditing?: boolean;
  className?: string;
}

const SharedContentLibrary: React.FC<SharedContentLibraryProps> = ({
  showCreateForm = false,
  showUsageStats = false,
  allowEditing = false,
  className = ''
}) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewVariables, setPreviewVariables] = useState<Record<string, any>>({});
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load snippets and metadata
  useEffect(() => {
    const loadLibrary = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would load from a file or API
        await loadSampleLibrary();
        
        const allSnippets = Object.values(snippetManager['library'].snippets);
        setSnippets(allSnippets);
        setCategories(snippetManager.getCategories());
        setTags(snippetManager.getTags());
      } catch (error) {
        console.error('Failed to load snippet library:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLibrary();
  }, []);

  // Filter snippets based on search criteria
  const filteredSnippets = snippets.filter(snippet => {
    // Text search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesText = 
        snippet.name.toLowerCase().includes(query) ||
        snippet.description.toLowerCase().includes(query) ||
        snippet.content.toLowerCase().includes(query);
      
      if (!matchesText) return false;
    }

    // Category filter
    if (selectedCategory !== 'all' && snippet.category !== selectedCategory) {
      return false;
    }

    // Tags filter
    if (selectedTags.length > 0) {
      const hasMatchingTag = selectedTags.some(tag => snippet.tags.includes(tag));
      if (!hasMatchingTag) return false;
    }

    return true;
  });

  const handleSnippetSelect = (snippet: Snippet) => {
    setSelectedSnippet(snippet);
    setShowPreview(true);
    
    // Initialize preview variables with defaults
    const defaultVars: Record<string, any> = {};
    Object.entries(snippet.variables).forEach(([name, varDef]) => {
      if (varDef.defaultValue !== undefined) {
        defaultVars[name] = varDef.defaultValue;
      }
    });
    setPreviewVariables(defaultVars);

    // Validate with default variables
    const validation = snippetManager.validateVariables(snippet, defaultVars);
    setValidationResult(validation);
  };

  const handleVariableChange = (name: string, value: any) => {
    const newVariables = { ...previewVariables, [name]: value };
    setPreviewVariables(newVariables);

    if (selectedSnippet) {
      const validation = snippetManager.validateVariables(selectedSnippet, newVariables);
      setValidationResult(validation);
    }
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const copySnippetCode = (snippet: Snippet) => {
    const code = `<SnippetInclude id="${snippet.id}" />`;
    navigator.clipboard.writeText(code);
    // You could show a toast notification here
  };

  const copySnippetCodeWithVariables = (snippet: Snippet, variables: Record<string, any>) => {
    const varsString = Object.keys(variables).length > 0 
      ? `\n  variables={${JSON.stringify(variables, null, 4)}}`
      : '';
    
    const code = `<SnippetInclude id="${snippet.id}"${varsString} />`;
    navigator.clipboard.writeText(code);
  };

  if (isLoading) {
    return (
      <div className={`shared-content-library loading ${className}`}>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading content library...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`shared-content-library ${className}`}>
      <div className="library-header">
        <h2>📚 Shared Content Library</h2>
        <p>Reusable content snippets with variable substitution</p>
      </div>

      {/* Search and Filters */}
      <div className="library-filters">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
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
            <label>Tags:</label>
            <div className="tag-filters">
              {tags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter ${selectedTags.includes(tag) ? 'active' : ''}`}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="results-summary">
          Showing {filteredSnippets.length} of {snippets.length} snippets
        </div>
      </div>

      <div className="library-content">
        {/* Snippet List */}
        <div className="snippets-list">
          {filteredSnippets.length === 0 ? (
            <div className="no-snippets">
              <div className="no-snippets-icon">📄</div>
              <h3>No snippets found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            filteredSnippets.map(snippet => (
              <div key={snippet.id} className="snippet-card">
                <div className="snippet-header">
                  <h3>{snippet.name}</h3>
                  <div className="snippet-actions">
                    <button
                      className="preview-button"
                      onClick={() => handleSnippetSelect(snippet)}
                      title="Preview snippet"
                    >
                      👁️ Preview
                    </button>
                    <button
                      className="copy-button"
                      onClick={() => copySnippetCode(snippet)}
                      title="Copy snippet code"
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>

                <p className="snippet-description">{snippet.description}</p>

                <div className="snippet-meta">
                  <span className="snippet-category">{snippet.category}</span>
                  <span className="snippet-version">v{snippet.version}</span>
                  <span className="snippet-author">by {snippet.author}</span>
                </div>

                {snippet.tags.length > 0 && (
                  <div className="snippet-tags">
                    {snippet.tags.map(tag => (
                      <span key={tag} className="snippet-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {Object.keys(snippet.variables).length > 0 && (
                  <div className="snippet-variables-info">
                    <strong>Variables:</strong> {Object.keys(snippet.variables).join(', ')}
                  </div>
                )}

                {showUsageStats && (
                  <div className="snippet-usage">
                    Used {snippet.usageCount} times
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Preview Panel */}
        {showPreview && selectedSnippet && (
          <div className="preview-panel">
            <div className="preview-header">
              <h3>Preview: {selectedSnippet.name}</h3>
              <button
                className="close-preview"
                onClick={() => setShowPreview(false)}
              >
                ✕
              </button>
            </div>

            {/* Variable Controls */}
            {Object.keys(selectedSnippet.variables).length > 0 && (
              <div className="variable-controls">
                <h4>Variables</h4>
                {Object.entries(selectedSnippet.variables).map(([name, varDef]) => (
                  <div key={name} className="variable-control">
                    <label>
                      {name}
                      {varDef.required && <span className="required">*</span>}
                    </label>
                    <input
                      type={varDef.type === 'number' ? 'number' : 'text'}
                      value={previewVariables[name] || ''}
                      onChange={(e) => handleVariableChange(name, e.target.value)}
                      placeholder={varDef.defaultValue || `Enter ${name}...`}
                    />
                    {varDef.description && (
                      <small className="variable-description">{varDef.description}</small>
                    )}
                  </div>
                ))}

                <div className="preview-actions">
                  <button
                    className="copy-with-vars-button"
                    onClick={() => copySnippetCodeWithVariables(selectedSnippet, previewVariables)}
                  >
                    📋 Copy with Variables
                  </button>
                </div>
              </div>
            )}

            {/* Validation Results */}
            {validationResult && !validationResult.isValid && (
              <div className="validation-errors">
                <h4>Validation Errors</h4>
                <ul>
                  {validationResult.errors.map((error, index) => (
                    <li key={index} className="error-item">
                      {error.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {validationResult && validationResult.warnings.length > 0 && (
              <div className="validation-warnings">
                <h4>Warnings</h4>
                <ul>
                  {validationResult.warnings.map((warning, index) => (
                    <li key={index} className="warning-item">
                      {warning.message}
                      {warning.suggestion && (
                        <div className="warning-suggestion">💡 {warning.suggestion}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preview Content */}
            <div className="preview-content">
              <h4>Preview</h4>
              <SnippetInclude
                id={selectedSnippet.id}
                variables={previewVariables}
                showMetadata={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Sample library loader (in real implementation, this would load from a file)
const loadSampleLibrary = async () => {
  const sampleLibraryYAML = `
version: "1.0.0"
lastUpdated: "2024-01-15T10:00:00Z"
categories:
  - general
  - alerts
  - procedures
  - troubleshooting
tags:
  - common
  - important
  - security
  - installation
  - configuration

snippets:
  warning-box:
    name: "Warning Box"
    description: "A styled warning box for important notices"
    category: "alerts"
    tags: ["common", "important"]
    version: "1.0.0"
    author: "Documentation Team"
    content: |
      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <h4>{{title}}</h4>
          <p>{{message}}</p>
        </div>
      </div>
    variables:
      title:
        type: "string"
        description: "Warning title"
        defaultValue: "Warning"
        required: true
      message:
        type: "string"
        description: "Warning message"
        required: true
    dependencies: []

  installation-steps:
    name: "Installation Steps"
    description: "Standard installation procedure template"
    category: "procedures"
    tags: ["installation", "common"]
    version: "1.2.0"
    author: "Technical Writers"
    content: |
      ## Installing {{productName}}

      Follow these steps to install {{productName}} on {{platform}}:

      1. **Download** the installer from the official website
      2. **Run** the installer with administrator privileges
      3. **Follow** the installation wizard
      4. **Configure** the initial settings
      5. **Verify** the installation by running: \`{{verifyCommand}}\`

      ### System Requirements
      - Operating System: {{platform}}
      - Memory: {{minMemory}} RAM minimum
      - Disk Space: {{diskSpace}} available

      > **Note:** Make sure to backup your system before installation.
    variables:
      productName:
        type: "string"
        description: "Name of the product being installed"
        required: true
      platform:
        type: "string"
        description: "Target platform (Windows, macOS, Linux)"
        defaultValue: "Windows"
        required: true
      verifyCommand:
        type: "string"
        description: "Command to verify installation"
        defaultValue: "product --version"
        required: false
      minMemory:
        type: "string"
        description: "Minimum memory requirement"
        defaultValue: "4GB"
        required: false
      diskSpace:
        type: "string"
        description: "Required disk space"
        defaultValue: "1GB"
        required: false
    dependencies: []

  troubleshooting-checklist:
    name: "Troubleshooting Checklist"
    description: "Generic troubleshooting checklist template"
    category: "troubleshooting"
    tags: ["troubleshooting", "common"]
    version: "1.0.0"
    author: "Support Team"
    content: |
      ## Troubleshooting {{issueType}}

      If you're experiencing {{issueDescription}}, try these steps:

      ### Quick Checks
      - [ ] Verify {{productName}} is running
      - [ ] Check system resources (CPU, memory, disk)
      - [ ] Review recent changes or updates
      - [ ] Check network connectivity (if applicable)

      ### Detailed Steps
      1. **Check logs** in {{logLocation}}
      2. **Restart** the {{serviceName}} service
      3. **Verify configuration** files are correct
      4. **Test** with minimal configuration
      5. **Contact support** if issue persists

      ### Common Solutions
      {{commonSolutions}}

      ### Getting Help
      If these steps don't resolve the issue, please contact support with:
      - Error messages or log entries
      - Steps to reproduce the problem
      - System information and version numbers
    variables:
      issueType:
        type: "string"
        description: "Type of issue (e.g., 'Connection Issues', 'Performance Problems')"
        required: true
      issueDescription:
        type: "string"
        description: "Brief description of the issue"
        required: true
      productName:
        type: "string"
        description: "Name of the product"
        required: true
      logLocation:
        type: "string"
        description: "Location of log files"
        defaultValue: "/var/log/application/"
        required: false
      serviceName:
        type: "string"
        description: "Name of the service to restart"
        required: false
      commonSolutions:
        type: "string"
        description: "List of common solutions"
        defaultValue: "- Clear cache and temporary files\\n- Update to latest version\\n- Check firewall settings"
        required: false
    dependencies: []
`;

  await snippetManager.loadLibrary(sampleLibraryYAML);
};

export default SharedContentLibrary;