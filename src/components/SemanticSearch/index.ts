/**
 * Semantic Search Components Export
 * 
 * Centralized export for all semantic search components
 */

export { default as SearchBox } from './SearchBox';
export { default as SearchResultsPage } from './SearchResultsPage';
export { searchAPI, type SearchResult, type SearchOptions, type SearchResponse } from './SearchAPI';

// Re-export for convenience
export type { SearchResult, SearchOptions, SearchResponse } from './SearchAPI';