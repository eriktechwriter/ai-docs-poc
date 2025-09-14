import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Hero({title, subtitle, bottomMargin = '2rem', borderRadius = '8px'}) {
  return (
    <header 
      className={clsx('hero hero--dark', styles.heroBanner)}
      style={{
        marginBottom: bottomMargin,
        borderRadius: borderRadius
      }}
    >
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
