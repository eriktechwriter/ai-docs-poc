/**
 * Profiling System Demo Page
 * 
 * Demonstrates conditional content and profiling capabilities
 */

import React from 'react';
import Layout from '@theme/Layout';
import {
  ProfileProvider,
  ProfileSelector,
  ConditionalContent,
  ContentVariation,
  ProfileTesting,
  createDefaultProfiles,
  createDefaultRules,
  UserProfile,
  ProfileRule,
  ContentVariation as ContentVariationType
} from '../components/ContentReuse/ProfilingSystem';
import '../components/ContentReuse/ProfilingSystem.css';

const profiles = createDefaultProfiles();
const rules = createDefaultRules();

// Sample content variations
const installationVariations: ContentVariationType[] = [
  {
    id: 'admin-installation',
    name: 'Administrator Installation',
    description: 'Detailed installation guide for system administrators',
    profileRules: ['admin-only'],
    content: (
      <div style={{ background: '#e3f2fd', padding: '1rem', borderRadius: '6px', border: '1px solid #1976d2' }}>
        <h4>🔧 Administrator Installation Guide</h4>
        <p>As a system administrator, you have access to advanced installation options:</p>
        <ol>
          <li>Download the enterprise installer package</li>
          <li>Run the installer with elevated privileges</li>
          <li>Configure domain authentication settings</li>
          <li>Set up centralized logging and monitoring</li>
          <li>Deploy configuration policies across the organization</li>
          <li>Configure backup and disaster recovery options</li>
        </ol>
        <div style={{ background: 'rgba(25, 118, 210, 0.1)', padding: '0.5rem', borderRadius: '4px', marginTop: '1rem' }}>
          <strong>Admin Note:</strong> Use the silent installation mode for bulk deployments: 
          <code style={{ background: 'white', padding: '2px 4px', borderRadius: '2px', margin: '0 4px' }}>
            installer.exe /S /CONFIG=enterprise.xml
          </code>
        </div>
      </div>
    )
  },
  {
    id: 'developer-installation',
    name: 'Developer Installation',
    description: 'Installation guide with API and SDK setup',
    profileRules: ['developer-content'],
    content: (
      <div style={{ background: '#f3e5f5', padding: '1rem', borderRadius: '6px', border: '1px solid #7b1fa2' }}>
        <h4>💻 Developer Installation Guide</h4>
        <p>Set up your development environment with API access:</p>
        <ol>
          <li>Install the standard package with development tools</li>
          <li>Download and install the SDK</li>
          <li>Configure API endpoints and authentication</li>
          <li>Set up debugging and logging tools</li>
          <li>Install development dependencies and libraries</li>
        </ol>
        <div style={{ background: 'rgba(123, 31, 162, 0.1)', padding: '0.5rem', borderRadius: '4px', marginTop: '1rem' }}>
          <strong>Dev Tip:</strong> Enable debug mode for detailed API responses:
          <pre style={{ background: 'white', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.9em' }}>
{`{
  "debug": true,
  "apiEndpoint": "https://api.example.com/v1",
  "logLevel": "verbose"
}`}
          </pre>
        </div>
      </div>
    )
  },
  {
    id: 'basic-installation',
    name: 'Basic Installation',
    description: 'Simple installation guide for end users',
    profileRules: ['beginner-friendly'],
    content: (
      <div style={{ background: '#e8f5e8', padding: '1rem', borderRadius: '6px', border: '1px solid #28a745' }}>
        <h4>📦 Simple Installation Guide</h4>
        <p>Follow these easy steps to install the software:</p>
        <ol>
          <li>Download the installer from our website</li>
          <li>Double-click the downloaded file</li>
          <li>Click "Next" through the installation wizard</li>
          <li>Accept the license agreement</li>
          <li>Choose the installation location (or use default)</li>
          <li>Click "Install" and wait for completion</li>
          <li>Click "Finish" to complete the installation</li>
        </ol>
        <div style={{ background: 'rgba(40, 167, 69, 0.1)', padding: '0.5rem', borderRadius: '4px', marginTop: '1rem' }}>
          <strong>💡 Tip:</strong> The installation typically takes 2-3 minutes. You can use the software immediately after installation completes.
        </div>
      </div>
    )
  }
];

const troubleshootingVariations: ContentVariationType[] = [
  {
    id: 'admin-troubleshooting',
    name: 'Administrator Troubleshooting',
    description: 'Advanced troubleshooting for administrators',
    profileRules: ['admin-only'],
    content: (
      <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '6px', border: '1px solid #ffc107' }}>
        <h4>🔍 Advanced Troubleshooting</h4>
        <p>Administrator-level diagnostic procedures:</p>
        <ul>
          <li>Check system event logs and service status</li>
          <li>Analyze network traffic and firewall rules</li>
          <li>Review Active Directory integration</li>
          <li>Examine database connectivity and performance</li>
          <li>Validate certificate chains and SSL/TLS configuration</li>
          <li>Use command-line diagnostic tools</li>
        </ul>
        <details style={{ marginTop: '1rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Advanced Diagnostic Commands</summary>
          <pre style={{ background: 'white', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0', fontSize: '0.9em' }}>
{`# Check service status
sc query "ServiceName"

# View detailed logs
Get-EventLog -LogName Application -Source "ProductName" -Newest 50

# Test network connectivity
Test-NetConnection -ComputerName server.domain.com -Port 443

# Validate certificates
certlm.msc`}
          </pre>
        </details>
      </div>
    )
  },
  {
    id: 'basic-troubleshooting',
    name: 'Basic Troubleshooting',
    description: 'Simple troubleshooting steps for end users',
    profileRules: ['beginner-friendly'],
    content: (
      <div style={{ background: '#f8d7da', padding: '1rem', borderRadius: '6px', border: '1px solid #dc3545' }}>
        <h4>🛠️ Basic Troubleshooting</h4>
        <p>Try these simple steps to resolve common issues:</p>
        <ol>
          <li><strong>Restart the application</strong> - Close and reopen the program</li>
          <li><strong>Restart your computer</strong> - This fixes many common problems</li>
          <li><strong>Check for updates</strong> - Make sure you have the latest version</li>
          <li><strong>Check your internet connection</strong> - Ensure you're connected to the internet</li>
          <li><strong>Disable antivirus temporarily</strong> - Sometimes antivirus software interferes</li>
          <li><strong>Contact support</strong> - If nothing else works, we're here to help!</li>
        </ol>
        <div style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '0.5rem', borderRadius: '4px', marginTop: '1rem' }}>
          <strong>📞 Need Help?</strong> Contact our support team at support@example.com or call 1-800-SUPPORT
        </div>
      </div>
    )
  }
];

export default function ProfilingDemo(): JSX.Element {
  return (
    <Layout
      title="Profiling System Demo"
      description="Demonstration of conditional content and profiling capabilities"
    >
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>Profiling System Demo</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              This page demonstrates conditional content and profiling capabilities that allow content
              to be customized based on user roles, experience levels, and other attributes.
            </p>
          </header>

          <ProfileProvider initialProfile={profiles[0]} rules={rules}>
            <div style={{ marginBottom: '3rem' }}>
              <h2>Profile Selection</h2>
              <p style={{ marginBottom: '1rem' }}>
                Select different user profiles to see how content changes based on user attributes:
              </p>
              <ProfileSelector profiles={profiles} showDetails={true} />
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2>Conditional Content Examples</h2>
              <p style={{ marginBottom: '1rem' }}>
                The following content sections demonstrate conditional rendering based on user profiles:
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3>Role-Based Content</h3>
                
                <ConditionalContent rule="admin-only">
                  <div style={{ background: '#d4edda', padding: '1rem', borderRadius: '6px', margin: '1rem 0' }}>
                    <h4>🔐 Administrator Section</h4>
                    <p>This content is only visible to users with administrator roles.</p>
                    <ul>
                      <li>System configuration options</li>
                      <li>User management tools</li>
                      <li>Advanced security settings</li>
                      <li>Audit logs and reporting</li>
                    </ul>
                  </div>
                </ConditionalContent>

                <ConditionalContent rule="developer-content">
                  <div style={{ background: '#e3f2fd', padding: '1rem', borderRadius: '6px', margin: '1rem 0' }}>
                    <h4>💻 Developer Resources</h4>
                    <p>Technical documentation and resources for developers.</p>
                    <ul>
                      <li>API documentation and examples</li>
                      <li>SDK downloads and integration guides</li>
                      <li>Code samples and best practices</li>
                      <li>Debugging tools and techniques</li>
                    </ul>
                  </div>
                </ConditionalContent>

                <ConditionalContent rule="beginner-friendly">
                  <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '6px', margin: '1rem 0' }}>
                    <h4>📚 Getting Started Guide</h4>
                    <p>Welcome! Here are some helpful resources to get you started.</p>
                    <ul>
                      <li>Quick start tutorial</li>
                      <li>Video walkthroughs</li>
                      <li>Frequently asked questions</li>
                      <li>Community support forum</li>
                    </ul>
                  </div>
                </ConditionalContent>

                <ConditionalContent rule="windows-specific">
                  <div style={{ background: '#f3e5f5', padding: '1rem', borderRadius: '6px', margin: '1rem 0' }}>
                    <h4>🪟 Windows-Specific Information</h4>
                    <p>Special instructions and considerations for Windows users.</p>
                    <ul>
                      <li>Windows-specific installation steps</li>
                      <li>Registry modifications and Group Policy</li>
                      <li>Windows service configuration</li>
                      <li>PowerShell scripts and automation</li>
                    </ul>
                  </div>
                </ConditionalContent>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3>Content Variations</h3>
                <p style={{ marginBottom: '1rem' }}>
                  The same content topic can have different variations based on user profiles:
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <h4>Installation Instructions</h4>
                  <ContentVariation
                    variations={installationVariations}
                    defaultContent={
                      <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '6px', border: '1px solid #e1e5e9' }}>
                        <h4>📦 Standard Installation</h4>
                        <p>Please select a user profile to see customized installation instructions.</p>
                      </div>
                    }
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4>Troubleshooting Guide</h4>
                  <ContentVariation
                    variations={troubleshootingVariations}
                    defaultContent={
                      <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '6px', border: '1px solid #e1e5e9' }}>
                        <h4>🛠️ General Troubleshooting</h4>
                        <p>Please select a user profile to see customized troubleshooting steps.</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2>Debug Mode Examples</h2>
              <p style={{ marginBottom: '1rem' }}>
                These examples show the debug information for conditional content:
              </p>

              <ConditionalContent 
                rule="admin-only" 
                showDebug={true}
                fallback={<p>This content is not available for your current profile.</p>}
              >
                <div style={{ background: '#d4edda', padding: '1rem', borderRadius: '6px' }}>
                  <strong>Admin-only content:</strong> This is sensitive information only for administrators.
                </div>
              </ConditionalContent>

              <ContentVariation
                variations={[installationVariations[0]]} // Just the admin variation
                showDebug={true}
                defaultContent={<p>No matching variation found for your profile.</p>}
              />
            </div>
          </ProfileProvider>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Profile Testing System</h2>
            <p style={{ marginBottom: '1rem' }}>
              Test how different profiles affect content visibility and rule evaluation:
            </p>
            <ProfileTesting
              profiles={profiles}
              rules={rules}
              testContent={
                <div>
                  <h4>Test Content</h4>
                  <ProfileProvider rules={rules}>
                    <ConditionalContent rule="admin-only">
                      <div style={{ background: '#d4edda', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0' }}>
                        ✅ Admin content visible
                      </div>
                    </ConditionalContent>
                    <ConditionalContent rule="developer-content">
                      <div style={{ background: '#e3f2fd', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0' }}>
                        ✅ Developer content visible
                      </div>
                    </ConditionalContent>
                    <ConditionalContent rule="beginner-friendly">
                      <div style={{ background: '#fff3cd', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0' }}>
                        ✅ Beginner content visible
                      </div>
                    </ConditionalContent>
                    <ConditionalContent rule="windows-specific">
                      <div style={{ background: '#f3e5f5', padding: '0.5rem', borderRadius: '4px', margin: '0.5rem 0' }}>
                        ✅ Windows content visible
                      </div>
                    </ConditionalContent>
                  </ProfileProvider>
                </div>
              }
            />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Technical Implementation</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Architecture Overview</h3>
              <ul>
                <li><strong>ProfileProvider:</strong> React context provider for managing user profiles and rules</li>
                <li><strong>ConditionalContent:</strong> Component for rendering content based on profile conditions</li>
                <li><strong>ContentVariation:</strong> Component for managing multiple content variations</li>
                <li><strong>ProfileSelector:</strong> UI component for switching between user profiles</li>
                <li><strong>ProfileTesting:</strong> Testing interface for validating profile-based content</li>
              </ul>
              
              <h3>Key Features</h3>
              <ul>
                <li>Flexible condition evaluation with multiple operators</li>
                <li>Rule-based content filtering with priority support</li>
                <li>Content variation management with fallback support</li>
                <li>Debug mode for development and testing</li>
                <li>Profile testing system for validation</li>
                <li>Extensible attribute system for custom properties</li>
              </ul>

              <h3>Supported Condition Types</h3>
              <ul>
                <li><strong>Role-based:</strong> Content based on user roles (admin, developer, user)</li>
                <li><strong>Audience-based:</strong> Content based on experience level (beginner, intermediate, advanced)</li>
                <li><strong>Platform-based:</strong> Content based on operating system or platform</li>
                <li><strong>Version-based:</strong> Content based on product versions</li>
                <li><strong>Permission-based:</strong> Content based on user permissions</li>
                <li><strong>Custom attributes:</strong> Content based on any custom user attributes</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2>Usage Examples</h2>
            <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e5e9' }}>
              <h3>Basic Conditional Content</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<ConditionalContent rule="admin-only">
  <div>This content is only visible to administrators</div>
</ConditionalContent>`}
              </pre>

              <h3>Content Variations</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<ContentVariation
  variations={[
    {
      id: 'admin-version',
      name: 'Admin Version',
      profileRules: ['admin-only'],
      content: <AdminContent />
    },
    {
      id: 'user-version', 
      name: 'User Version',
      profileRules: ['beginner-friendly'],
      content: <UserContent />
    }
  ]}
  defaultContent={<DefaultContent />}
/>`}
              </pre>

              <h3>Profile Provider Setup</h3>
              <pre style={{ background: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`<ProfileProvider initialProfile={userProfile} rules={profileRules}>
  <YourContent />
</ProfileProvider>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}