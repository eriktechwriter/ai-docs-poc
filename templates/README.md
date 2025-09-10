# Documentation Templates - Trend Vision One

This directory contains documentation templates based on **The Good Docs Project** best practices, customized for Trend Vision One documentation needs.

## 📚 Template Categories

### Core Templates (Based on Good Docs Project)

**Concept Templates** - Describes how and why something works
- `concept-explanation.mdx` - Longer document giving background or context
- `concept-overview.mdx` - High-level overview of a feature or system

**Task Templates** - Gives specific instructions about how to get something done  
- `task-how-to.mdx` - Concise steps to accomplish one specific task
- `task-tutorial.mdx` - Learning-oriented walkthrough for beginners
- `task-quickstart.mdx` - Fastest way to get started

**Reference Templates** - Contains structured information users need
- `reference-general.mdx` - Specific details about a topic
- `reference-troubleshooting.mdx` - Error codes, solutions, diagnostics

### Trend Vision One Specific Templates

**Security Feature Templates**
- `security-feature-overview.mdx` - Security feature introduction
- `security-alert-configuration.mdx` - Alert setup and management
- `security-threat-investigation.mdx` - Investigation workflows

**Integration Templates**
- `integration-guide.mdx` - Third-party integration setup and configuration
- `integration-connector.mdx` - Connector setup and configuration
- `integration-webhook.mdx` - Webhook implementation

**Analytics Templates**
- `analytics-dashboard.mdx` - Dashboard and reporting features
- `analytics-metrics.mdx` - Metrics and KPI documentation

## 🎯 Template Selection Guide

### Choose by Documentation Type

| What you're documenting | Template to use |
|-------------------------|-----------------|
| **New security feature** | `security-feature-overview.mdx` |
| **Step-by-step process** | `task-how-to.mdx` |
| **Learning walkthrough** | `task-tutorial.mdx` |
| **Quick setup** | `task-quickstart.mdx` |
| **System explanation** | `concept-explanation.mdx` |
| **Error troubleshooting** | `reference-troubleshooting.mdx` |
| **Third-party integration** | `integration-guide.mdx` |
| **Dashboard feature** | `analytics-dashboard.mdx` |

### Choose by Audience

| Target audience | Recommended templates |
|-----------------|----------------------|
| **SOC Analysts** | `security-*`, `task-how-to.mdx`, `analytics-dashboard.mdx` |
| **Security Engineers** | `security-*`, `integration-*`, `reference-*` |
| **Developers** | `reference-api.mdx`, `integration-*`, `task-tutorial.mdx` |
| **IT Administrators** | `integration-*`, `task-how-to.mdx`, `reference-troubleshooting.mdx` |
| **Business Users** | `concept-overview.mdx`, `task-quickstart.mdx`, `analytics-*` |

## 🤖 AI Integration

These templates are integrated with our AI Content Planner:

1. **AI analyzes your feature description**
2. **Recommends appropriate templates** based on:
   - Feature type (security, analytics, integration, etc.)
   - Target audience (analysts, engineers, developers)
   - Content type (concept, task, reference)
3. **Pre-fills template sections** with relevant content
4. **Suggests related existing documentation** to reference

## 📝 Template Usage

### Manual Usage
```bash
# Copy template to your content location
cp templates/security-feature-overview.mdx docs/threat-detection/new-feature.mdx

# Edit the template, replacing {placeholder} content
# Follow the writing guidelines in each template
```

### AI-Assisted Usage
```bash
# Let AI recommend and pre-fill templates
npm run ai:plan

# AI will:
# 1. Analyze your feature description
# 2. Recommend the best template(s)
# 3. Pre-fill sections with relevant content
# 4. Suggest placement in existing documentation structure
```

## 🎨 Template Features

### Good Docs Project Standards
- ✅ **Clear structure** - Consistent sections and organization
- ✅ **User-focused** - Written from user perspective
- ✅ **Actionable content** - Specific, measurable outcomes
- ✅ **Accessibility** - Screen reader friendly, semantic markup

### Trend Vision One Enhancements
- ✅ **Product-specific sections** - Tailored to security workflows
- ✅ **Consistent terminology** - Uses Trend Vision One language
- ✅ **Cross-references** - Links to related documentation
- ✅ **Compliance considerations** - Security and regulatory notes

### MDX Enhancements
- ✅ **Interactive components** - Tabs, callouts, code blocks
- ✅ **Reusable content** - Shared components and snippets
- ✅ **Rich media support** - Images, videos, diagrams
- ✅ **SEO optimization** - Proper metadata and structure

## 📋 Template Checklist

Before publishing documentation created from these templates:

### Content Quality
- [ ] All {placeholder} content replaced with actual information
- [ ] Writing follows Trend Vision One style guide
- [ ] Technical accuracy verified by subject matter expert
- [ ] Screenshots and examples are current

### Structure & Navigation
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Table of contents generated (if needed)
- [ ] Cross-references to related documentation added
- [ ] Proper sidebar placement configured

### Accessibility & SEO
- [ ] Alt text added for all images
- [ ] Semantic markup used correctly
- [ ] Meta description and title optimized
- [ ] Keywords naturally integrated

### Integration
- [ ] Links to related Trend Vision One features
- [ ] API references linked (if applicable)
- [ ] Troubleshooting resources referenced
- [ ] Support contact information included

## 🔄 Template Maintenance

Templates are updated based on:
- **Good Docs Project updates** - Latest best practices
- **User feedback** - What works well, what doesn't
- **Trend Vision One changes** - Product updates and new features
- **Analytics data** - Most/least used sections

## 📞 Getting Help

- **Template questions**: Check the writing guidelines in each template
- **AI integration issues**: Run `npm run ai:plan --help`
- **Style guide questions**: See `.vale/styles/TrendVisionOne/`
- **Technical issues**: Contact the documentation team

---

*These templates are based on [The Good Docs Project](https://thegooddocsproject.dev/) templates, customized for Trend Vision One documentation needs.*