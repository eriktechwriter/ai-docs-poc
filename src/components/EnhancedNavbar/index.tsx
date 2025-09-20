import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.css';

interface DropdownColumn {
  title: string;
  links: Array<{
    name: string;
    href: string;
    badge?: 'New' | 'Popular' | 'Updated' | 'Docs' | 'Legacy' | 'EOL';
    external?: boolean;
    description?: string;
  }>;
}

interface NavigationDropdown {
  trigger: string;
  columns: DropdownColumn[];
}

const navigationData: Record<string, NavigationDropdown> = {
  "Solutions": {
    trigger: "Solutions",
    columns: [
      {
        title: "Core Solutions",
        links: [
          { name: "Cyber Risk Exposure Management", href: "#crem", badge: "Popular" },
          { name: "XDR and Agentic SIEM", href: "#xdr-siem", badge: "New" },
          { name: "Endpoint Security", href: "/endpoint-security-for-sep-swp", badge: "Docs" },
          { name: "Network Security", href: "#network-security" }
        ]
      },
      {
        title: "Security Solutions",
        links: [
          { name: "Email Security", href: "#email-security" },
          { name: "Cloud Security", href: "#cloud-security" },
          { name: "Identity & Access Management", href: "#iam" },
          { name: "Data Loss Prevention", href: "#dlp" }
        ]
      },
      {
        title: "Advanced Capabilities",
        links: [
          { name: "Threat Intelligence", href: "#threat-intel" },
          { name: "Security Orchestration", href: "#soar" },
          { name: "Vulnerability Management", href: "#vuln-mgmt" },
          { name: "Compliance Management", href: "#compliance" }
        ]
      }
    ]
  },
  "Updates": {
    trigger: "Updates",
    columns: [
      {
        title: "Latest Updates",
        links: [
          { name: "What's New", href: "#whats-new", badge: "Updated" },
          { name: "Recent Features", href: "#recent-features" },
          { name: "Product Updates", href: "#product-updates" },
          { name: "Security Bulletins", href: "#security-bulletins" }
        ]
      },
      {
        title: "Release Information",
        links: [
          { name: "Release Notes", href: "#release-notes" },
          { name: "Version History", href: "#version-history" },
          { name: "Upgrade Guides", href: "#upgrade-guides" },
          { name: "Known Issues", href: "#known-issues" }
        ]
      },
      {
        title: "Preview Content",
        links: [
          { name: "Beta Features", href: "#beta-features", badge: "New" },
          { name: "Roadmap Highlights", href: "#roadmap" },
          { name: "Early Access Program", href: "#early-access" },
          { name: "Feature Previews", href: "#previews" }
        ]
      }
    ]
  },
  "Guides": {
    trigger: "Guides",
    columns: [
      {
        title: "Getting Started",
        links: [
          { name: "Platform Overview", href: "#platform-overview" },
          { name: "Quick Start Guide", href: "#quick-start" },
          { name: "Initial Setup", href: "#initial-setup" },
          { name: "First Time User Guide", href: "#first-time-user" }
        ]
      },
      {
        title: "Best Practices",
        links: [
          { name: "Implementation Guide", href: "#implementation" },
          { name: "Configuration Best Practices", href: "#config-best-practices" },
          { name: "Security Hardening", href: "#security-hardening" },
          { name: "Performance Optimization", href: "#performance" }
        ]
      },
      {
        title: "Specialized Guides",
        links: [
          { name: "Integration Playbooks", href: "#integration-playbooks" },
          { name: "Migration Guides", href: "#migration-guides" },
          { name: "Automation Guides", href: "#automation" },
          { name: "Advanced Configuration", href: "#advanced-config" }
        ]
      }
    ]
  },
  "Resources": {
    trigger: "Resources",
    columns: [
      {
        title: "Developer Resources",
        links: [
          { name: "API Documentation", href: "https://automation.trendmicro.com/xdr/api-v3/", external: true },
          { name: "SDK Downloads", href: "#sdk-downloads" },
          { name: "Code Examples", href: "#code-examples" },
          { name: "Integration Tools", href: "#integration-tools" }
        ]
      },
      {
        title: "Learning & Training",
        links: [
          { name: "Video Library", href: "#video-library" },
          { name: "Webinar Archive", href: "#webinar-archive" },
          { name: "Training Materials", href: "https://education.trendmicro.com", external: true },
          { name: "Certification Programs", href: "#certification" }
        ]
      },
      {
        title: "Support",
        links: [
          { name: "Technical Support", href: "https://support.trendmicro.com", external: true },
          { name: "Troubleshooting", href: "#troubleshooting" },
          { name: "Community Forum", href: "#community" },
          { name: "Knowledge Base", href: "#knowledge-base" }
        ]
      }
    ]
  },
  "Support & Compliance": {
    trigger: "Support & Compliance",
    columns: [
      {
        title: "Get Help",
        links: [
          { name: "Technical Support", href: "https://support.trendmicro.com", external: true },
          { name: "Troubleshooting Guides", href: "#troubleshooting" },
          { name: "System Status", href: "#system-status" },
          { name: "Contact Information", href: "#contact" }
        ]
      },
      {
        title: "Data Privacy & Compliance",
        links: [
          { name: "Privacy Policy", href: "#privacy-policy" },
          { name: "Data Processing Agreement", href: "#dpa" },
          { name: "Compliance Certifications", href: "#certifications" },
          { name: "Regulatory Information", href: "#regulatory" }
        ]
      },
      {
        title: "Self-Service",
        links: [
          { name: "Knowledge Base", href: "#knowledge-base" },
          { name: "FAQ", href: "#faq" },
          { name: "Documentation Search", href: "#search" },
          { name: "Community Support", href: "#community" }
        ]
      }
    ]
  },
  "Legacy Products": {
    trigger: "Legacy Products",
    columns: [
      {
        title: "SaaS Products",
        links: [
          { name: "Apex One as a Service", href: "#apex-one-saas", badge: "Legacy" },
          { name: "Cloud One Platform", href: "#cloud-one", badge: "Legacy" },
          { name: "Deep Discovery (SaaS)", href: "#deep-discovery-saas", badge: "Legacy" },
          { name: "Worry-Free Services", href: "#worry-free", badge: "Legacy" }
        ]
      },
      {
        title: "On-Premises Products",
        links: [
          { name: "Deep Security", href: "#deep-security", badge: "Legacy" },
          { name: "Apex One (On-Prem)", href: "#apex-one-onprem", badge: "Legacy" },
          { name: "OfficeScan", href: "#officescan", badge: "EOL" },
          { name: "ServerProtect", href: "#serverprotect", badge: "EOL" }
        ]
      },
      {
        title: "Migration Resources",
        links: [
          { name: "Migration to Vision One", href: "#migration-guide", badge: "Popular" },
          { name: "Product Comparison", href: "#product-comparison" },
          { name: "End-of-Life Notices", href: "#eol-notices" },
          { name: "Legacy Support", href: "https://support.trendmicro.com/legacy", external: true }
        ]
      }
    ]
  }
};

function showComingSoon(feature: string) {
  alert(`${feature} documentation is coming soon! 🚀\n\nCurrently available:\n• Endpoint Security Documentation\n• API Reference\n• Technical Support`);
}

export default function EnhancedNavbar(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { navbar } = useThemeConfig();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else if (href.startsWith('#')) {
      showComingSoon(href.replace('#', '').replace('-', ' '));
    } else {
      window.location.href = href;
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContent}>
          {/* Logo and Brand */}
          <div className={styles.navbarLeft}>
            <Link to="/" className={styles.navbarBrand}>
              <div className={styles.navbarIcon}>T</div>
              <span className={styles.navbarText}>
                Trend Vision One <span className={styles.techDocs}>TechDocs</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.navbarNav}>
              {Object.entries(navigationData).map(([key, dropdown]) => (
                <div
                  key={key}
                  className={styles.dropdown}
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={styles.dropdownTrigger}>
                    {dropdown.trigger}
                    <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                  {activeDropdown === key && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.dropdownContent}>
                        {dropdown.columns.map((column, index) => (
                          <div key={index} className={styles.dropdownColumn}>
                            <h3>{column.title}</h3>
                            <ul>
                              {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleLinkClick(link.href, link.external);
                                    }}
                                  >
                                    {link.name}
                                    {link.badge && (
                                      <span className={`${styles.badge} ${styles[`badge${link.badge}`]}`}>
                                        {link.badge}
                                      </span>
                                    )}
                                    {link.external && <span className={styles.externalIcon}>↗</span>}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className={styles.navbarActions}>
            <div className={styles.searchContainer}>
              <input type="search" placeholder="Search docs..." className={styles.searchInput} />
            </div>
            <button 
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {Object.entries(navigationData).map(([key, dropdown]) => (
                <div key={key} className={styles.mobileDropdown}>
                  <button className={styles.mobileDropdownTrigger}>
                    {dropdown.trigger}
                  </button>
                  <div className={styles.mobileDropdownContent}>
                    {dropdown.columns.map((column, index) => (
                      <div key={index} className={styles.mobileDropdownColumn}>
                        <h4>{column.title}</h4>
                        <ul>
                          {column.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={link.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleLinkClick(link.href, link.external);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {link.name}
                                {link.badge && (
                                  <span className={`${styles.badge} ${styles[`badge${link.badge}`]}`}>
                                    {link.badge}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}