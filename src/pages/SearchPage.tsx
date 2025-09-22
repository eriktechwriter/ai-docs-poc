/**
 * Docusaurus Search Page
 * 
 * Full-page search interface integrated with Docusaurus
 */

import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { SearchResultsPage } from '../components/SemanticSearch';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function SearchPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [initialQuery, setInitialQuery] = useState('');
  const [initialCategory, setInitialCategory] = useState('');
  
  useEffect(() => {
    // Only access window on client side
    if (ExecutionEnvironment.canUseDOM) {
      const urlParams = new URLSearchParams(window.location.search);
      setInitialQuery(urlParams.get('q') || '');
      setInitialCategory(urlParams.get('category') || '');
    }
  }, []);

  return (
    <Layout
      title="Search Documentation"
      description="Search through comprehensive documentation using semantic search"
    >
      <SearchResultsPage 
        initialQuery={initialQuery}
        initialCategory={initialCategory}
      />
    </Layout>
  );
}