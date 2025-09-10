module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    'build/**',
    '.docusaurus/**',
    'node_modules/**',
    '*.min.js',
    'package-lock.json',
    'static/**',
  ],
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Basic rules
    'no-console': 'off', // Allow console for development
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};