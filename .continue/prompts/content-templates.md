# Content Templates for AI Generation

## Procedure Template
```markdown
---
title: "How to [Action] in [Product/Feature]"
description: "Step-by-step guide to [brief description]"
tags: ["procedure", "configuration", "[product-area]"]
audience: ["admin", "user"]
difficulty: "beginner|intermediate|advanced"
estimated_reading_time: "X minutes"
---

# How to [Action] in [Product/Feature]

## Overview
Brief explanation of what this procedure accomplishes and why it's useful.

## Prerequisites
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Required permissions: [specific roles]

## Steps

### Step 1: [Action Name]
1. Navigate to **[Menu] > [Submenu]**
2. Click **[Button/Link]**
3. [Specific action with expected result]

### Step 2: [Next Action]
1. [Detailed step]
2. [Expected outcome or verification]

## Verification
To confirm the configuration is working:
1. [Verification step]
2. [Expected result]

## Troubleshooting
If you encounter issues:
- **Problem**: [Common issue]
  **Solution**: [How to resolve]

## Related Topics
- [Link to related procedure]
- [Link to conceptual overview]
```

## Concept Template
```markdown
---
title: "[Concept Name] Overview"
description: "Understanding [concept] in [product context]"
tags: ["concept", "overview", "[product-area]"]
audience: ["admin", "analyst", "developer"]
difficulty: "beginner"
---

# [Concept Name] Overview

## What is [Concept]?
Clear, concise definition in 1-2 sentences.

## How It Works
Explanation of the underlying mechanism or process.

## Key Benefits
- **Benefit 1**: Explanation
- **Benefit 2**: Explanation
- **Benefit 3**: Explanation

## Use Cases
### Use Case 1: [Scenario]
Description of when and why you'd use this.

### Use Case 2: [Scenario]
Another common application.

## Implementation Considerations
- **Security**: Important security aspects
- **Performance**: Performance implications
- **Scalability**: Scaling considerations

## Next Steps
- [Link to configuration guide]
- [Link to advanced topics]
```

## API Reference Template
```markdown
---
title: "[API Name] API Reference"
description: "Complete reference for [API] endpoints and parameters"
tags: ["api", "reference", "developer"]
audience: ["developer", "integrator"]
difficulty: "intermediate"
---

# [API Name] API Reference

## Authentication
Required authentication method and headers.

## Base URL
```
https://api.trendmicro.com/v1/
```

## Endpoints

### GET /[endpoint]
Brief description of what this endpoint does.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param1` | string | Yes | Description |
| `param2` | integer | No | Description |

**Example Request:**
```bash
curl -X GET "https://api.trendmicro.com/v1/endpoint" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

**Example Response:**
```json
{
  "status": "success",
  "data": {
    "field1": "value1",
    "field2": "value2"
  }
}
```

**Error Responses:**
| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
```

## Troubleshooting Template
```markdown
---
title: "Troubleshooting [Issue/Feature]"
description: "Common issues and solutions for [feature/area]"
tags: ["troubleshooting", "support", "[product-area]"]
audience: ["admin", "support"]
difficulty: "intermediate"
---

# Troubleshooting [Issue/Feature]

## Common Issues

### Issue 1: [Problem Description]

**Symptoms:**
- Symptom 1
- Symptom 2

**Possible Causes:**
- Cause 1: Brief explanation
- Cause 2: Brief explanation

**Resolution:**
1. [Step 1 with expected outcome]
2. [Step 2 with verification]
3. [Step 3 if needed]

**Verification:**
How to confirm the issue is resolved.

### Issue 2: [Another Problem]
[Same structure as above]

## Advanced Troubleshooting

### Diagnostic Steps
1. [Diagnostic command or check]
2. [What to look for in results]

### Log Analysis
- **Log Location**: `/path/to/logs`
- **Key Indicators**: What to search for
- **Sample Log Entry**: Example of relevant log

## When to Contact Support
Contact support if:
- [Condition 1]
- [Condition 2]

**Information to Provide:**
- System configuration
- Error messages
- Steps to reproduce
- Log files (if applicable)
```

## Release Notes Template
```markdown
---
title: "[Product] Release [Version]"
description: "New features, improvements, and fixes in version [X.Y.Z]"
tags: ["release-notes", "updates", "[product]"]
audience: ["admin", "user"]
---

# [Product] Release [Version]
*Released: [Date]*

## What's New

### New Features
- **[Feature Name]**: Brief description and benefit
- **[Feature Name]**: Brief description and benefit

### Enhancements
- **[Area]**: Improvement description
- **[Area]**: Improvement description

### Bug Fixes
- Fixed issue where [description]
- Resolved problem with [description]

## Breaking Changes
⚠️ **Important**: The following changes may affect existing configurations:

- **[Change]**: Description and migration steps
- **[Change]**: Description and migration steps

## Upgrade Instructions
1. [Step 1]
2. [Step 2]
3. [Verification step]

## Known Issues
- **Issue**: Description and workaround
- **Issue**: Description and workaround

## Additional Resources
- [Migration Guide](link)
- [Feature Documentation](link)
```