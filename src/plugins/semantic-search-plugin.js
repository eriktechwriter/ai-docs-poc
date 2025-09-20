/**
 * Semantic Search Docusaurus Plugin
 * 
 * Integrates semantic search functionality with Docusaurus
 */

const path = require('path');

function semanticSearchPlugin(context, options) {
  return {
    name: 'semantic-search-plugin',
    
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            '@semantic-search': path.resolve(__dirname, '../components/SemanticSearch'),
          },
        },
      };
    },
    
    getClientModules() {
      return [
        path.resolve(__dirname, '../components/SemanticSearch/SearchBox.css'),
        path.resolve(__dirname, '../components/SemanticSearch/SearchResultsPage.css'),
      ];
    },
    
    async contentLoaded({ content, actions }) {
      const { addRoute } = actions;
      
      // Add search route
      addRoute({
        path: '/search',
        component: '@site/src/pages/SearchPage',
        exact: true,
      });
    },
  };
}

module.exports = semanticSearchPlugin;