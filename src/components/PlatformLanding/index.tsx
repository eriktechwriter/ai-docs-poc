import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const solutions = [
  {
    id: 'endpoint-security',
    title: 'Endpoint Security',
    description: 'Comprehensive endpoint protection with advanced threat detection and response capabilities.',
    icon: '💻',
    badge: 'Docs Available',
    badgeType: 'available',
    features: ['Agent Management', 'Policy Configuration', 'Threat Response'],
    href: '/endpoint-security-for-sep-swp',
    available: true
  },
  {
    id: 'xdr-siem',
    title: 'XDR and Agentic SIEM',
    description: 'Extended detection and response with AI-powered security information and event management.',
    icon: '🔍',
    badge: 'New',
    badgeType: 'new',
    features: ['Threat Detection', 'Automated Response', 'AI Analytics'],
    href: '#xdr-siem',
    available: false
  },
  {
    id: 'crem',
    title: 'Cyber Risk Exposure Management',
    description: 'Proactive risk assessment and management across your entire digital attack surface.',
    icon: '🛡️',
    badge: 'Popular',
    badgeType: 'popular',
    features: ['Risk Assessment', 'Vulnerability Management', 'Attack Surface Monitoring'],
    href: '#crem',
    available: false
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Advanced network protection and monitoring for comprehensive infrastructure security.',
    icon: '🌐',
    badge: 'Coming Soon',
    badgeType: 'coming-soon',
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
    badgeType: 'coming-soon',
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
    badgeType: 'coming-soon',
    features: ['CSPM', 'Workload Protection', 'Compliance Monitoring'],
    href: '#cloud-security',
    available: false
  }
];

function showComingSoon(feature: string) {
  alert(`${feature} documentation is coming soon! 🚀\n\nCurrently available:\n• Endpoint Security Documentation\n• API Reference\n• Technical Support`);
}

export default function PlatformLanding(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSolutionClick = (solution: typeof solutions[0]) => {
    if (solution.available) {
      // Use Docusaurus navigation for internal links
      if (solution.href.startsWith('/')) {
        window.location.href = solution.href;
      } else {
        window.location.href = solution.href;
      }
    } else {
      showComingSoon(solution.title);
    }
  };

  return (
    <div className={styles.platformLanding}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroAnimation}></div>
        </div>
        <div className="container">
          <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleMain}>Trend Vision One™</span>
              <span className={styles.heroTitleSub}>Platform</span>
            </h1>
            <p className={styles.heroTagline}>One console. Complete protection.</p>
            <p className={styles.heroSubtitle}>
              Comprehensive security documentation for integrated threat detection and response, 
              proactive risk management, and centralized visibility across your entire digital ecosystem.
            </p>
            <div className={styles.heroActions}>
              <a href="#solutions" className={`button button--primary button--lg ${styles.heroButton}`}>
                Explore Solutions
              </a>
              <Link to="/endpoint-security-for-sep-swp" className={`button button--secondary button--lg ${styles.heroButton}`}>
                View Documentation
              </Link>
            </div>
            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>✓</div>
                <h3>Integrated Protection</h3>
                <p>Unified security across endpoints, networks, email, and cloud</p>
              </div>
              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>⚡</div>
                <h3>Rapid Response</h3>
                <p>Automated threat detection and response capabilities</p>
              </div>
              <div className={styles.heroFeature}>
                <div className={styles.heroFeatureIcon}>👁</div>
                <h3>Complete Visibility</h3>
                <p>Centralized dashboard for comprehensive security insights</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <a href="#solutions" className={styles.scrollArrow}>↓</a>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section id="solutions" className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Comprehensive Security Solutions</h2>
            <p>Explore our integrated security platform with solutions designed to protect your entire digital ecosystem.</p>
          </div>
          <div className={styles.solutionsGrid}>
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={`${styles.solutionCard} ${solution.available ? styles.available : ''}`}
                onClick={() => handleSolutionClick(solution)}
              >
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <span className={`${styles.solutionBadge} ${styles[`badge${solution.badgeType.charAt(0).toUpperCase() + solution.badgeType.slice(1).replace('-', '')}`]}`}>
                  {solution.badge}
                </span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul className={styles.solutionFeatures}>
                  {solution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.solutionAction}>
                  <span>
                    {solution.available ? 'View Documentation →' : 'Coming Soon ⏰'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={styles.solutionsCta}>
            <div className={styles.ctaCard}>
              <h3>Ready to Get Started?</h3>
              <p>Explore our comprehensive documentation and start implementing Trend Vision One solutions today.</p>
              <div className={styles.ctaActions}>
                <Link to="/endpoint-security-for-sep-swp" className="button button--primary">
                  Start with Endpoint Security
                </Link>
                <button 
                  className="button button--secondary" 
                  onClick={() => showComingSoon('Platform Overview')}
                >
                  Platform Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}