import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

const navigationData = {
  "Solutions": {
    columns: [
      {
        title: "Core Solutions",
        links: [
          { name: "Cyber Risk Exposure Management", href: "#crem", badge: "Popular" },
          { name: "XDR and Agentic SIEM", href: "#xdr-siem" },
          { name: "Endpoint Security", href: "/", badge: "Docs" },
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
  "Resources": {
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
  }
};

interface DropdownProps {
  title: string;
  data: any;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ title, data, isOpen, onToggle, onClose }: DropdownProps) {
  const handleLinkClick = (href: string, external?: boolean) => {
    if (href.startsWith('#')) {
      alert('This is a demo link for POC purposes');
    } else if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  return (
    <div className="dropdown-container">
      <button
        className={`dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <svg className={`chevron ${isOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      
      {isOpen && data && data.columns && (
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {data.columns.map((column: any, index: number) => (
              <div key={index} className="dropdown-column">
                <h3>{column?.title || 'Section'}</h3>
                <ul>
                  {(column?.links || []).map((link: any, linkIndex: number) => (
                    <li key={linkIndex}>
                      <button
                        className="dropdown-link"
                        onClick={() => handleLinkClick(link?.href || '#', link?.external)}
                      >
                        <span>{link?.name || 'Link'}</span>
                        {link?.badge && (
                          <span className={`badge badge-${link.badge.toLowerCase().replace(' ', '-')}`}>
                            {link.badge}
                          </span>
                        )}
                        {link?.external && <span className="external-icon">↗</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function NavigationHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="enhanced-navigation">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-brand">
            <div className="nav-icon">T</div>
            <span className="nav-text">
              <span className="trend-micro">Trend Micro</span> <span className="tech-docs">TechDocs</span>
            </span>
          </Link>

          <div className="nav-menu">
            {Object.entries(navigationData).map(([key, data]) => (
              <Dropdown
                key={key}
                title={key}
                data={data}
                isOpen={openDropdown === key}
                onToggle={() => handleDropdownToggle(key)}
                onClose={closeAllDropdowns}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}