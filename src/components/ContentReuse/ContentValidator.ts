/**
 * Content Validation System
 * 
 * Validates content references, dependencies, and snippet usage
 */

import { snippetManager, Snippet, ValidationResult, ValidationError, ValidationWarning } from './SnippetManager';

export interface DocumentReference {
  type: 'snippet' | 'link' | 'image' | 'file';
  id: string;
  path?: string;
  lineNumber?: number;
  columnNumber?: number;
  context?: string;
}

export interface DocumentValidationResult extends ValidationResult {
  documentPath: string;
  references: DocumentReference[];
  missingReferences: DocumentReference[];
  circularDependencies: string[];
  unusedSnippets: string[];
  performanceWarnings: ValidationWarning[];
}

export interface ValidationConfig {
  checkSnippetReferences: boolean;
  checkCircularDependencies: boolean;
  checkUnusedSnippets: boolean;
  checkPerformance: boolean;
  maxNestingDepth: number;
  maxSnippetsPerDocument: number;
}

class ContentValidator {
  private config: ValidationConfig;

  constructor(config: Partial<ValidationConfig> = {}) {
    this.config = {
      checkSnippetReferences: true,
      checkCircularDependencies: true,
      checkUnusedSnippets: true,
      checkPerformance: true,
      maxNestingDepth: 5,
      maxSnippetsPerDocument: 20,
      ...config
    };
  }

  /**
   * Validate a document's content references
   */
  validateDocument(content: string, documentPath: string): DocumentValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const references: DocumentReference[] = [];
    const missingReferences: DocumentReference[] = [];
    const circularDependencies: string[] = [];
    const performanceWarnings: ValidationWarning[] = [];

    // Extract all references from content
    const extractedReferences = this.extractReferences(content);
    references.push(...extractedReferences);

    // Validate snippet references
    if (this.config.checkSnippetReferences) {
      const snippetValidation = this.validateSnippetReferences(extractedReferences);
      errors.push(...snippetValidation.errors);
      warnings.push(...snippetValidation.warnings);
      missingReferences.push(...snippetValidation.missingReferences);
    }

    // Check circular dependencies
    if (this.config.checkCircularDependencies) {
      const circularDeps = this.checkCircularDependencies(extractedReferences, documentPath);
      circularDependencies.push(...circularDeps);
      
      if (circularDeps.length > 0) {
        errors.push({
          type: 'circular_dependency',
          message: `Circular dependencies detected: ${circularDeps.join(' -> ')}`,
          location: documentPath
        });
      }
    }

    // Performance checks
    if (this.config.checkPerformance) {
      const perfWarnings = this.checkPerformance(extractedReferences, content);
      performanceWarnings.push(...perfWarnings);
      warnings.push(...perfWarnings);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      documentPath,
      references,
      missingReferences,
      circularDependencies,
      unusedSnippets: [], // This would be calculated across all documents
      performanceWarnings
    };
  }

  /**
   * Validate multiple documents and find unused snippets
   */
  validateDocuments(documents: Array<{ content: string; path: string }>): {
    results: DocumentValidationResult[];
    globalIssues: {
      unusedSnippets: string[];
      globalCircularDependencies: string[];
      crossDocumentIssues: ValidationError[];
    };
  } {
    const results: DocumentValidationResult[] = [];
    const allReferences = new Set<string>();
    const allSnippetIds = new Set(Object.keys(snippetManager['library'].snippets));

    // Validate each document
    for (const doc of documents) {
      const result = this.validateDocument(doc.content, doc.path);
      results.push(result);

      // Collect all snippet references
      result.references
        .filter(ref => ref.type === 'snippet')
        .forEach(ref => allReferences.add(ref.id));
    }

    // Find unused snippets
    const unusedSnippets = Array.from(allSnippetIds).filter(id => !allReferences.has(id));

    // Check for global circular dependencies
    const globalCircularDependencies = this.findGlobalCircularDependencies(documents);

    // Check for cross-document issues
    const crossDocumentIssues = this.findCrossDocumentIssues(results);

    return {
      results,
      globalIssues: {
        unusedSnippets,
        globalCircularDependencies,
        crossDocumentIssues
      }
    };
  }

  /**
   * Extract all references from content
   */
  private extractReferences(content: string): DocumentReference[] {
    const references: DocumentReference[] = [];
    const lines = content.split('\n');

    lines.forEach((line, lineIndex) => {
      // Extract snippet includes: <SnippetInclude id="snippet-id" />
      const snippetMatches = line.matchAll(/<SnippetInclude\s+id=["']([^"']+)["']/g);
      for (const match of snippetMatches) {
        references.push({
          type: 'snippet',
          id: match[1],
          lineNumber: lineIndex + 1,
          columnNumber: match.index,
          context: line.trim()
        });
      }

      // Extract variable substitutions: {{>snippet-id}}
      const variableMatches = line.matchAll(/\{\{>(\w+)\}\}/g);
      for (const match of variableMatches) {
        references.push({
          type: 'snippet',
          id: match[1],
          lineNumber: lineIndex + 1,
          columnNumber: match.index,
          context: line.trim()
        });
      }

      // Extract markdown links: [text](path)
      const linkMatches = line.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g);
      for (const match of linkMatches) {
        references.push({
          type: 'link',
          id: match[2],
          path: match[2],
          lineNumber: lineIndex + 1,
          columnNumber: match.index,
          context: line.trim()
        });
      }

      // Extract image references: ![alt](path)
      const imageMatches = line.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g);
      for (const match of imageMatches) {
        references.push({
          type: 'image',
          id: match[2],
          path: match[2],
          lineNumber: lineIndex + 1,
          columnNumber: match.index,
          context: line.trim()
        });
      }
    });

    return references;
  }

  /**
   * Validate snippet references
   */
  private validateSnippetReferences(references: DocumentReference[]): {
    errors: ValidationError[];
    warnings: ValidationWarning[];
    missingReferences: DocumentReference[];
  } {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const missingReferences: DocumentReference[] = [];

    const snippetRefs = references.filter(ref => ref.type === 'snippet');

    for (const ref of snippetRefs) {
      const snippet = snippetManager.getSnippet(ref.id);
      
      if (!snippet) {
        errors.push({
          type: 'missing_snippet',
          message: `Snippet '${ref.id}' not found`,
          snippetId: ref.id,
          location: `Line ${ref.lineNumber}`
        });
        missingReferences.push(ref);
      } else {
        // Check if snippet has required variables that might not be provided
        const requiredVars = Object.entries(snippet.variables)
          .filter(([, varDef]) => varDef.required)
          .map(([name]) => name);

        if (requiredVars.length > 0) {
          warnings.push({
            type: 'unused_variable',
            message: `Snippet '${ref.id}' requires variables: ${requiredVars.join(', ')}`,
            snippetId: ref.id,
            suggestion: 'Make sure to provide all required variables when using this snippet'
          });
        }
      }
    }

    return { errors, warnings, missingReferences };
  }

  /**
   * Check for circular dependencies
   */
  private checkCircularDependencies(references: DocumentReference[], documentPath: string): string[] {
    const snippetRefs = references.filter(ref => ref.type === 'snippet');
    const visited = new Set<string>();
    const recursionStack = new Set<string>();
    const circularDeps: string[] = [];

    const dfs = (snippetId: string, path: string[]): boolean => {
      if (recursionStack.has(snippetId)) {
        // Found circular dependency
        const cycleStart = path.indexOf(snippetId);
        const cycle = path.slice(cycleStart).concat(snippetId);
        circularDeps.push(cycle.join(' -> '));
        return true;
      }

      if (visited.has(snippetId)) {
        return false;
      }

      visited.add(snippetId);
      recursionStack.add(snippetId);

      const snippet = snippetManager.getSnippet(snippetId);
      if (snippet) {
        for (const depId of snippet.dependencies) {
          if (dfs(depId, [...path, snippetId])) {
            return true;
          }
        }
      }

      recursionStack.delete(snippetId);
      return false;
    };

    // Check each snippet reference
    for (const ref of snippetRefs) {
      if (!visited.has(ref.id)) {
        dfs(ref.id, [documentPath]);
      }
    }

    return circularDeps;
  }

  /**
   * Check performance issues
   */
  private checkPerformance(references: DocumentReference[], content: string): ValidationWarning[] {
    const warnings: ValidationWarning[] = [];
    const snippetRefs = references.filter(ref => ref.type === 'snippet');

    // Check for too many snippets
    if (snippetRefs.length > this.config.maxSnippetsPerDocument) {
      warnings.push({
        type: 'performance',
        message: `Document contains ${snippetRefs.length} snippet references (max recommended: ${this.config.maxSnippetsPerDocument})`,
        suggestion: 'Consider consolidating snippets or splitting the document'
      });
    }

    // Check for deeply nested snippets
    const nestingDepth = this.calculateMaxNestingDepth(snippetRefs);
    if (nestingDepth > this.config.maxNestingDepth) {
      warnings.push({
        type: 'performance',
        message: `Maximum snippet nesting depth is ${nestingDepth} (max recommended: ${this.config.maxNestingDepth})`,
        suggestion: 'Consider flattening the snippet hierarchy'
      });
    }

    // Check for large content size
    const contentSize = content.length;
    if (contentSize > 100000) { // 100KB
      warnings.push({
        type: 'performance',
        message: `Document is large (${Math.round(contentSize / 1024)}KB)`,
        suggestion: 'Consider splitting into smaller documents'
      });
    }

    return warnings;
  }

  /**
   * Calculate maximum nesting depth of snippets
   */
  private calculateMaxNestingDepth(snippetRefs: DocumentReference[]): number {
    let maxDepth = 0;

    const calculateDepth = (snippetId: string, currentDepth: number, visited: Set<string>): number => {
      if (visited.has(snippetId)) {
        return currentDepth; // Avoid infinite recursion
      }

      visited.add(snippetId);
      const snippet = snippetManager.getSnippet(snippetId);
      
      if (!snippet) {
        return currentDepth;
      }

      let maxChildDepth = currentDepth;
      
      // Check dependencies
      for (const depId of snippet.dependencies) {
        const childDepth = calculateDepth(depId, currentDepth + 1, new Set(visited));
        maxChildDepth = Math.max(maxChildDepth, childDepth);
      }

      return maxChildDepth;
    };

    for (const ref of snippetRefs) {
      const depth = calculateDepth(ref.id, 1, new Set());
      maxDepth = Math.max(maxDepth, depth);
    }

    return maxDepth;
  }

  /**
   * Find global circular dependencies across all documents
   */
  private findGlobalCircularDependencies(documents: Array<{ content: string; path: string }>): string[] {
    // This would implement a more comprehensive circular dependency check
    // across all documents in the project
    return [];
  }

  /**
   * Find cross-document issues
   */
  private findCrossDocumentIssues(results: DocumentValidationResult[]): ValidationError[] {
    const errors: ValidationError[] = [];

    // Check for inconsistent snippet usage patterns
    const snippetUsage = new Map<string, DocumentReference[]>();
    
    for (const result of results) {
      for (const ref of result.references.filter(r => r.type === 'snippet')) {
        if (!snippetUsage.has(ref.id)) {
          snippetUsage.set(ref.id, []);
        }
        snippetUsage.get(ref.id)!.push(ref);
      }
    }

    // Find snippets used inconsistently
    for (const [snippetId, usages] of snippetUsage.entries()) {
      if (usages.length > 10) { // Heavily used snippet
        // Could add checks for consistent variable usage, etc.
      }
    }

    return errors;
  }

  /**
   * Generate validation report
   */
  generateReport(results: DocumentValidationResult[]): string {
    const totalErrors = results.reduce((sum, r) => sum + r.errors.length, 0);
    const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
    const validDocuments = results.filter(r => r.isValid).length;

    let report = `# Content Validation Report\n\n`;
    report += `## Summary\n`;
    report += `- Documents validated: ${results.length}\n`;
    report += `- Valid documents: ${validDocuments}\n`;
    report += `- Total errors: ${totalErrors}\n`;
    report += `- Total warnings: ${totalWarnings}\n\n`;

    if (totalErrors > 0) {
      report += `## Errors\n\n`;
      for (const result of results) {
        if (result.errors.length > 0) {
          report += `### ${result.documentPath}\n`;
          for (const error of result.errors) {
            report += `- **${error.type}**: ${error.message}\n`;
          }
          report += `\n`;
        }
      }
    }

    if (totalWarnings > 0) {
      report += `## Warnings\n\n`;
      for (const result of results) {
        if (result.warnings.length > 0) {
          report += `### ${result.documentPath}\n`;
          for (const warning of result.warnings) {
            report += `- **${warning.type}**: ${warning.message}\n`;
            if (warning.suggestion) {
              report += `  - *Suggestion: ${warning.suggestion}*\n`;
            }
          }
          report += `\n`;
        }
      }
    }

    return report;
  }
}

// Export singleton instance
export const contentValidator = new ContentValidator();
export default contentValidator;