/**
 * GitHub Data Integration Demo Page
 * 
 * Demonstrates the GitHub YAML data integration system with:
 * - Real-time data fetching from GitHub repositories
 * - Change detection and automatic updates
 * - Data validation and schema checking
 * - Caching system for offline development and performance
 * - What's New filtering system with dropdown controls
 */

import React from 'react';
import Layout from '@theme/Layout';
import DynamicContent from '../components/GitHubData/DynamicContent';
import EnhancedWhatsNew from '../components/GitHubData/EnhancedWhatsNew';

export default function GitHubDataDemo(): JSX.Element {
  return (
    <Layout
      title="GitHub Data Integration Demo"
      description="Demonstration of dynamic content loading from GitHub YAML sources with real-time updates and filtering"
    >
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>GitHub Data Integration Demo</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              This page demonstrates the GitHub YAML data integration system with real-time content loading,
              change detection, data validation, and advanced filtering capabilities.
            </p>
          </header>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Features Demonstrated</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🔄 Real-time Data Fetching</h3>
                <p>Fetches YAML data directly from GitHub repositories with automatic caching and change detection.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>✅ Data Validation</h3>
                <p>Validates YAML data against predefined schemas to ensure data integrity and consistency.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🎛️ Advanced Filtering</h3>
                <p>Multi-dimensional filtering by category, type, priority, and date ranges with URL state management.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>⚡ Performance Optimized</h3>
                <p>Intelligent caching, retry logic, and offline support for optimal performance and reliability.</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Static Content Example</h2>
            <p style={{ marginBottom: '1rem' }}>
              This example loads content from a local YAML file with standard caching (5-minute TTL):
            </p>
            <DynamicContent
              githubConfig={{
                owner: 'eriktechwriter',
                repo: 'ai-docs-poc',
                path: 'data/whats-new.yaml',
                branch: 'main'
              }}
              enableWatcher={false}
              showMetadata={true}
            />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Enhanced Filtering System</h2>
            <p style={{ marginBottom: '1rem' }}>
              This example demonstrates the advanced filtering system with URL state management, 
              multi-dimensional filtering, and shareable filtered views:
            </p>
            <EnhancedWhatsNew
              githubConfig={{
                owner: 'eriktechwriter',
                repo: 'ai-docs-poc',
                path: 'data/whats-new.yaml',
                branch: 'main'
              }}
              enableWatcher={false}
              showMetadata={true}
              showShareButton={true}
            />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Real-time Watcher with Advanced Filtering</h2>
            <p style={{ marginBottom: '1rem' }}>
              This example combines real-time change detection with advanced filtering capabilities:
            </p>
            <EnhancedWhatsNew
              githubConfig={{
                owner: 'eriktechwriter',
                repo: 'ai-docs-poc',
                path: 'data/whats-new.yaml',
                branch: 'main'
              }}
              enableWatcher={true}
              showMetadata={true}
              showShareButton={true}
            />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Technical Implementation</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Architecture Overview</h3>
              <ul>
                <li><strong>GitHubDataService:</strong> Core service for fetching and caching YAML data from GitHub API</li>
                <li><strong>useGitHubData Hook:</strong> React hook for easy integration with components</li>
                <li><strong>useGitHubDataWatcher Hook:</strong> Real-time change detection with polling</li>
                <li><strong>DynamicContent Component:</strong> Filterable UI component with responsive design</li>
              </ul>
              
              <h3>Key Features</h3>
              <ul>
                <li>Automatic retry logic with exponential backoff</li>
                <li>ETags and Last-Modified headers for efficient caching</li>
                <li>Schema validation with detailed error reporting</li>
                <li>Offline support with stale data fallback</li>
                <li>URL state management for shareable filtered views</li>
                <li>Mobile-responsive filtering interface</li>
                <li>Advanced multi-dimensional filtering (category, type, priority, date, search, tags)</li>
                <li>Real-time search with debounced input</li>
                <li>Clickable tags for quick filtering</li>
                <li>Share button with native Web Share API support</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Configuration Examples</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Basic Usage</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<DynamicContent
  githubConfig={{
    owner: 'your-org',
    repo: 'your-repo',
    path: 'data/content.yaml',
    branch: 'main'
  }}
  enableWatcher={false}
  showMetadata={true}
/>`}
              </pre>

              <h3>Enhanced Filtering System</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<EnhancedWhatsNew
  githubConfig={{
    owner: 'your-org',
    repo: 'your-repo',
    path: 'data/content.yaml',
    branch: 'main'
  }}
  enableWatcher={true}
  showMetadata={true}
  showShareButton={true}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}