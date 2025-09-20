# Development Guide

## Prerequisites

- Node.js 18.19.0 or higher
- npm (comes with Node.js)
- Git

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agentic-docs-poc/ai-docs-poc
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build production site
- `npm run serve` - Serve built site locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint and fix issues
- `npm run lint:check` - Check for linting issues without fixing
- `npm run clear` - Clear Docusaurus cache
- `npm run preview` - Build and serve for preview

## Project Structure

```
ai-docs-poc/
├── docs/                     # Documentation content (MDX files)
├── src/
│   ├── components/          # React components
│   │   ├── LandingPage/     # Main landing page
│   │   ├── NavigationHeader/ # Enhanced navigation
│   │   └── SolutionsShowcase/ # Solutions grid
│   ├── css/                 # Global styles
│   └── pages/               # Custom pages
├── static/                  # Static assets
├── docusaurus.config.ts     # Docusaurus configuration
└── package.json            # Dependencies and scripts
```

## Development Workflow

### Adding New Documentation

1. Create new `.md` or `.mdx` files in the `docs/` directory
2. Update `toc.ts` to include the new pages in navigation
3. Test locally with `npm start`

### Modifying Components

1. Edit components in `src/components/`
2. Components use CSS modules for styling
3. Hot reload will update the browser automatically

### Building for Production

```bash
npm run build
npm run serve
```

## Code Quality

The project includes:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting (via VS Code)
- **Vale** for prose linting

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   npm start -- --port 3001
   ```

2. **Cache issues**
   ```bash
   npm run clear
   npm start
   ```

3. **Build failures**
   ```bash
   npm run typecheck
   npm run lint:check
   ```

### Getting Help

- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Review the project's GitHub issues
- Contact the development team