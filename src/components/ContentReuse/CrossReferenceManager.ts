/**
 * Cross-Reference and Relationship Management System
 * 
 * Task 6.3: Build cross-reference and relationship management
 * - Create automatic link validation system for internal references
 * - Implement dynamic reference generation based on content relationships
 * - Build content hierarchy and navigation management system
 * - Create related content suggestion system using vector similarity
 */

export interface ContentNode {
  id: string;
  title: string;
  path: string;
  type: 'document' | 'section' | 'topic' | 'concept' | 'task' | 'reference';
  level: number;
  parent?: string;
  children: string[];
  metadata: {
    tags: string[];
    category: string;
    audience: string[];
    lastModified: Date;
    author: string;
    version: string;
  };
  content?: string;
  embedding?: number[];
}

export interface CrossReference {
  id: string;
  sourceId: string;
  targetId: string;
  type: 'link' | 'see-also' | 'prerequisite' | 'follow-up' | 'related' | 'parent-child' | 'sibling';
  label?: string;
  description?: string;
  strength: number; // 0-1, how strong the relationship is
  bidirectional: boolean;
  context?: string;
  lineNumber?: number;
  automatic: boolean; // Whether this was auto-generated
  validated: boolean;
  lastValidated: Date;
}

export interface LinkValidationResult {
  isValid: boolean;
  exists: boolean;
  accessible: boolean;
  redirected: boolean;
  finalUrl?: string;
  statusCode?: number;
  error?: string;
  lastChecked: Date;
}

export interface RelatedContentSuggestion {
  targetId: string;
  title: string;
  path: string;
  relevanceScore: number;
  reason: 'semantic' | 'structural' | 'categorical' | 'collaborative' | 'temporal';
  explanation: string;
  metadata: {
    type: string;
    category: string;
    tags: string[];
  };
}

export interface ContentHierarchy {
  root: ContentNode;
  nodes: Map<string, ContentNode>;
  relationships: Map<string, CrossReference[]>;
  depth: number;
  breadcrumbs: Map<string, ContentNode[]>;
}

class CrossReferenceManager {
  private nodes: Map<string, ContentNode> = new Map();
  private references: Map<string, CrossReference[]> = new Map();
  private validationCache: Map<string, LinkValidationResult> = new Map();
  private hierarchies: Map<string, ContentHierarchy> = new Map();

  /**
   * Add a content node to the system
   */
  addNode(node: ContentNode): void {
    this.nodes.set(node.id, node);
    
    // Initialize references array if not exists
    if (!this.references.has(node.id)) {
      this.references.set(node.id, []);
    }

    // Update parent-child relationships
    if (node.parent) {
      this.addReference({
        id: `${node.parent}-${node.id}`,
        sourceId: node.parent,
        targetId: node.id,
        type: 'parent-child',
        strength: 1.0,
        bidirectional: true,
        automatic: true,
        validated: true,
        lastValidated: new Date()
      });

      // Add child to parent
      const parent = this.nodes.get(node.parent);
      if (parent && !parent.children.includes(node.id)) {
        parent.children.push(node.id);
      }
    }

    // Update hierarchies
    this.updateHierarchies();
  }

  /**
   * Add a cross-reference between nodes
   */
  addReference(reference: CrossReference): void {
    // Add to source node's references
    if (!this.references.has(reference.sourceId)) {
      this.references.set(reference.sourceId, []);
    }
    this.references.get(reference.sourceId)!.push(reference);

    // Add reverse reference if bidirectional
    if (reference.bidirectional) {
      const reverseRef: CrossReference = {
        ...reference,
        id: `${reference.id}-reverse`,
        sourceId: reference.targetId,
        targetId: reference.sourceId,
        bidirectional: false // Prevent infinite recursion
      };

      if (!this.references.has(reference.targetId)) {
        this.references.set(reference.targetId, []);
      }
      this.references.get(reference.targetId)!.push(reverseRef);
    }
  }

  /**
   * Get all references for a node
   */
  getReferences(nodeId: string, type?: string): CrossReference[] {
    const refs = this.references.get(nodeId) || [];
    return type ? refs.filter(ref => ref.type === type) : refs;
  }

  /**
   * Get related content suggestions using multiple algorithms
   */
  async getRelatedContent(
    nodeId: string, 
    maxSuggestions: number = 10,
    algorithms: string[] = ['semantic', 'structural', 'categorical']
  ): Promise<RelatedContentSuggestion[]> {
    const node = this.nodes.get(nodeId);
    if (!node) return [];

    const suggestions: RelatedContentSuggestion[] = [];

    // Semantic similarity (requires embeddings)
    if (algorithms.includes('semantic') && node.embedding) {
      const semanticSuggestions = await this.getSemanticSuggestions(node, maxSuggestions);
      suggestions.push(...semanticSuggestions);
    }

    // Structural relationships
    if (algorithms.includes('structural')) {
      const structuralSuggestions = this.getStructuralSuggestions(node, maxSuggestions);
      suggestions.push(...structuralSuggestions);
    }

    // Categorical similarity
    if (algorithms.includes('categorical')) {
      const categoricalSuggestions = this.getCategoricalSuggestions(node, maxSuggestions);
      suggestions.push(...categoricalSuggestions);
    }

    // Collaborative filtering (based on user behavior)
    if (algorithms.includes('collaborative')) {
      const collaborativeSuggestions = this.getCollaborativeSuggestions(node, maxSuggestions);
      suggestions.push(...collaborativeSuggestions);
    }

    // Temporal relationships (recently updated, trending)
    if (algorithms.includes('temporal')) {
      const temporalSuggestions = this.getTemporalSuggestions(node, maxSuggestions);
      suggestions.push(...temporalSuggestions);
    }

    // Remove duplicates and sort by relevance
    const uniqueSuggestions = this.deduplicateAndRank(suggestions, nodeId);
    return uniqueSuggestions.slice(0, maxSuggestions);
  }

  /**
   * Validate all links in the system
   */
  async validateAllLinks(): Promise<Map<string, LinkValidationResult>> {
    const results = new Map<string, LinkValidationResult>();

    for (const [nodeId, refs] of this.references.entries()) {
      for (const ref of refs) {
        const result = await this.validateLink(ref);
        results.set(ref.id, result);
      }
    }

    return results;
  }

  /**
   * Validate a specific link
   */
  async validateLink(reference: CrossReference): Promise<LinkValidationResult> {
    const cacheKey = `${reference.sourceId}-${reference.targetId}`;
    const cached = this.validationCache.get(cacheKey);
    
    // Return cached result if recent (within 1 hour)
    if (cached && Date.now() - cached.lastChecked.getTime() < 3600000) {
      return cached;
    }

    const result: LinkValidationResult = {
      isValid: false,
      exists: false,
      accessible: false,
      redirected: false,
      lastChecked: new Date()
    };

    try {
      const targetNode = this.nodes.get(reference.targetId);
      
      if (!targetNode) {
        result.error = 'Target node not found';
        result.exists = false;
      } else {
        result.exists = true;
        
        // For internal links, check if the target is accessible
        // This would integrate with your routing/permission system
        result.accessible = await this.checkNodeAccessibility(targetNode);
        result.isValid = result.accessible;
      }

    } catch (error) {
      result.error = error instanceof Error ? error.message : 'Unknown error';
    }

    // Cache the result
    this.validationCache.set(cacheKey, result);
    
    // Update reference validation status
    reference.validated = result.isValid;
    reference.lastValidated = result.lastChecked;

    return result;
  }

  /**
   * Generate dynamic references based on content analysis
   */
  generateDynamicReferences(nodeId: string): CrossReference[] {
    const node = this.nodes.get(nodeId);
    if (!node) return [];

    const dynamicRefs: CrossReference[] = [];

    // Generate references based on content analysis
    if (node.content) {
      // Extract mentioned concepts, terms, or other nodes
      const mentions = this.extractMentions(node.content);
      
      for (const mention of mentions) {
        const targetNode = this.findNodeByTitle(mention) || this.findNodeByTag(mention);
        
        if (targetNode && targetNode.id !== nodeId) {
          dynamicRefs.push({
            id: `dynamic-${nodeId}-${targetNode.id}`,
            sourceId: nodeId,
            targetId: targetNode.id,
            type: 'related',
            strength: 0.7,
            bidirectional: false,
            automatic: true,
            validated: false,
            lastValidated: new Date(),
            context: `Mentioned in content: "${mention}"`
          });
        }
      }
    }

    // Generate references based on metadata similarity
    const metadataRefs = this.generateMetadataReferences(node);
    dynamicRefs.push(...metadataRefs);

    return dynamicRefs;
  }

  /**
   * Build content hierarchy for navigation
   */
  buildHierarchy(rootId: string): ContentHierarchy {
    const root = this.nodes.get(rootId);
    if (!root) {
      throw new Error(`Root node not found: ${rootId}`);
    }

    const hierarchy: ContentHierarchy = {
      root,
      nodes: new Map(),
      relationships: new Map(),
      depth: 0,
      breadcrumbs: new Map()
    };

    // Build the hierarchy tree
    this.buildHierarchyRecursive(root, hierarchy, 0);

    // Generate breadcrumbs for all nodes
    this.generateBreadcrumbs(hierarchy);

    this.hierarchies.set(rootId, hierarchy);
    return hierarchy;
  }

  /**
   * Get breadcrumb navigation for a node
   */
  getBreadcrumbs(nodeId: string): ContentNode[] {
    // Find the hierarchy containing this node
    for (const hierarchy of this.hierarchies.values()) {
      const breadcrumbs = hierarchy.breadcrumbs.get(nodeId);
      if (breadcrumbs) {
        return breadcrumbs;
      }
    }

    // If not found in any hierarchy, build a simple parent chain
    return this.buildParentChain(nodeId);
  }

  /**
   * Get navigation structure for a hierarchy
   */
  getNavigationStructure(rootId: string): any {
    const hierarchy = this.hierarchies.get(rootId);
    if (!hierarchy) {
      return null;
    }

    return this.buildNavigationTree(hierarchy.root, hierarchy);
  }

  /**
   * Find broken links in the system
   */
  async findBrokenLinks(): Promise<CrossReference[]> {
    const brokenLinks: CrossReference[] = [];

    for (const refs of this.references.values()) {
      for (const ref of refs) {
        const validation = await this.validateLink(ref);
        if (!validation.isValid) {
          brokenLinks.push(ref);
        }
      }
    }

    return brokenLinks;
  }

  /**
   * Get content statistics
   */
  getStatistics(): {
    totalNodes: number;
    totalReferences: number;
    averageReferencesPerNode: number;
    hierarchies: number;
    brokenLinksCount: number;
    nodesByType: Record<string, number>;
    referencesByType: Record<string, number>;
  } {
    const totalNodes = this.nodes.size;
    const totalReferences = Array.from(this.references.values())
      .reduce((sum, refs) => sum + refs.length, 0);

    const nodesByType: Record<string, number> = {};
    const referencesByType: Record<string, number> = {};

    // Count nodes by type
    for (const node of this.nodes.values()) {
      nodesByType[node.type] = (nodesByType[node.type] || 0) + 1;
    }

    // Count references by type
    for (const refs of this.references.values()) {
      for (const ref of refs) {
        referencesByType[ref.type] = (referencesByType[ref.type] || 0) + 1;
      }
    }

    // Count broken links
    const brokenLinksCount = Array.from(this.references.values())
      .flat()
      .filter(ref => !ref.validated)
      .length;

    return {
      totalNodes,
      totalReferences,
      averageReferencesPerNode: totalNodes > 0 ? totalReferences / totalNodes : 0,
      hierarchies: this.hierarchies.size,
      brokenLinksCount,
      nodesByType,
      referencesByType
    };
  }

  // Private helper methods

  private async getSemanticSuggestions(
    node: ContentNode, 
    maxSuggestions: number
  ): Promise<RelatedContentSuggestion[]> {
    if (!node.embedding) return [];

    const suggestions: RelatedContentSuggestion[] = [];

    for (const [id, otherNode] of this.nodes.entries()) {
      if (id === node.id || !otherNode.embedding) continue;

      const similarity = this.cosineSimilarity(node.embedding, otherNode.embedding);
      
      if (similarity > 0.7) { // Threshold for semantic similarity
        suggestions.push({
          targetId: id,
          title: otherNode.title,
          path: otherNode.path,
          relevanceScore: similarity,
          reason: 'semantic',
          explanation: `Semantically similar content (${Math.round(similarity * 100)}% match)`,
          metadata: {
            type: otherNode.type,
            category: otherNode.metadata.category,
            tags: otherNode.metadata.tags
          }
        });
      }
    }

    return suggestions.sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxSuggestions);
  }

  private getStructuralSuggestions(
    node: ContentNode, 
    maxSuggestions: number
  ): Promise<RelatedContentSuggestion[]> {
    const suggestions: RelatedContentSuggestion[] = [];

    // Sibling nodes (same parent)
    if (node.parent) {
      const parent = this.nodes.get(node.parent);
      if (parent) {
        for (const siblingId of parent.children) {
          if (siblingId !== node.id) {
            const sibling = this.nodes.get(siblingId);
            if (sibling) {
              suggestions.push({
                targetId: siblingId,
                title: sibling.title,
                path: sibling.path,
                relevanceScore: 0.8,
                reason: 'structural',
                explanation: 'Sibling content in the same section',
                metadata: {
                  type: sibling.type,
                  category: sibling.metadata.category,
                  tags: sibling.metadata.tags
                }
              });
            }
          }
        }
      }
    }

    // Child nodes
    for (const childId of node.children) {
      const child = this.nodes.get(childId);
      if (child) {
        suggestions.push({
          targetId: childId,
          title: child.title,
          path: child.path,
          relevanceScore: 0.9,
          reason: 'structural',
          explanation: 'Child content - more detailed information',
          metadata: {
            type: child.type,
            category: child.metadata.category,
            tags: child.metadata.tags
          }
        });
      }
    }

    return Promise.resolve(suggestions.slice(0, maxSuggestions));
  }

  private getCategoricalSuggestions(
    node: ContentNode, 
    maxSuggestions: number
  ): Promise<RelatedContentSuggestion[]> {
    const suggestions: RelatedContentSuggestion[] = [];

    for (const [id, otherNode] of this.nodes.entries()) {
      if (id === node.id) continue;

      let score = 0;
      let reasons: string[] = [];

      // Same category
      if (otherNode.metadata.category === node.metadata.category) {
        score += 0.5;
        reasons.push('same category');
      }

      // Shared tags
      const sharedTags = node.metadata.tags.filter(tag => 
        otherNode.metadata.tags.includes(tag)
      );
      if (sharedTags.length > 0) {
        score += 0.3 * (sharedTags.length / Math.max(node.metadata.tags.length, 1));
        reasons.push(`shared tags: ${sharedTags.join(', ')}`);
      }

      // Same audience
      const sharedAudience = node.metadata.audience.filter(aud => 
        otherNode.metadata.audience.includes(aud)
      );
      if (sharedAudience.length > 0) {
        score += 0.2;
        reasons.push('same audience');
      }

      if (score > 0.3) { // Minimum threshold
        suggestions.push({
          targetId: id,
          title: otherNode.title,
          path: otherNode.path,
          relevanceScore: score,
          reason: 'categorical',
          explanation: `Related by ${reasons.join(', ')}`,
          metadata: {
            type: otherNode.type,
            category: otherNode.metadata.category,
            tags: otherNode.metadata.tags
          }
        });
      }
    }

    return Promise.resolve(suggestions.sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxSuggestions));
  }

  private getCollaborativeSuggestions(
    node: ContentNode, 
    maxSuggestions: number
  ): Promise<RelatedContentSuggestion[]> {
    // This would integrate with user behavior analytics
    // For now, return empty array as placeholder
    return Promise.resolve([]);
  }

  private getTemporalSuggestions(
    node: ContentNode, 
    maxSuggestions: number
  ): Promise<RelatedContentSuggestion[]> {
    const suggestions: RelatedContentSuggestion[] = [];
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    for (const [id, otherNode] of this.nodes.entries()) {
      if (id === node.id) continue;

      // Recently updated content
      if (otherNode.metadata.lastModified > oneWeekAgo) {
        suggestions.push({
          targetId: id,
          title: otherNode.title,
          path: otherNode.path,
          relevanceScore: 0.6,
          reason: 'temporal',
          explanation: 'Recently updated content',
          metadata: {
            type: otherNode.type,
            category: otherNode.metadata.category,
            tags: otherNode.metadata.tags
          }
        });
      }
    }

    return Promise.resolve(suggestions.slice(0, maxSuggestions));
  }

  private deduplicateAndRank(
    suggestions: RelatedContentSuggestion[], 
    excludeId: string
  ): RelatedContentSuggestion[] {
    const seen = new Set<string>();
    const unique: RelatedContentSuggestion[] = [];

    for (const suggestion of suggestions) {
      if (suggestion.targetId !== excludeId && !seen.has(suggestion.targetId)) {
        seen.add(suggestion.targetId);
        unique.push(suggestion);
      }
    }

    return unique.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  private async checkNodeAccessibility(node: ContentNode): Promise<boolean> {
    // This would integrate with your permission/routing system
    // For now, assume all nodes are accessible
    return true;
  }

  private extractMentions(content: string): string[] {
    // Simple extraction - in practice, this would be more sophisticated
    const mentions: string[] = [];
    
    // Extract capitalized terms that might be concepts
    const conceptRegex = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g;
    const matches = content.match(conceptRegex) || [];
    
    mentions.push(...matches.filter(match => match.length > 3));
    
    return [...new Set(mentions)]; // Remove duplicates
  }

  private findNodeByTitle(title: string): ContentNode | null {
    for (const node of this.nodes.values()) {
      if (node.title.toLowerCase().includes(title.toLowerCase())) {
        return node;
      }
    }
    return null;
  }

  private findNodeByTag(tag: string): ContentNode | null {
    for (const node of this.nodes.values()) {
      if (node.metadata.tags.some(t => t.toLowerCase() === tag.toLowerCase())) {
        return node;
      }
    }
    return null;
  }

  private generateMetadataReferences(node: ContentNode): CrossReference[] {
    const refs: CrossReference[] = [];

    // Find nodes with similar metadata
    for (const [id, otherNode] of this.nodes.entries()) {
      if (id === node.id) continue;

      const sharedTags = node.metadata.tags.filter(tag => 
        otherNode.metadata.tags.includes(tag)
      );

      if (sharedTags.length >= 2) { // At least 2 shared tags
        refs.push({
          id: `metadata-${node.id}-${id}`,
          sourceId: node.id,
          targetId: id,
          type: 'related',
          strength: sharedTags.length / Math.max(node.metadata.tags.length, 1),
          bidirectional: false,
          automatic: true,
          validated: false,
          lastValidated: new Date(),
          context: `Shared tags: ${sharedTags.join(', ')}`
        });
      }
    }

    return refs;
  }

  private updateHierarchies(): void {
    // Rebuild all hierarchies when nodes change
    for (const [rootId] of this.hierarchies.entries()) {
      this.buildHierarchy(rootId);
    }
  }

  private buildHierarchyRecursive(
    node: ContentNode, 
    hierarchy: ContentHierarchy, 
    depth: number
  ): void {
    hierarchy.nodes.set(node.id, node);
    hierarchy.depth = Math.max(hierarchy.depth, depth);

    // Add node's references to hierarchy
    const refs = this.references.get(node.id) || [];
    hierarchy.relationships.set(node.id, refs);

    // Process children
    for (const childId of node.children) {
      const child = this.nodes.get(childId);
      if (child) {
        this.buildHierarchyRecursive(child, hierarchy, depth + 1);
      }
    }
  }

  private generateBreadcrumbs(hierarchy: ContentHierarchy): void {
    for (const [nodeId, node] of hierarchy.nodes.entries()) {
      const breadcrumbs = this.buildParentChain(nodeId);
      hierarchy.breadcrumbs.set(nodeId, breadcrumbs);
    }
  }

  private buildParentChain(nodeId: string): ContentNode[] {
    const chain: ContentNode[] = [];
    let currentId: string | undefined = nodeId;

    while (currentId) {
      const node = this.nodes.get(currentId);
      if (!node) break;

      chain.unshift(node);
      currentId = node.parent;
    }

    return chain;
  }

  private buildNavigationTree(node: ContentNode, hierarchy: ContentHierarchy): any {
    return {
      id: node.id,
      title: node.title,
      path: node.path,
      type: node.type,
      level: node.level,
      children: node.children.map(childId => {
        const child = hierarchy.nodes.get(childId);
        return child ? this.buildNavigationTree(child, hierarchy) : null;
      }).filter(Boolean)
    };
  }
}

// Export singleton instance
export const crossReferenceManager = new CrossReferenceManager();
export default crossReferenceManager;