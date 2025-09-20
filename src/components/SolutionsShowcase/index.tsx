import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

const solutions = [
  {
    id: 'endpoint-security',
    title: 'Endpoint Security',
    description: 'Comprehensive endpoint protection with advanced threat detection and response capabilities.',
    icon: '💻',
    badge: 'Docs Available',
    features: ['Agent Management', 'Policy Configuration', 'Threat Response'],
    href: '/',
    available: true
  },
  {
    id: 'crem',
    title: 'Cyber Risk Exposure Management',
    description: 'Proactive risk assessment and management across your entire digital attack surface.',
    icon: '🛡️',
    badge: 'Popular',
    features: ['Risk Assessment', 'Vulnerability Management', 'Attack Surface Monitoring'],
    href: '#crem',
    available: false
  },
  {
    id: 'xdr-siem',
    title: 'XDR and Agentic SIEM',
    description: 'Extended detection and response with AI-powered security information and event management.',
    icon: '🔍',
    badge: 'New',
    features: ['Threat Detection', 'Automated Response', 'AI Analytics'],
    href: '#xdr-siem',
    available: false
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Advanced network protection and monitoring for comprehensive infrastructure security.',
    icon: '🌐',
    badge: 'Coming Soon',
    features: ['Network Monitoring', 'Intrusion Detection', 'Traffic Analysis'],
    href: '#network-security',
    available: false
  },
  {
    id: 'email-security',
    title: 'Email Security',
    description: 'Advanced email threat protection against phishing, malware, and business email compromise.',
    icon: '📧',
    badge: 'Coming Soon',
    features: ['Phishing Protection', 'Malware Detection', 'Email Filtering'],
    href: '#email-security',
    available: false
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'Multi-cloud security posture management and workload protection.',
    icon: '☁️',
    badge: 'Coming Soon',
    features: ['CSPM', 'Workload Protection', 'Compliance Monitoring'],
    href: '#cloud-security',
    available: false
  }
];

export default function SolutionsShowcase() {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  const handleSolutionClick = (solution: typeof solutions[0]) => {
    if (solution.available) {
      if (solution.href.startsWith('http') || solution.href.startsWith('/')) {
        window.location.href = solution.href;
      }
    } else {
      alert(`${solution.title} documentation is coming soon!`);
    }
  };

  return (
    <section className="solutions-showcase">
      <div className="container">
        <div className="section-header">
          <h2>Comprehensive Security Solutions</h2>
          <p>Explore our integrated security platform with solutions designed to protect your entire digital ecosystem.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`solution-card ${hoveredSolution === solution.id ? 'hovered' : ''} ${solution.available ? 'available' : 'unavailable'}`}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
              onClick={() => handleSolutionClick(solution)}
            >
              <div className="solution-header">
                <div className="solution-icon">{solution.icon}</div>
                <span className={`solution-badge badge-${solution.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                  {solution.badge}
                </span>
              </div>

              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>

              <div className="solution-features">
                <ul>
                  {solution.features.map((feature, index) => (
                    <li key={index}>
                      <svg className="feature-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="solution-action">
                {solution.available ? (
                  <div className="action-available">
                    <span>View Documentation</span>
                    <svg className="action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="action-unavailable">
                    <span>Coming Soon</span>
                    <svg className="action-clock" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="solutions-cta">
          <div className="cta-card">
            <h3>Ready to Get Started?</h3>
            <p>Explore our comprehensive documentation and start implementing Trend Vision One solutions today.</p>
            <div className="cta-actions">
              <Link to="/" className="btn btn-primary">Start with Endpoint Security</Link>
              <button className="btn btn-secondary" onClick={() => alert('Platform overview coming soon!')}>
                Platform Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}