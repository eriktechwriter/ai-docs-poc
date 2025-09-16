import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';

export default function HeroTest(): JSX.Element {
  return (
    <Layout
      title="Hero Section Test - Trend Vision One™ Endpoint Security"
      description="Test page demonstrating the enhanced Hero Section component with Trend Micro branding"
    >
      <HeroSection />
      <main style={{ padding: '2rem', backgroundColor: 'var(--ifm-background-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem' }}>
              Hero Section Implementation Complete ✅
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              This page demonstrates the enhanced Hero Section component for the 
              Trend Vision One™ Endpoint Security landing page, implementing all 
              requirements from the specification.
            </p>
            
            <div style={{ 
              background: 'var(--ifm-color-emphasis-100)', 
              padding: '2rem', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginTop: 0, color: 'var(--ifm-color-primary)' }}>
                ✅ Requirements Implemented:
              </h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Requirement 1.1:</strong> Displays "Trend Vision One™ Endpoint Security" as primary heading</li>
                <li><strong>Requirement 1.2:</strong> Shows exact tagline about security benefits</li>
                <li><strong>Requirement 1.3:</strong> Uses Trend Micro brand colors and professional styling</li>
                <li><strong>Requirement 1.4:</strong> Prominently positioned and visually engaging</li>
                <li><strong>Requirement 1.5:</strong> Responsive design maintains readability across devices</li>
              </ul>
            </div>

            <div style={{ 
              background: 'var(--ifm-color-success-contrast-background)', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid var(--ifm-color-success)'
            }}>
              <h3 style={{ marginTop: 0, color: 'var(--ifm-color-success-dark)' }}>
                🎯 Key Features Delivered:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <h4>Brand Compliance</h4>
                  <ul>
                    <li>Official Trend Micro red (#d71921)</li>
                    <li>Proper trademark symbol (™)</li>
                    <li>Professional typography</li>
                    <li>Brand-consistent styling</li>
                  </ul>
                </div>
                <div>
                  <h4>Responsive Design</h4>
                  <ul>
                    <li>Mobile-first approach</li>
                    <li>Tablet optimization</li>
                    <li>Desktop enhancement</li>
                    <li>Flexible layouts</li>
                  </ul>
                </div>
                <div>
                  <h4>Accessibility</h4>
                  <ul>
                    <li>WCAG 2.1 AA compliance</li>
                    <li>Semantic HTML structure</li>
                    <li>ARIA labels</li>
                    <li>Keyboard navigation</li>
                  </ul>
                </div>
                <div>
                  <h4>Performance</h4>
                  <ul>
                    <li>CSS animations</li>
                    <li>Reduced motion support</li>
                    <li>Optimized rendering</li>
                    <li>Print-friendly styles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}