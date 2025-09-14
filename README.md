# Trend Vision One Documentation

## AI-Centric Docs-as-Code POC

This repository contains the Trend Vision One documentation converted from WebHelp to a modern Docusaurus site as part of our AI-centric docs-as-code proof of concept.

### Features

- ✅ **495+ Documentation Pages** - Complete Trend Vision One documentation
- ✅ **Modern Docusaurus 3.8.1** - Latest static site generator with TypeScript
- ✅ **Full-Text Search** - Lunr.js powered search across all content
- ✅ **Responsive Design** - Mobile-friendly documentation
- ✅ **Trend Micro Branding** - Official colors and styling
- ✅ **Auto-Deploy** - GitHub Actions CI/CD pipeline
- ✅ **Grid Tables Support** - Enhanced table rendering
- ✅ **Image Optimization** - Automatic image processing

### Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

### Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Architecture

- **Source**: Converted from Trend Vision One WebHelp using Beautiful Goose
- **Generator**: Docusaurus 3.8.1 with TypeScript
- **Search**: Lunr.js for client-side full-text search
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

### Project Structure

```
├── docs/                 # Markdown documentation files
├── src/                  # React components and pages
├── static/               # Static assets (images, files)
├── docusaurus.config.ts  # Docusaurus configuration
└── .github/workflows/   # CI/CD pipeline
```

---

**Part of the AI-Centric Docs-as-Code POC Initiative**