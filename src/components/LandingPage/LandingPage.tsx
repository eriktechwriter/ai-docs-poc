import React from 'react';
import Layout from '@theme/Layout';
import SolutionsShowcase from '../SolutionsShowcase';
import './styles.css';

export default function LandingPage() {
  return (
    <Layout
      title="Trend Vision One Platform"
      description="One console. Complete protection. Access comprehensive documentation for all Trend Vision One security solutions."
    >
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-animation"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-main">Trend Vision One™</span>
              <span className="hero-title-sub">Platform</span>
            </h1>
            <p className="hero-tagline">One console. Complete protection.</p>
            <p className="hero-subtitle">
              Comprehensive security documentation for integrated threat detection and response, 
              proactive risk management, and centralized visibility across your entire digital ecosystem.
            </p>
            <div className="hero-actions">
              <a href="#solutions" className="btn btn-primary btn-lg">Explore Solutions</a>
              <a href="/" className="btn btn-secondary btn-lg">View Documentation</a>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <div className="hero-feature-icon">✓</div>
                <h3>Integrated Protection</h3>
                <p>Unified security across endpoints, networks, email, and cloud</p>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">⚡</div>
                <h3>Rapid Response</h3>
                <p>Automated threat detection and response capabilities</p>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">👁</div>
                <h3>Complete Visibility</h3>
                <p>Centralized dashboard for comprehensive security insights</p>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#solutions" className="scroll-arrow">↓</a>
        </div>
      </section>

      <SolutionsShowcase />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-icon">T</div>
                <div>
                  <div className="footer-title">Trend Vision One</div>
                  <div className="footer-subtitle">TechDocs</div>
                </div>
              </div>
              <p>One console. Complete protection. Comprehensive security documentation for the modern enterprise.</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h3>Solutions</h3>
                <ul>
                  <li><a href="/">Endpoint Security</a></li>
                  <li><a href="#network-security">Network Security</a></li>
                  <li><a href="#email-security">Email Security</a></li>
                  <li><a href="#cloud-security">Cloud Security</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li><a href="/">Documentation</a></li>
                  <li><a href="https://automation.trendmicro.com/xdr/api-v3/" target="_blank">API Reference</a></li>
                  <li><a href="https://education.trendmicro.com" target="_blank">Training Hub</a></li>
                  <li><a href="#best-practices">Best Practices</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Support</h3>
                <ul>
                  <li><a href="https://support.trendmicro.com" target="_blank">Technical Support</a></li>
                  <li><a href="#community">Community Forum</a></li>
                  <li><a href="#sales">Contact Sales</a></li>
                  <li><a href="#knowledge-base">Knowledge Base</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Trend Micro Incorporated. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}