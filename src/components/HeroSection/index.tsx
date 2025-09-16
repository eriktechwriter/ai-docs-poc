import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HeroSection(): JSX.Element {
  return (
    <section 
      className={clsx('hero', styles.heroSection)}
      role="banner"
      aria-label="Trend Vision One Endpoint Security Hero Section"
    >
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span aria-label="Trend Vision One Trademark Endpoint Security">
              Trend Vision One™ Endpoint Security
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Better security with integrated threat detection and response, 
            proactive risk management, and centralized visibility
          </p>
        </div>
      </div>
    </section>
  );
}