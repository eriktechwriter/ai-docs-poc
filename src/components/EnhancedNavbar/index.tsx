import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { navigationData } from './navigationData';

interface DropdownProps {
  title: string;
  data: any;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, data, isOpen, onToggle, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string, external?: boolean) => {
    try {
      if (!href) return;
      
      if (href.startsWith('#')) {
        // Show toast for demo links
        alert('This is a demo link for POC purposes');
      } else if (external) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      onClose();
    }
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={`${styles.dropdownTrigger} ${isOpen ? styles.active : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      
      {isOpen && data && data.columns && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownContent}>
            {data.columns.map((column: any, index: number) => (
              <div key={index} className={styles.dropdownColumn}>
                <h3 className={styles.columnTitle}>{column?.title || 'Section'}</h3>
                <ul className={styles.columnLinks}>
                  {(column?.links || []).map((link: any, linkIndex: number) => (
                    <li key={linkIndex} className={styles.linkItem}>
                      <button
                        className={styles.link}
                        onClick={() => handleLinkClick(link?.href || '#', link?.external)}
                      >
                        {link?.icon && (
                          <span className={styles.linkIcon}>
                            📄
                          </span>
                        )}
                        <span className={styles.linkText}>{link?.name || 'Link'}</span>
                        {link?.badge && (
                          <span className={`${styles.badge} ${styles[`badge${link.badge}`] || ''}`}>
                            {link.badge}
                          </span>
                        )}
                        {link?.external && (
                          <span className={styles.externalIcon}>↗</span>
                        )}
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
};

export default function EnhancedNavbar(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDarkModeToggle = () => {
    try {
      if (typeof document !== 'undefined') {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', newTheme);
        }
      }
    } catch (error) {
      console.error('Dark mode toggle error:', error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Left side: Logo and Navigation */}
        <div className={styles.navbarLeft}>
          <Link to="/" className={styles.navbarBrand}>
            <img 
              src="/ai-docs-poc/brand/t-ball-icon.svg" 
              alt="Trend Vision One" 
              className={styles.navbarIcon}
            />
            <span className={styles.navbarText}>
              Trend Vision One <span className={styles.techDocs}>TechDocs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navbarNav}>
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

        {/* Right side: Search, Dark Mode, Mobile Menu */}
        <div className={styles.navbarActions}>
          <div className={styles.searchContainer}>
            <input 
              type="search" 
              placeholder="Search docs..." 
              className={styles.searchInput}
              onClick={() => alert('Search functionality coming soon!')}
            />
          </div>
          
          {/* Dark Mode Toggle */}
          <div className={styles.darkModeToggle}>
            <button
              className={styles.darkModeButton}
              onClick={handleDarkModeToggle}
              aria-label="Toggle dark mode"
            >
              🌙
            </button>
          </div>
          
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
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
            {Object.entries(navigationData).map(([key, data]) => (
              <div key={key} className={styles.mobileSection}>
                <h3 className={styles.mobileSectionTitle}>{key}</h3>
                {data.columns.map((column: any, index: number) => (
                  <div key={index} className={styles.mobileColumn}>
                    <h4 className={styles.mobileColumnTitle}>{column.title}</h4>
                    <ul className={styles.mobileLinks}>
                      {column.links.map((link: any, linkIndex: number) => (
                        <li key={linkIndex}>
                          <button
                            className={styles.mobileLink}
                            onClick={() => {
                              if (link.href.startsWith('#')) {
                                alert('This is a demo link for POC purposes');
                              } else if (link.external) {
                                window.open(link.href, '_blank', 'noopener,noreferrer');
                              } else {
                                window.location.href = link.href;
                              }
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {link.name}
                            {link.badge && (
                              <span className={`${styles.badge} ${styles[`badge${link.badge}`]}`}>
                                {link.badge}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}