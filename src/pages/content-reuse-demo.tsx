/**
 * Content Reuse System Demo Page
 * 
 * Demonstrates the content reuse system with snippet management,
 * variable substitution, and validation capabilities
 */

import React from 'react';
import Layout from '@theme/Layout';
import SharedContentLibrary from '../components/ContentReuse/SharedContentLibrary';
import SnippetInclude from '../components/ContentReuse/SnippetInclude';
import { VariableProvider, Variable, Conditional, VariableList } from '../components/ContentReuse/VariableSubstitution';

export default function ContentReuseDemo(): JSX.Element {
  return (
    <Layout
      title="Content Reuse System Demo"
      description="Demonstration of DITA-like content reuse functionality using MDX components"
    >
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>Content Reuse System Demo</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              This page demonstrates DITA-like content reuse functionality using MDX components,
              including snippet management, variable substitution, and content validation.
            </p>
          </header>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Features Demonstrated</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>📄 Snippet Management</h3>
                <p>Reusable content blocks with metadata, versioning, and dependency tracking.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>🔧 Variable Substitution</h3>
                <p>Dynamic content with type-safe variable substitution and validation.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>✅ Content Validation</h3>
                <p>Automatic validation of references, dependencies, and content integrity.</p>
              </div>
              <div style={{ padding: '1rem', border: '1px solid #e1e5e9', borderRadius: '8px' }}>
                <h3>📚 Shared Library</h3>
                <p>Centralized content library with search, filtering, and usage analytics.</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Variable Substitution Example</h2>
            <p style={{ marginBottom: '1rem' }}>
              This example shows how variables can be used to create dynamic content:
            </p>
            
            <VariableProvider variables={{
              productName: 'Endpoint Security Pro',
              version: '2024.1',
              platform: 'Windows',
              releaseDate: '2024-01-15',
              isNewFeature: true,
              supportedVersions: ['2023.1', '2023.2', '2024.1']
            }}>
              <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
                <h3>Welcome to <Variable name="productName" /></h3>
                <p>
                  You are running version <Variable name="version" format="string" /> on{' '}
                  <Variable name="platform" />. This version was released on{' '}
                  <Variable name="releaseDate" format="date" />.
                </p>
                
                <Conditional condition="isNewFeature">
                  <div style={{ background: '#d4edda', padding: '1rem', borderRadius: '6px', margin: '1rem 0' }}>
                    <strong>🎉 New Feature Available!</strong>
                    <p>This version includes exciting new features and improvements.</p>
                  </div>
                </Conditional>

                <Conditional condition="platform === 'Windows'">
                  <p><strong>Windows-specific note:</strong> Make sure Windows Defender is configured properly.</p>
                </Conditional>

                <details style={{ marginTop: '1rem' }}>
                  <summary>View Current Variables</summary>
                  <VariableList />
                </details>
              </div>
            </VariableProvider>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Snippet Include Examples</h2>
            <p style={{ marginBottom: '1rem' }}>
              These examples show how to include reusable content snippets with variables:
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3>Warning Box Snippet</h3>
              <SnippetInclude
                id="warning-box"
                variables={{
                  title: "Important Security Notice",
                  message: "Always keep your antivirus definitions up to date to ensure maximum protection against the latest threats."
                }}
                showMetadata={true}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3>Installation Steps Snippet</h3>
              <SnippetInclude
                id="installation-steps"
                variables={{
                  productName: "Endpoint Security Pro",
                  platform: "Windows 10/11",
                  verifyCommand: "esec --version",
                  minMemory: "8GB",
                  diskSpace: "2GB"
                }}
                showMetadata={true}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3>Troubleshooting Checklist Snippet</h3>
              <SnippetInclude
                id="troubleshooting-checklist"
                variables={{
                  issueType: "Connection Issues",
                  issueDescription: "problems connecting to the management server",
                  productName: "Endpoint Security Pro",
                  logLocation: "C:\\ProgramData\\EndpointSecurity\\Logs\\",
                  serviceName: "EndpointSecurityService",
                  commonSolutions: "- Check firewall settings and ensure ports 443 and 8080 are open\n- Verify network connectivity to the management server\n- Restart the Windows networking service\n- Clear DNS cache using 'ipconfig /flushdns'"
                }}
                showMetadata={true}
              />
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Shared Content Library</h2>
            <p style={{ marginBottom: '1rem' }}>
              Browse and manage reusable content snippets with advanced search and filtering:
            </p>
            <SharedContentLibrary
              showCreateForm={false}
              showUsageStats={true}
              allowEditing={false}
            />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Technical Implementation</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Architecture Overview</h3>
              <ul>
                <li><strong>SnippetManager:</strong> Core service for managing reusable content snippets with YAML-based storage</li>
                <li><strong>SnippetInclude Component:</strong> React component for including snippets in MDX documents</li>
                <li><strong>Variable Substitution:</strong> Context-based variable system with type validation</li>
                <li><strong>Content Validator:</strong> Validation system for references, dependencies, and content integrity</li>
                <li><strong>Shared Library UI:</strong> Management interface for browsing and organizing snippets</li>
              </ul>
              
              <h3>Key Features</h3>
              <ul>
                <li>YAML-based snippet storage with version control</li>
                <li>Type-safe variable substitution with validation</li>
                <li>Dependency tracking and circular dependency detection</li>
                <li>Usage analytics and performance monitoring</li>
                <li>Search and filtering capabilities</li>
                <li>Real-time preview with variable editing</li>
                <li>Automatic content validation and error reporting</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Usage Examples</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Basic Snippet Include</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<SnippetInclude id="warning-box" variables={{
  title: "Important Notice",
  message: "Please read this carefully."
}} />`}
              </pre>

              <h3>Variable Substitution</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<VariableProvider variables={{ productName: "My Product", version: "1.0" }}>
  <h1>Welcome to <Variable name="productName" /></h1>
  <p>Version: <Variable name="version" /></p>
  
  <Conditional condition="version === '1.0'">
    <p>This is the initial release!</p>
  </Conditional>
</VariableProvider>`}
              </pre>

              <h3>Snippet with Metadata</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<SnippetInclude 
  id="installation-steps" 
  variables={{ productName: "My App", platform: "Windows" }}
  showMetadata={true}
/>`}
              </pre>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>DITA Functionality Comparison</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#e9ecef' }}>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>DITA Feature</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>MDX Implementation</th>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Content References (conref)</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>SnippetInclude component</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>✅ Complete</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Variable Text (conkeyref)</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Variable component</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>✅ Complete</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Conditional Text (ditaval)</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Conditional component</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>✅ Complete</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Content Validation</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>ContentValidator system</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>✅ Complete</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Relationship Tables</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Cross-reference system</td>
                    <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>🚧 In Progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}