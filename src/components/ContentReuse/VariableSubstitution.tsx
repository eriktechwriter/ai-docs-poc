/**
 * Variable Substitution Component
 * 
 * Handles dynamic variable substitution in content
 */

import React, { useState, useEffect, useContext, createContext } from 'react';

// Context for variable values
interface VariableContextType {
  variables: Record<string, any>;
  setVariable: (name: string, value: any) => void;
  getVariable: (name: string, defaultValue?: any) => any;
}

const VariableContext = createContext<VariableContextType>({
  variables: {},
  setVariable: () => {},
  getVariable: () => undefined
});

// Provider component
interface VariableProviderProps {
  variables?: Record<string, any>;
  children: React.ReactNode;
}

export const VariableProvider: React.FC<VariableProviderProps> = ({
  variables: initialVariables = {},
  children
}) => {
  const [variables, setVariables] = useState<Record<string, any>>(initialVariables);

  const setVariable = (name: string, value: any) => {
    setVariables(prev => ({ ...prev, [name]: value }));
  };

  const getVariable = (name: string, defaultValue?: any) => {
    return variables[name] ?? defaultValue;
  };

  useEffect(() => {
    setVariables(initialVariables);
  }, [initialVariables]);

  return (
    <VariableContext.Provider value={{ variables, setVariable, getVariable }}>
      {children}
    </VariableContext.Provider>
  );
};

// Hook for using variables
export const useVariables = () => {
  const context = useContext(VariableContext);
  if (!context) {
    throw new Error('useVariables must be used within a VariableProvider');
  }
  return context;
};

// Variable display component
interface VariableProps {
  name: string;
  defaultValue?: any;
  format?: 'string' | 'number' | 'currency' | 'date' | 'boolean';
  className?: string;
}

export const Variable: React.FC<VariableProps> = ({
  name,
  defaultValue,
  format = 'string',
  className = ''
}) => {
  const { getVariable } = useVariables();
  const value = getVariable(name, defaultValue);

  const formatValue = (val: any, fmt: string): string => {
    if (val === undefined || val === null) {
      return '';
    }

    switch (fmt) {
      case 'number':
        return Number(val).toLocaleString();
      
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(Number(val));
      
      case 'date':
        return new Date(val).toLocaleDateString();
      
      case 'boolean':
        return val ? 'Yes' : 'No';
      
      default:
        return String(val);
    }
  };

  if (value === undefined && defaultValue === undefined) {
    return (
      <span className={`variable-missing ${className}`} title={`Variable '${name}' not found`}>
        {`{{${name}}}`}
      </span>
    );
  }

  return (
    <span className={`variable-value ${className}`} title={`Variable: ${name}`}>
      {formatValue(value, format)}
    </span>
  );
};

// Conditional content component
interface ConditionalProps {
  condition: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const Conditional: React.FC<ConditionalProps> = ({
  condition,
  children,
  fallback = null
}) => {
  const { variables } = useVariables();

  const evaluateCondition = (cond: string): boolean => {
    try {
      // Simple condition evaluation
      // Supports: variableName, !variableName, variableName === 'value', etc.
      
      // Handle negation
      if (cond.startsWith('!')) {
        const varName = cond.slice(1).trim();
        return !variables[varName];
      }

      // Handle equality check
      if (cond.includes('===')) {
        const [varName, expectedValue] = cond.split('===').map(s => s.trim());
        const actualValue = variables[varName];
        const expected = expectedValue.replace(/['"]/g, ''); // Remove quotes
        return String(actualValue) === expected;
      }

      // Handle inequality check
      if (cond.includes('!==')) {
        const [varName, expectedValue] = cond.split('!==').map(s => s.trim());
        const actualValue = variables[varName];
        const expected = expectedValue.replace(/['"]/g, ''); // Remove quotes
        return String(actualValue) !== expected;
      }

      // Handle simple existence check
      return Boolean(variables[cond.trim()]);
    } catch (error) {
      console.warn(`Failed to evaluate condition: ${cond}`, error);
      return false;
    }
  };

  const shouldRender = evaluateCondition(condition);

  return <>{shouldRender ? children : fallback}</>;
};

// Variable setter component (for dynamic updates)
interface VariableSetterProps {
  name: string;
  value: any;
  children?: React.ReactNode;
}

export const VariableSetter: React.FC<VariableSetterProps> = ({
  name,
  value,
  children
}) => {
  const { setVariable } = useVariables();

  useEffect(() => {
    setVariable(name, value);
  }, [name, value, setVariable]);

  return <>{children}</>;
};

// Variable list component (for debugging/display)
interface VariableListProps {
  filter?: string[];
  exclude?: string[];
  className?: string;
}

export const VariableList: React.FC<VariableListProps> = ({
  filter,
  exclude = [],
  className = ''
}) => {
  const { variables } = useVariables();

  const filteredVariables = Object.entries(variables).filter(([name]) => {
    if (exclude.includes(name)) return false;
    if (filter && !filter.includes(name)) return false;
    return true;
  });

  if (filteredVariables.length === 0) {
    return (
      <div className={`variable-list empty ${className}`}>
        <p>No variables available</p>
      </div>
    );
  }

  return (
    <div className={`variable-list ${className}`}>
      <h4>Variables</h4>
      <table className="variables-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredVariables.map(([name, value]) => (
            <tr key={name}>
              <td>
                <code>{name}</code>
              </td>
              <td>
                <span className="variable-display-value">
                  {typeof value === 'object' 
                    ? JSON.stringify(value, null, 2)
                    : String(value)
                  }
                </span>
              </td>
              <td>
                <span className="variable-type">
                  {Array.isArray(value) ? 'array' : typeof value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Text substitution utility
export const substituteVariables = (
  text: string, 
  variables: Record<string, any>
): string => {
  return text.replace(/\{\{(\w+)\}\}/g, (match, variableName) => {
    const value = variables[variableName];
    return value !== undefined ? String(value) : match;
  });
};

// Template component for complex substitutions
interface TemplateProps {
  template: string;
  variables?: Record<string, any>;
  className?: string;
}

export const Template: React.FC<TemplateProps> = ({
  template,
  variables: templateVariables = {},
  className = ''
}) => {
  const { variables: contextVariables } = useVariables();
  
  // Merge context variables with template-specific variables
  const allVariables = { ...contextVariables, ...templateVariables };
  
  const processedContent = substituteVariables(template, allVariables);

  return (
    <div className={`template-content ${className}`}>
      {processedContent}
    </div>
  );
};