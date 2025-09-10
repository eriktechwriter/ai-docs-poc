# Template Selection Guide - Good Docs Project Integration

This guide helps you choose the right template based on **The Good Docs Project** methodology, customized for Trend Vision One documentation.

## 📚 The Good Docs Project Framework

The Good Docs Project organizes documentation into three core types:

### 1. **Concept** - "What is it?"
Describes how and why something works. Helps readers understand a technology before they start using it.

**When to use:** Explaining features, systems, or processes
**Reader goal:** Learning and understanding
**Template examples:** `concept-overview.mdx`, `concept-explanation.mdx`

### 2. **Task** - "How do I do it?"
Gives specific instructions about how to get something done. Readers are actively doing something.

**When to use:** Step-by-step procedures, tutorials, guides
**Reader goal:** Accomplishing a specific task
**Template examples:** `task-how-to.mdx`, `task-tutorial.mdx`, `task-quickstart.mdx`

### 3. **Reference** - "What else do I need to know?"
Contains structured information that users need to make a product work. Readers are fact-checking.

**When to use:** API docs, specifications, troubleshooting, error codes
**Reader goal:** Finding specific information quickly
**Template examples:** `reference-api.mdx`, `reference-troubleshooting.mdx`

## 🎯 Template Selection Matrix

### By Documentation Type

| What you're documenting | Good Docs Type | Recommended Template |
|-------------------------|----------------|---------------------|
| **New security feature overview** | Concept | `security-feature-overview.mdx` |
| **How to configure alerts** | Task | `task-how-to.mdx` |
| **Learning threat investigation** | Task | `task-tutorial.mdx` |
| **Quick setup guide** | Task | `task-quickstart.mdx` |
| **API endpoint details** | Reference | `reference-api.mdx` |
| **Error codes and solutions** | Reference | `reference-troubleshooting.mdx` |
| **System architecture** | Concept | `concept-explanation.mdx` |

### By User Intent

| User is trying to... | Good Docs Type | Template Choice |
|---------------------|----------------|-----------------|
| **Understand what a feature does** | Concept | `security-feature-overview.mdx` or `concept-overview.mdx` |
| **Learn a new skill hands-on** | Task (Tutorial) | `task-tutorial.mdx` |
| **Complete a specific task** | Task (How-to) | `task-how-to.mdx` |
| **Get started quickly** | Task (Quickstart) | `task-quickstart.mdx` |
| **Look up specific information** | Reference | `reference-api.mdx` or `reference-general.mdx` |
| **Solve a problem** | Reference | `reference-troubleshooting.mdx` |

### By Audience and Experience Level

| Audience | Experience | Recommended Templates |
|----------|------------|----------------------|
| **SOC Analysts** | Beginner | `task-tutorial.mdx` → `task-how-to.mdx` |
| **SOC Analysts** | Experienced | `task-how-to.mdx` → `reference-troubleshooting.mdx` |
| **Security Engineers** | Any | `security-feature-overview.mdx` → `task-how-to.mdx` |
| **Developers** | Any | `reference-api.mdx` → `task-tutorial.mdx` |
| **IT Administrators** | Any | `task-how-to.mdx` → `reference-troubleshooting.mdx` |
| **Business Users** | Any | `concept-overview.mdx` → `task-quickstart.mdx` |

## 🔄 Template Combinations (Good Docs "Recipes")

The Good Docs Project recommends combining templates for comprehensive coverage:

### Security Feature Documentation Set
1. **`security-feature-overview.mdx`** (Concept) - What the feature is and why it matters
2. **`task-quickstart.mdx`** (Task) - Get started in 5 minutes
3. **`task-how-to.mdx`** (Task) - Detailed configuration steps
4. **`reference-troubleshooting.mdx`** (Reference) - Common issues and solutions

### API Documentation Set
1. **`concept-overview.mdx`** (Concept) - API overview and use cases
2. **`reference-api.mdx`** (Reference) - Complete API reference
3. **`task-tutorial.mdx`** (Task) - Hands-on integration tutorial
4. **`task-how-to.mdx`** (Task) - Common integration patterns

### Integration Documentation Set
1. **`integration-overview.mdx`** (Concept) - Integration capabilities and benefits
2. **`task-quickstart.mdx`** (Task) - Quick setup guide
3. **`integration-api-guide.mdx`** (Reference) - Technical implementation details
4. **`reference-troubleshooting.mdx`** (Reference) - Integration issues and fixes

## 🤖 AI Template Recommendations

Our AI Content Planner automatically suggests templates based on:

### Feature Analysis
- **Feature type** (security, analytics, integration, etc.)
- **Target audience** (analysts, engineers, developers, etc.)
- **Complexity level** (simple, moderate, complex)
- **Use case patterns** (configuration, troubleshooting, learning, etc.)

### Content Analysis
- **Existing documentation gaps** - What's missing in current docs
- **Related content** - What templates work well with existing content
- **User journey** - Where this fits in the user's workflow

### Enterprise Context
- **Documentation patterns** - What templates are used successfully
- **Content relationships** - How this connects to existing docs
- **Placement recommendations** - Where this content should live

## 📝 Template Usage Workflow

### 1. Analyze Your Content Need
Ask yourself:
- **What is the user trying to accomplish?** (Learn, do, or find information)
- **What's their experience level?** (Beginner, intermediate, expert)
- **What type of information are you providing?** (Concepts, steps, or reference data)

### 2. Select Primary Template
Choose the template that best matches the user's primary intent:
- **Learning/Understanding** → Concept template
- **Doing/Accomplishing** → Task template  
- **Finding/Referencing** → Reference template

### 3. Consider Secondary Templates
For comprehensive coverage, add supporting templates:
- Concept + Task (explain then show how)
- Task + Reference (show how then provide details)
- All three for complex features

### 4. Customize for Trend Vision One
- Use security-specific terminology
- Include compliance considerations
- Reference related Trend Vision One features
- Follow established navigation patterns

## ✅ Template Quality Checklist

Before publishing, ensure your template-based content includes:

### Good Docs Project Standards
- [ ] **Clear user intent** - Obvious what the user will accomplish
- [ ] **Appropriate depth** - Right level of detail for the template type
- [ ] **Logical structure** - Follows template organization
- [ ] **Actionable content** - Users can act on the information

### Trend Vision One Standards
- [ ] **Product terminology** - Uses consistent Trend Vision One language
- [ ] **Security context** - Addresses security implications
- [ ] **Integration points** - References related features
- [ ] **Compliance notes** - Includes relevant regulatory information

### Accessibility and SEO
- [ ] **Semantic structure** - Proper heading hierarchy
- [ ] **Alt text** - All images have descriptive alt text
- [ ] **Meta information** - Title, description, and tags are optimized
- [ ] **Cross-references** - Links to related documentation

## 🎉 Benefits of This Approach

### For Writers
- ✅ **Clear structure** - Templates provide proven organization
- ✅ **Faster writing** - Less time deciding what to include
- ✅ **Consistent quality** - Templates ensure completeness
- ✅ **User-focused** - Templates are designed around user needs

### For Users
- ✅ **Predictable structure** - Users know where to find information
- ✅ **Appropriate depth** - Right level of detail for their intent
- ✅ **Better findability** - Content is organized logically
- ✅ **Comprehensive coverage** - Template combinations ensure completeness

### For Organizations
- ✅ **Scalable documentation** - Templates work across teams
- ✅ **Quality assurance** - Built-in best practices
- ✅ **Reduced maintenance** - Consistent structure is easier to maintain
- ✅ **Better user experience** - Users can accomplish their goals efficiently

---

*This guide is based on [The Good Docs Project](https://thegooddocsproject.dev/) methodology, adapted for Trend Vision One documentation needs.*