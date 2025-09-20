/**
 * Cross-Reference System Demo Page
 * 
 * Demonstrates cross-reference and relationship management capabilities
 */

import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  RelatedContent,
  Breadcrumb,
  CrossReferenceList,
  NavigationTree,
  LinkValidationReport
} from '../components/ContentReuse/CrossReferenceComponents';
import { crossReferenceManager, ContentNode, CrossReference } from '../components/ContentReuse/CrossReferenceManager';
import '../components/ContentReuse/CrossReferenceComponents.css';

// Sample content nodes for demonstration
const sampleNodes: ContentNode[] = [
  {
    id: 'root',
    title: 'Documentation Home',
    path: '/',
    type: 'document',
    level: 0,
    children: ['getting-started', 'user-guide', 'admin-guide', 'api-reference'],
    metadata: {
      tags: ['documentation', 'home'],
      category: 'navigation',
      audience: ['beginner', 'intermediate', 'advanced'],
      lastModified: new Date('2024-01-15'),
      author: 'Documentation Team',
      version: '1.0.0'
    }
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    path: '/getting-started',
    type: 'document',
    level: 1,
    parent: 'root',
    children: ['installation', 'quick-start', 'first-steps'],
    metadata: {
      tags: ['getting-started', 'beginner', 'tutorial'],
      category: 'tutorial',
      audience: ['beginner'],
      lastModified: new Date('2024-01-14'),
      author: 'Technical Writers',
      version: '1.2.0'
    },
    content: 'Welcome to our software! This guide will help you get started quickly. We recommend starting with the Installation guide and then following the Quick Start tutorial.'
  },
  {
    id: 'installation',
    title: 'Installation Guide',
    path: '/getting-started/installation',
    type: 'task',
    level: 2,
    parent: 'getting-started',
    children: ['system-requirements', 'download', 'setup'],
    metadata: {
      tags: ['installation', 'setup', 'requirements'],
      category: 'tutorial',
      audience: ['beginner', 'intermediate'],
      lastModified: new Date('2024-01-13'),
      author: 'Technical Writers',
      version: '1.1.0'
    },
    content: 'Follow these steps to install the software on your system. Make sure to check the System Requirements first.'
  },
  {
    id: 'system-requirements',
    title: 'System Requirements',
    path: '/getting-started/installation/requirements',
    type: 'reference',
    level: 3,
    parent: 'installation',
    children: [],
    metadata: {
      tags: ['requirements', 'system', 'hardware', 'software'],
      category: 'reference',
      audience: ['beginner', 'intermediate', 'advanced'],
      lastModified: new Date('2024-01-12'),
      author: 'Technical Writers',
      version: '1.0.0'
    },
    content: 'Minimum system requirements: 4GB RAM, 2GB disk space, Windows 10 or later.'
  },
  {
    id: 'quick-start',
    title: 'Quick Start Tutorial',
    path: '/getting-started/quick-start',
    type: 'task',
    level: 2,
    parent: 'getting-started',
    children: [],
    metadata: {
      tags: ['quick-start', 'tutorial', 'beginner'],
      category: 'tutorial',
      audience: ['beginner'],
      lastModified: new Date('2024-01-11'),
      author: 'Technical Writers',
      version: '1.0.0'
    },
    content: 'This tutorial will walk you through the basic features. Complete the Installation first.'
  },
  {
    id: 'user-guide',
    title: 'User Guide',
    path: '/user-guide',
    type: 'document',
    level: 1,
    parent: 'root',
    children: ['basic-features', 'advanced-features', 'troubleshooting'],
    metadata: {
      tags: ['user-guide', 'features', 'how-to'],
      category: 'guide',
      audience: ['intermediate'],
      lastModified: new Date('2024-01-10'),
      author: 'Technical Writers',
      version: '2.0.0'
    },
    content: 'Comprehensive guide covering all user features and functionality.'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    path: '/user-guide/troubleshooting',
    type: 'reference',
    level: 2,
    parent: 'user-guide',
    children: ['common-issues', 'error-codes'],
    metadata: {
      tags: ['troubleshooting', 'problems', 'solutions', 'help'],
      category: 'support',
      audience: ['beginner', 'intermediate'],
      lastModified: new Date('2024-01-09'),
      author: 'Support Team',
      version: '1.5.0'
    },
    content: 'Common problems and their solutions. Check the Installation guide if you have setup issues.'
  },
  {
    id: 'admin-guide',
    title: 'Administrator Guide',
    path: '/admin-guide',
    type: 'document',
    level: 1,
    parent: 'root',
    children: ['configuration', 'user-management', 'security'],
    metadata: {
      tags: ['admin', 'configuration', 'management'],
      category: 'administration',
      audience: ['advanced'],
      lastModified: new Date('2024-01-08'),
      author: 'Technical Writers',
      version: '1.0.0'
    },
    content: 'Administrative tasks and configuration options for system administrators.'
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    path: '/api-reference',
    type: 'reference',
    level: 1,
    parent: 'root',
    children: ['authentication', 'endpoints', 'examples'],
    metadata: {
      tags: ['api', 'reference', 'development', 'integration'],
      category: 'reference',
      audience: ['advanced'],
      lastModified: new Date('2024-01-07'),
      author: 'Development Team',
      version: '3.0.0'
    },
    content: 'Complete API documentation for developers and integrators.'
  }
];

// Sample cross-references
const sampleReferences: CrossReference[] = [
  {
    id: 'getting-started-installation',
    sourceId: 'getting-started',
    targetId: 'installation',
    type: 'prerequisite',
    label: 'Installation Guide',
    description: 'Required before using the software',
    strength: 0.9,
    bidirectional: false,
    automatic: false,
    validated: true,
    lastValidated: new Date()
  },
  {
    id: 'installation-requirements',
    sourceId: 'installation',
    targetId: 'system-requirements',
    type: 'prerequisite',
    label: 'System Requirements',
    description: 'Check before installing',
    strength: 1.0,
    bidirectional: false,
    automatic: false,
    validated: true,
    lastValidated: new Date()
  },
  {
    id: 'quick-start-installation',
    sourceId: 'quick-start',
    targetId: 'installation',
    type: 'prerequisite',
    label: 'Installation Guide',
    description: 'Must be completed first',
    strength: 0.95,
    bidirectional: false,
    automatic: true,
    validated: true,
    lastValidated: new Date(),
    context: 'Mentioned in content: "Complete the Installation first"'
  },
  {
    id: 'troubleshooting-installation',
    sourceId: 'troubleshooting',
    targetId: 'installation',
    type: 'see-also',
    label: 'Installation Guide',
    description: 'For setup-related issues',
    strength: 0.7,
    bidirectional: false,
    automatic: true,
    validated: true,
    lastValidated: new Date(),
    context: 'Mentioned in content: "Check the Installation guide if you have setup issues"'
  },
  {
    id: 'getting-started-user-guide',
    sourceId: 'getting-started',
    targetId: 'user-guide',
    type: 'follow-up',
    label: 'User Guide',
    description: 'Next steps after getting started',
    strength: 0.8,
    bidirectional: false,
    automatic: false,
    validated: true,
    lastValidated: new Date()
  }
];

export default function CrossReferenceDemo(): JSX.Element {
  // Initialize the cross-reference manager with sample data
  useEffect(() => {
    // Add all nodes
    sampleNodes.forEach(node => {
      crossReferenceManager.addNode(node);
    });

    // Add all references
    sampleReferences.forEach(ref => {
      crossReferenceManager.addReference(ref);
    });

    // Build hierarchy
    crossReferenceManager.buildHierarchy('root');
  }, []);

  return (
    <Layout
      title="Cross-Reference System Demo"
      description="Demonstration of cross-reference and relationship management capabilities"
    >
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>Cross-Reference System Demo</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              This page demonstrates cross-reference and relationship management capabilities,
              including automatic link validation, dynamic reference generation, and content hierarchy navigation.
            </p>
          </header>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Features Demonstrated</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🔗 Cross-References</h3>
                <p>Automatic and manual cross-reference management with validation and relationship tracking.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🧭 Navigation</h3>
                <p>Hierarchical navigation with breadcrumbs and expandable tree structures.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🎯 Related Content</h3>
                <p>AI-powered content suggestions based on semantic similarity and structural relationships.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>✅ Link Validation</h3>
                <p>Automatic validation of internal links with broken link detection and reporting.</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Breadcrumb Navigation</h2>
            <p style={{ marginBottom: '1rem' }}>
              Breadcrumb navigation shows the hierarchical path to the current content:
            </p>
            
            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <h4>Example: Installation Guide</h4>
              <Breadcrumb nodeId="installation" showHome={true} />
            </div>

            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <h4>Example: System Requirements</h4>
              <Breadcrumb nodeId="system-requirements" showHome={true} />
            </div>

            <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <h4>Example: Troubleshooting</h4>
              <Breadcrumb nodeId="troubleshooting" showHome={true} />
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Navigation Tree</h2>
            <p style={{ marginBottom: '1rem' }}>
              Hierarchical navigation tree with expandable sections:
            </p>
            <NavigationTree rootId="root" currentNodeId="installation" maxDepth={4} />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Cross-Reference Lists</h2>
            <p style={{ marginBottom: '1rem' }}>
              Cross-references show relationships between content pieces:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <div>
                <h3>Getting Started References</h3>
                <CrossReferenceList nodeId="getting-started" showValidation={true} />
              </div>

              <div>
                <h3>Installation References</h3>
                <CrossReferenceList nodeId="installation" showValidation={true} />
              </div>

              <div>
                <h3>Quick Start References</h3>
                <CrossReferenceList nodeId="quick-start" showValidation={true} />
              </div>

              <div>
                <h3>Troubleshooting References</h3>
                <CrossReferenceList nodeId="troubleshooting" showValidation={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Related Content Suggestions</h2>
            <p style={{ marginBottom: '1rem' }}>
              AI-powered content suggestions based on multiple algorithms:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <div>
                <h3>Related to Getting Started</h3>
                <RelatedContent 
                  nodeId="getting-started" 
                  maxSuggestions={5}
                  algorithms={['structural', 'categorical']}
                  showReasons={true}
                />
              </div>

              <div>
                <h3>Related to Installation</h3>
                <RelatedContent 
                  nodeId="installation" 
                  maxSuggestions={5}
                  algorithms={['structural', 'categorical']}
                  showReasons={true}
                />
              </div>

              <div>
                <h3>Related to User Guide</h3>
                <RelatedContent 
                  nodeId="user-guide" 
                  maxSuggestions={5}
                  algorithms={['structural', 'categorical']}
                  showReasons={true}
                />
              </div>

              <div>
                <h3>Related to API Reference</h3>
                <RelatedContent 
                  nodeId="api-reference" 
                  maxSuggestions={5}
                  algorithms={['structural', 'categorical']}
                  showReasons={true}
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Link Validation</h2>
            <p style={{ marginBottom: '1rem' }}>
              Automatic validation of cross-references and link integrity:
            </p>
            <LinkValidationReport />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>System Statistics</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <SystemStatistics />
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Technical Implementation</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Architecture Overview</h3>
              <ul>
                <li><strong>CrossReferenceManager:</strong> Core service for managing content relationships and cross-references</li>
                <li><strong>RelatedContent Component:</strong> AI-powered content suggestions with multiple algorithms</li>
                <li><strong>Breadcrumb Component:</strong> Hierarchical navigation path display</li>
                <li><strong>NavigationTree Component:</strong> Expandable tree navigation structure</li>
                <li><strong>LinkValidationReport:</strong> Automatic link validation and broken link detection</li>
              </ul>
              
              <h3>Key Features</h3>
              <ul>
                <li>Automatic cross-reference generation from content analysis</li>
                <li>Multiple relationship types (prerequisite, follow-up, see-also, related)</li>
                <li>Hierarchical content organization with parent-child relationships</li>
                <li>Link validation with caching and status tracking</li>
                <li>Related content suggestions using semantic, structural, and categorical algorithms</li>
                <li>Breadcrumb navigation with automatic path generation</li>
                <li>Expandable navigation trees with current page highlighting</li>
              </ul>

              <h3>Relationship Types</h3>
              <ul>
                <li><strong>Prerequisite:</strong> Content that must be read/completed first</li>
                <li><strong>Follow-up:</strong> Logical next steps or continuation</li>
                <li><strong>See-also:</strong> Related content for additional information</li>
                <li><strong>Parent-child:</strong> Hierarchical structural relationships</li>
                <li><strong>Sibling:</strong> Content at the same hierarchical level</li>
                <li><strong>Related:</strong> General content relationships</li>
              </ul>

              <h3>Suggestion Algorithms</h3>
              <ul>
                <li><strong>Semantic:</strong> Content similarity based on vector embeddings</li>
                <li><strong>Structural:</strong> Relationships based on content hierarchy</li>
                <li><strong>Categorical:</strong> Similarity based on tags, categories, and metadata</li>
                <li><strong>Collaborative:</strong> User behavior and interaction patterns</li>
                <li><strong>Temporal:</strong> Recently updated or trending content</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Usage Examples</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Related Content Component</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<RelatedContent 
  nodeId="current-page-id"
  maxSuggestions={5}
  algorithms={['semantic', 'structural', 'categorical']}
  showReasons={true}
/>`}
              </pre>

              <h3>Breadcrumb Navigation</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<Breadcrumb 
  nodeId="current-page-id"
  separator="/"
  showHome={true}
/>`}
              </pre>

              <h3>Cross-Reference List</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<CrossReferenceList 
  nodeId="current-page-id"
  types={['prerequisite', 'follow-up', 'see-also']}
  showValidation={true}
/>`}
              </pre>

              <h3>Navigation Tree</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<NavigationTree 
  rootId="documentation-root"
  currentNodeId="current-page-id"
  maxDepth={4}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// System Statistics Component
const SystemStatistics: React.FC = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const systemStats = crossReferenceManager.getStatistics();
    setStats(systemStats);
  }, []);

  if (!stats) {
    return <div>Loading statistics...</div>;
  }

  return (
    <div>
      <h3>Content System Statistics</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '6px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1976d2' }}>{stats.totalNodes}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Nodes</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '6px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>{stats.totalReferences}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total References</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '6px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>{stats.averageReferencesPerNode.toFixed(1)}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Avg Refs/Node</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '6px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545' }}>{stats.brokenLinksCount}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Broken Links</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{ background: 'white', padding: '1rem', borderRadius: '6px' }}>
          <h4>Nodes by Type</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Object.entries(stats.nodesByType).map(([type, count]) => (
              <li key={type} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
                <span>{type}</span>
                <strong>{count as number}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: 'white', padding: '1rem', borderRadius: '6px' }}>
          <h4>References by Type</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Object.entries(stats.referencesByType).map(([type, count]) => (
              <li key={type} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
                <span>{type}</span>
                <strong>{count as number}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};