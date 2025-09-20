/**
 * Docusaurus Search Page
 * 
 * Full-page search interface integrated with Docusaurus
 */

import React from 'react';
import Layout from '@theme/Layout';
import { SearchResultsPage } from '../components/SemanticSearch';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SearchPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  // Get query parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get('q') || '';
  const initialCategory = urlParams.get('category') || '';

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