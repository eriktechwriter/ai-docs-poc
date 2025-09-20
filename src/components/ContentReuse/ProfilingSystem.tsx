/**
 * Profiling System for Conditional Content
 * 
 * Task 6.2: Implement conditional content and profiling
 * - Create profiling system for audience-based content display
 * - Build conditional rendering components for product versions and user roles
 * - Implement content variation management for different contexts
 * - Create testing system for profile-based content validation
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Profile definitions
export interface UserProfile {
  id: string;
  name: string;
  description: string;
  attributes: Record<string, any>;
  roles: string[];
  permissions: string[];
  productVersions: string[];
  audience: 'beginner' | 'intermediate' | 'advanced' | 'developer' | 'admin';
  platform: string[];
  language: string;
  region: string;
}

export interface ProfileCondition {
  type: 'attribute' | 'role' | 'permission' | 'version' | 'audience' | 'platform' | 'custom';
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'in' | 'not_in' | 'greater_than' | 'less_than' | 'matches';
  key: string;
  value: any;
  values?: any[];
}

export interface ProfileRule {
  id: string;
  name: string;
  description: string;
  conditions: ProfileCondition[];
  logic: 'AND' | 'OR';
  priority: number;
  active: boolean;
}

export interface ContentVariation {
  id: string;
  name: string;
  description: string;
  profileRules: string[];
  content: ReactNode;
  fallback?: ReactNode;
  metadata?: Record<string, any>;
}

// Context for profile management
interface ProfileContextType {
  currentProfile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;
  evaluateCondition: (condition: ProfileCondition) => boolean;
  evaluateRule: (rule: ProfileRule) => boolean;
  getMatchingVariations: (variations: ContentVariation[]) => ContentVariation[];
  profileRules: ProfileRule[];
  addRule: (rule: ProfileRule) => void;
  removeRule: (ruleId: string) => void;
  updateRule: (ruleId: string, updates: Partial<ProfileRule>) => void;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

// Profile Provider Component
interface ProfileProviderProps {
  initialProfile?: UserProfile;
  rules?: ProfileRule[];
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  initialProfile,
  rules = [],
  children
}) => {
  const [currentProfile, setCurrentProfile] = useState<UserProfile | null>(initialProfile || null);
  const [profileRules, setProfileRules] = useState<ProfileRule[]>(rules);

  const setProfile = (profile: UserProfile) => {
    setCurrentProfile(profile);
  };

  const evaluateCondition = (condition: ProfileCondition): boolean => {
    if (!currentProfile) return false;

    let actualValue: any;

    switch (condition.type) {
      case 'attribute':
        actualValue = currentProfile.attributes[condition.key];
        break;
      case 'role':
        actualValue = currentProfile.roles;
        break;
      case 'permission':
        actualValue = currentProfile.permissions;
        break;
      case 'version':
        actualValue = currentProfile.productVersions;
        break;
      case 'audience':
        actualValue = currentProfile.audience;
        break;
      case 'platform':
        actualValue = currentProfile.platform;
        break;
      case 'custom':
        // Custom evaluation logic
        actualValue = currentProfile.attributes[condition.key];
        break;
      default:
        return false;
    }

    return evaluateOperator(actualValue, condition.operator, condition.value, condition.values);
  };

  const evaluateOperator = (actual: any, operator: string, expected: any, expectedArray?: any[]): boolean => {
    switch (operator) {
      case 'equals':
        return actual === expected;
      case 'not_equals':
        return actual !== expected;
      case 'contains':
        return Array.isArray(actual) ? actual.includes(expected) : String(actual).includes(String(expected));
      case 'not_contains':
        return Array.isArray(actual) ? !actual.includes(expected) : !String(actual).includes(String(expected));
      case 'in':
        return expectedArray ? expectedArray.includes(actual) : false;
      case 'not_in':
        return expectedArray ? !expectedArray.includes(actual) : true;
      case 'greater_than':
        return Number(actual) > Number(expected);
      case 'less_than':
        return Number(actual) < Number(expected);
      case 'matches':
        try {
          const regex = new RegExp(expected);
          return regex.test(String(actual));
        } catch {
          return false;
        }
      default:
        return false;
    }
  };

  const evaluateRule = (rule: ProfileRule): boolean => {
    if (!rule.active || !currentProfile) return false;

    const results = rule.conditions.map(condition => evaluateCondition(condition));

    return rule.logic === 'AND' 
      ? results.every(result => result)
      : results.some(result => result);
  };

  const getMatchingVariations = (variations: ContentVariation[]): ContentVariation[] => {
    return variations.filter(variation => {
      return variation.profileRules.some(ruleId => {
        const rule = profileRules.find(r => r.id === ruleId);
        return rule ? evaluateRule(rule) : false;
      });
    }).sort((a, b) => {
      // Sort by highest priority rule
      const aMaxPriority = Math.max(...a.profileRules.map(ruleId => {
        const rule = profileRules.find(r => r.id === ruleId);
        return rule ? rule.priority : 0;
      }));
      const bMaxPriority = Math.max(...b.profileRules.map(ruleId => {
        const rule = profileRules.find(r => r.id === ruleId);
        return rule ? rule.priority : 0;
      }));
      return bMaxPriority - aMaxPriority;
    });
  };

  const addRule = (rule: ProfileRule) => {
    setProfileRules(prev => [...prev, rule]);
  };

  const removeRule = (ruleId: string) => {
    setProfileRules(prev => prev.filter(rule => rule.id !== ruleId));
  };

  const updateRule = (ruleId: string, updates: Partial<ProfileRule>) => {
    setProfileRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, ...updates } : rule
    ));
  };

  return (
    <ProfileContext.Provider value={{
      currentProfile,
      setProfile,
      evaluateCondition,
      evaluateRule,
      getMatchingVariations,
      profileRules,
      addRule,
      removeRule,
      updateRule
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook for using profile context
export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

// Conditional Content Component
interface ConditionalContentProps {
  conditions?: ProfileCondition[];
  rule?: string; // Rule ID
  logic?: 'AND' | 'OR';
  children: ReactNode;
  fallback?: ReactNode;
  showDebug?: boolean;
}

export const ConditionalContent: React.FC<ConditionalContentProps> = ({
  conditions = [],
  rule,
  logic = 'AND',
  children,
  fallback = null,
  showDebug = false
}) => {
  const { evaluateCondition, evaluateRule, profileRules, currentProfile } = useProfile();

  const shouldRender = (): boolean => {
    // If rule ID is provided, use that
    if (rule) {
      const profileRule = profileRules.find(r => r.id === rule);
      return profileRule ? evaluateRule(profileRule) : false;
    }

    // Otherwise evaluate conditions directly
    if (conditions.length === 0) return true;

    const results = conditions.map(condition => evaluateCondition(condition));
    return logic === 'AND' 
      ? results.every(result => result)
      : results.some(result => result);
  };

  const isVisible = shouldRender();

  if (showDebug) {
    return (
      <div className="conditional-content-debug">
        <div className="debug-info">
          <strong>Conditional Content Debug:</strong>
          <ul>
            <li>Profile: {currentProfile?.name || 'None'}</li>
            <li>Rule: {rule || 'Inline conditions'}</li>
            <li>Logic: {logic}</li>
            <li>Result: {isVisible ? '✅ Visible' : '❌ Hidden'}</li>
            {conditions.length > 0 && (
              <li>
                Conditions:
                <ul>
                  {conditions.map((condition, index) => (
                    <li key={index}>
                      {condition.key} {condition.operator} {String(condition.value)} = {evaluateCondition(condition) ? '✅' : '❌'}
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
        <div className="debug-content">
          {isVisible ? children : fallback}
        </div>
      </div>
    );
  }

  return <>{isVisible ? children : fallback}</>;
};

// Content Variation Component
interface ContentVariationProps {
  variations: ContentVariation[];
  defaultContent?: ReactNode;
  showDebug?: boolean;
}

export const ContentVariation: React.FC<ContentVariationProps> = ({
  variations,
  defaultContent = null,
  showDebug = false
}) => {
  const { getMatchingVariations, currentProfile } = useProfile();

  const matchingVariations = getMatchingVariations(variations);
  const selectedVariation = matchingVariations[0]; // Highest priority

  if (showDebug) {
    return (
      <div className="content-variation-debug">
        <div className="debug-info">
          <strong>Content Variation Debug:</strong>
          <ul>
            <li>Profile: {currentProfile?.name || 'None'}</li>
            <li>Total Variations: {variations.length}</li>
            <li>Matching Variations: {matchingVariations.length}</li>
            <li>Selected: {selectedVariation?.name || 'Default'}</li>
          </ul>
          {matchingVariations.length > 0 && (
            <details>
              <summary>Matching Variations</summary>
              <ul>
                {matchingVariations.map(variation => (
                  <li key={variation.id}>
                    {variation.name} (Rules: {variation.profileRules.join(', ')})
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
        <div className="debug-content">
          {selectedVariation ? selectedVariation.content : defaultContent}
        </div>
      </div>
    );
  }

  return <>{selectedVariation ? selectedVariation.content : defaultContent}</>;
};

// Profile Selector Component
interface ProfileSelectorProps {
  profiles: UserProfile[];
  onProfileChange?: (profile: UserProfile) => void;
  showDetails?: boolean;
}

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  profiles,
  onProfileChange,
  showDetails = false
}) => {
  const { currentProfile, setProfile } = useProfile();

  const handleProfileChange = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    if (profile) {
      setProfile(profile);
      onProfileChange?.(profile);
    }
  };

  return (
    <div className="profile-selector">
      <div className="selector-header">
        <label htmlFor="profile-select">Current Profile:</label>
        <select
          id="profile-select"
          value={currentProfile?.id || ''}
          onChange={(e) => handleProfileChange(e.target.value)}
        >
          <option value="">No Profile Selected</option>
          {profiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </select>
      </div>

      {showDetails && currentProfile && (
        <div className="profile-details">
          <h4>Profile Details</h4>
          <div className="profile-info">
            <div><strong>Name:</strong> {currentProfile.name}</div>
            <div><strong>Description:</strong> {currentProfile.description}</div>
            <div><strong>Audience:</strong> {currentProfile.audience}</div>
            <div><strong>Roles:</strong> {currentProfile.roles.join(', ')}</div>
            <div><strong>Platform:</strong> {currentProfile.platform.join(', ')}</div>
            <div><strong>Product Versions:</strong> {currentProfile.productVersions.join(', ')}</div>
            <div><strong>Language:</strong> {currentProfile.language}</div>
            <div><strong>Region:</strong> {currentProfile.region}</div>
            
            {Object.keys(currentProfile.attributes).length > 0 && (
              <details>
                <summary>Custom Attributes</summary>
                <div className="attributes">
                  {Object.entries(currentProfile.attributes).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {String(value)}
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Profile Testing Component
interface ProfileTestingProps {
  profiles: UserProfile[];
  rules: ProfileRule[];
  testContent: ReactNode;
}

export const ProfileTesting: React.FC<ProfileTestingProps> = ({
  profiles,
  rules,
  testContent
}) => {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (selectedProfile) {
      const results: Record<string, boolean> = {};
      rules.forEach(rule => {
        // This would need the profile context to evaluate properly
        results[rule.id] = false; // Placeholder
      });
      setTestResults(results);
    }
  }, [selectedProfile, rules]);

  return (
    <div className="profile-testing">
      <h3>Profile Testing</h3>
      
      <div className="test-controls">
        <label>Test Profile:</label>
        <select
          value={selectedProfile?.id || ''}
          onChange={(e) => {
            const profile = profiles.find(p => p.id === e.target.value);
            setSelectedProfile(profile || null);
          }}
        >
          <option value="">Select a profile to test</option>
          {profiles.map(profile => (
            <option key={profile.id} value={profile.id}>
              {profile.name}
            </option>
          ))}
        </select>
      </div>

      {selectedProfile && (
        <ProfileProvider initialProfile={selectedProfile} rules={rules}>
          <div className="test-results">
            <h4>Rule Evaluation Results</h4>
            <table className="results-table">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Description</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {rules.map(rule => (
                  <tr key={rule.id}>
                    <td>{rule.name}</td>
                    <td>{rule.description}</td>
                    <td>
                      <RuleEvaluator rule={rule} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="test-content">
            <h4>Content Preview</h4>
            <div className="content-preview">
              {testContent}
            </div>
          </div>
        </ProfileProvider>
      )}
    </div>
  );
};

// Helper component for rule evaluation in testing
const RuleEvaluator: React.FC<{ rule: ProfileRule }> = ({ rule }) => {
  const { evaluateRule } = useProfile();
  const result = evaluateRule(rule);
  
  return (
    <span className={`rule-result ${result ? 'pass' : 'fail'}`}>
      {result ? '✅ Pass' : '❌ Fail'}
    </span>
  );
};

// Predefined profiles for common use cases
export const createDefaultProfiles = (): UserProfile[] => [
  {
    id: 'admin',
    name: 'System Administrator',
    description: 'Full system access with administrative privileges',
    attributes: { experience: 'expert', department: 'IT' },
    roles: ['admin', 'user'],
    permissions: ['read', 'write', 'delete', 'configure', 'manage_users'],
    productVersions: ['2023.1', '2023.2', '2024.1'],
    audience: 'admin',
    platform: ['Windows', 'Linux', 'macOS'],
    language: 'en',
    region: 'US'
  },
  {
    id: 'developer',
    name: 'Software Developer',
    description: 'Developer with API access and integration capabilities',
    attributes: { experience: 'advanced', department: 'Engineering' },
    roles: ['developer', 'user'],
    permissions: ['read', 'write', 'api_access', 'debug'],
    productVersions: ['2024.1'],
    audience: 'developer',
    platform: ['Windows', 'Linux', 'macOS'],
    language: 'en',
    region: 'US'
  },
  {
    id: 'end-user',
    name: 'End User',
    description: 'Standard user with basic access',
    attributes: { experience: 'beginner', department: 'Sales' },
    roles: ['user'],
    permissions: ['read'],
    productVersions: ['2024.1'],
    audience: 'beginner',
    platform: ['Windows'],
    language: 'en',
    region: 'US'
  },
  {
    id: 'power-user',
    name: 'Power User',
    description: 'Experienced user with advanced features access',
    attributes: { experience: 'intermediate', department: 'Marketing' },
    roles: ['power_user', 'user'],
    permissions: ['read', 'write', 'configure'],
    productVersions: ['2023.2', '2024.1'],
    audience: 'intermediate',
    platform: ['Windows', 'macOS'],
    language: 'en',
    region: 'US'
  }
];

// Predefined rules for common scenarios
export const createDefaultRules = (): ProfileRule[] => [
  {
    id: 'admin-only',
    name: 'Admin Only',
    description: 'Content visible only to administrators',
    conditions: [
      { type: 'role', operator: 'contains', key: 'roles', value: 'admin' }
    ],
    logic: 'AND',
    priority: 100,
    active: true
  },
  {
    id: 'developer-content',
    name: 'Developer Content',
    description: 'Technical content for developers',
    conditions: [
      { type: 'audience', operator: 'equals', key: 'audience', value: 'developer' }
    ],
    logic: 'AND',
    priority: 80,
    active: true
  },
  {
    id: 'beginner-friendly',
    name: 'Beginner Friendly',
    description: 'Simplified content for beginners',
    conditions: [
      { type: 'audience', operator: 'in', key: 'audience', value: 'beginner', values: ['beginner', 'intermediate'] }
    ],
    logic: 'AND',
    priority: 60,
    active: true
  },
  {
    id: 'windows-specific',
    name: 'Windows Specific',
    description: 'Content specific to Windows platform',
    conditions: [
      { type: 'platform', operator: 'contains', key: 'platform', value: 'Windows' }
    ],
    logic: 'AND',
    priority: 40,
    active: true
  },
  {
    id: 'latest-version',
    name: 'Latest Version',
    description: 'Content for the latest product version',
    conditions: [
      { type: 'version', operator: 'contains', key: 'productVersions', value: '2024.1' }
    ],
    logic: 'AND',
    priority: 20,
    active: true
  }
];