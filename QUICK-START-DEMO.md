# Quick Start Demo Guide

## 🚀 **Test Drive Your AI Documentation System**

Let's walk through the complete workflow to see your system in action!

---

## **Step 1: Setup and Dependencies**

First, make sure everything is installed:

```bash
cd ai-docs-poc
npm instaldo
```

**Check that key commands work:**
```bash
# Test the main commands
npm run ai:plan --help
npm run ai:generate --help
npm run ai:review --help
```

---

## **Step 2: Generate Your First AI Content**

Let's create some documentation to test with:

### **Option A: Full Pipeline (Recommended)**
```bash
npm run ai:generate
```

**What to expect:**
- Interactive prompts for feature details
- Template selection
- Content generation with quality analysis
- Complete workflow demonstration

### **Option B: Step-by-Step**
```bash
# 1. Plan content strategy
npm run ai:plan

# 2. Generate content only
npm run ai:generate-only

# 3. Review the generated content
npm run ai:review
```

---

## **Step 3: Try the Content Planning System**

```bash
npm run ai:plan
```

**Demo inputs to try:**
- **Feature Name**: "Advanced Threat Detection"
- **Description**: "AI-powered threat detection that identifies sophisticated attacks using behavioral analysis"
- **Audience**: Technical Users
- **Feature Type**: Security

**What you'll see:**
- Template recommendations
- Audience analysis
- Content strategy suggestions
- Planning output saved to `planning-output.json`

---

## **Step 4: Generate Content from Planning**

```bash
npm run ai:generate
```

**Select "Use existing planning data" when prompted**

**What happens:**
- Loads your planning data
- Generates content from multiple templates
- Applies enterprise context and optimization
- Creates quality analysis reports
- Saves everything to `generated-content/`

**Check the results:**
```bash
ls generated-content/advanced-threat-detection/
```

You should see:
- `*.mdx` files (the generated content)
- `*.meta.json` files (metadata and quality scores)
- Quality analysis reports

---

## **Step 5: Review and Iterate**

```bash
npm run ai:review
```

**Try each review mode:**

### **Quick Review**
- Fast approval/feedback workflow
- See quality scores
- Provide simple feedback

### **Detailed Review** 
- Creates comprehensive markdown review report
- Opens in VS Code for editing
- Structured feedback collection

### **GitHub Ready**
- Creates Git branch
- Commits content with AI metadata
- Generates PR description
- Ready for team review

---

## **Step 6: Test Quality Analysis**

```bash
npm run ai:analyze
```

**What you'll see:**
- Content quality scoring (0-100%)
- Detailed issue identification
- Improvement suggestions
- Accessibility and SEO analysis
- Enterprise standards compliance

**Try analyzing different content types to see how scores vary**

---

## **Step 7: Process Feedback**

After providing feedback in the review step:

```bash
npm run ai:feedback --pending
```

**What happens:**
- Processes natural language feedback
- Creates action plans (immediate/short-term/long-term)
- Generates regeneration hints
- Tracks feedback patterns

```bash
npm run ai:feedback --summary
```

**Shows:**
- Feedback trends across projects
- Common improvement areas
- Priority distribution

---

## **Step 8: Explore the Generated Files**

### **Content Structure**
```
generated-content/
├── advanced-threat-detection/
│   ├── advanced-threat-detection-overview.mdx
│   ├── how-to-advanced-threat-detection.mdx
│   ├── advanced-threat-detection-tutorial.mdx
│   ├── *.meta.json (metadata files)
│   └── quality-analysis-*.json
└── reports/
    └── content-generation-report-*.json
```

### **Review Data**
```
reviews/
├── advanced-threat-detection-feedback.json
├── advanced-threat-detection-detailed-review.md
├── advanced-threat-detection-pr-description.md
└── feedback-summary.json
```

---

## **Step 9: Test Enterprise Context (If Available)**

If you have existing documentation:

```bash
# Index existing docs for context
npm run docs:index

# Test context retrieval
npm run docs:context-test
```

**This will:**
- Index your existing documentation
- Test enterprise context retrieval
- Show how AI uses existing content for better generation

---

## **Step 10: Quality Tools Integration**

Test how the system works with existing quality tools:

```bash
# Run comprehensive quality checks
npm run quality:comprehensive

# Test individual tools
npm run quality:spelling
npm run quality:prose
```

---

## **🎯 Demo Scenarios to Try**

### **Scenario 1: Security Feature Documentation**
- **Feature**: "Zero Trust Network Access"
- **Audience**: Business Users
- **Templates**: Overview + How-To Guide
- **Focus**: See how security terminology is handled

### **Scenario 2: Integration Guide**
- **Feature**: "Slack Integration Setup"  
- **Audience**: Developers
- **Templates**: Integration Guide + Tutorial
- **Focus**: Test technical depth and code examples

### **Scenario 3: Analytics Feature**
- **Feature**: "Custom Dashboard Builder"
- **Audience**: Technical Users
- **Templates**: Overview + Tutorial + How-To
- **Focus**: See comprehensive content generation

---

## **🔍 What to Look For**

### **Content Quality**
- **Brand consistency**: "Trend Vision One" usage
- **Enterprise terminology**: Proper acronym expansion
- **Security focus**: Appropriate security considerations
- **Accessibility**: Alt text, heading hierarchy
- **SEO optimization**: Title/description quality

### **Workflow Integration**
- **VS Code integration**: Does content open properly?
- **Git integration**: Are commits created with metadata?
- **Quality scoring**: Do scores reflect content quality?
- **Feedback processing**: Are suggestions actionable?

### **Enterprise Features**
- **Template variety**: Different content types generated
- **Context integration**: Relevant cross-references
- **Compliance checking**: Required sections present
- **Audit trails**: Change tracking and metadata

---

## **🐛 Troubleshooting**

### **Common Issues**

**"Command not found" errors:**
```bash
# Make sure you're in the right directory
cd ai-docs-poc
npm install
```

**"No content found for review":**
```bash
# Generate content first
npm run ai:generate
```

**VS Code doesn't open:**
- The system will fall back to CLI mode
- Content is still generated and reviewable

**Git operations fail:**
- System continues without Git integration
- Content is still generated and saved

---

## **🎉 Success Indicators**

You'll know the system is working when:

✅ **Content generates** in under 5 minutes
✅ **Quality scores** show measurable analysis (60-95% range)
✅ **Review workflow** completes without errors
✅ **Feedback processing** creates actionable suggestions
✅ **Files are organized** in logical directory structure
✅ **Enterprise standards** are applied consistently

---

## **🔄 Next Steps After Demo**

Once you've tested the core functionality:

1. **Try with real Trend Vision One features** you're documenting
2. **Test with your existing documentation** for context integration
3. **Experiment with different audiences** and content types
4. **Collect feedback** from other team members
5. **Identify areas** for enhancement or customization

---

## **💡 Pro Tips**

### **For Best Results**
- **Use specific feature names** (not generic terms)
- **Provide detailed descriptions** for better context
- **Try different audience levels** to see content adaptation
- **Review quality reports** to understand scoring

### **For Testing**
- **Generate multiple features** to see consistency
- **Try the same feature** with different audiences
- **Test feedback processing** with various input types
- **Experiment with review modes** to find preferences

### **For Evaluation**
- **Compare generated content** to manually written docs
- **Check enterprise compliance** against your standards
- **Test workflow integration** with your current processes
- **Measure time savings** vs traditional documentation

---

**Ready to start? Run `npm run ai:generate` and let's see your AI documentation system in action!** 🚀