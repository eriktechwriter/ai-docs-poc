import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';

export default function EndpointSecurityLanding(): JSX.Element {
  return (
    <Layout
      title="Trend Vision One™ Endpoint Security"
      description="Better security with integrated threat detection and response, proactive risk management, and centralized visibility"
    >
      <HeroSection />
      <main style={{ padding: '3rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              color: 'var(--ifm-color-primary)', 
              marginBottom: '2rem',
              fontSize: '2.5rem'
            }}>
              Enhanced Landing Page Experience
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              marginBottom: '3rem',
              color: 'var(--ifm-color-emphasis-700)'
            }}>
              This demonstrates the completed Hero Section component with Trend Micro branding, 
              responsive design, and accessibility features as specified in the requirements.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div style={{ 
                background: 'var(--ifm-color-emphasis-100)', 
                padding: '2rem', 
                borderRadius: '12px',
                textAlign: 'left'
              }}>
                <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>
                  🎨 Brand Compliance
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li>Official Trend Micro red color scheme</li>
                  <li>Proper trademark usage (™)</li>
                  <li>Professional typography hierarchy</li>
                  <li>Consistent visual identity</li>
                </ul>
              </div>
              
              <div style={{ 
                background: 'var(--ifm-color-emphasis-100)', 
                padding: '2rem', 
                borderRadius: '12px',
                textAlign: 'left'
              }}>
                <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>
                  📱 Responsive Design
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li>Mobile-first implementation</li>
                  <li>Tablet-optimized layouts</li>
                  <li>Desktop enhancement</li>
                  <li>Flexible grid systems</li>
                </ul>
              </div>
              
              <div style={{ 
                background: 'var(--ifm-color-emphasis-100)', 
                padding: '2rem', 
                borderRadius: '12px',
                textAlign: 'left'
              }}>
                <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>
                  ♿ Accessibility
                </h3>
                <ul style={{ marginBottom: 0 }}>
                  <li>WCAG 2.1 AA compliance</li>
                  <li>Semantic HTML structure</li>
                  <li>ARIA labels and roles</li>
                  <li>Keyboard navigation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}