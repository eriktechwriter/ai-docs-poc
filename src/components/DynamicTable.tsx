import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

interface TableData {
  [key: string]: any;
}

interface DynamicTableProps {
  source: string;
  filters?: string[];
  sortable?: boolean;
  className?: string;
}

/**
 * Dynamic table component that loads data from YAML sources
 * and provides filtering and sorting capabilities.
 */
export default function DynamicTable({
  source,
  filters = [],
  sortable = true,
  className,
}: DynamicTableProps): JSX.Element {
  const [data, setData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  useEffect(() => {
    // In a real implementation, this would load data from the YAML source
    // For now, we'll use mock data
    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data - in real implementation, this would come from the YAML file
        const mockData = [
          { feature: 'Single Sign-On', product: 'Endpoint Security', supported: 'Yes', version: '2.1' },
          { feature: 'Multi-Factor Auth', product: 'Cloud Security', supported: 'Yes', version: '1.5' },
          { feature: 'API Access', product: 'Network Security', supported: 'No', version: 'N/A' },
        ];
        
        setData(mockData);
      } catch (err) {
        setError('Failed to load table data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [source]);

  const handleSort = (column: string) => {
    if (!sortable) return;
    
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (column: string, value: string) => {
    setFilterValues(prev => ({
      ...prev,
      [column]: value,
    }));
  };

  const filteredAndSortedData = React.useMemo(() => {
    let result = [...data];

    // Apply filters
    Object.entries(filterValues).forEach(([column, value]) => {
      if (value) {
        result = result.filter(row => 
          String(row[column]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply sorting
    if (sortColumn) {
      result.sort((a, b) => {
        const aVal = a[sortColumn];
        const bVal = b[sortColumn];
        
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, filterValues, sortColumn, sortDirection]);

  if (loading) {
    return (
      <div className={clsx('loading-skeleton', className)} style={{ height: '200px' }}>
        Loading table data...
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx('alert alert--danger', className)}>
        {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={clsx('alert alert--info', className)}>
        No data available for this table.
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className={clsx('table-responsive', className)}>
      {filters.length > 0 && (
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {filters.map(column => (
            <div key={column} style={{ display: 'flex', flexDirection: 'column', minWidth: '150px' }}>
              <label htmlFor={`filter-${column}`} style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                Filter by {column}:
              </label>
              <input
                id={`filter-${column}`}
                type="text"
                placeholder={`Filter ${column}...`}
                value={filterValues[column] || ''}
                onChange={(e) => handleFilterChange(column, e.target.value)}
                style={{
                  padding: '0.5rem',
                  border: '1px solid var(--ifm-table-border-color)',
                  borderRadius: '0.25rem',
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                style={{
                  cursor: sortable ? 'pointer' : 'default',
                  userSelect: 'none',
                  position: 'relative',
                }}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
                {sortable && sortColumn === column && (
                  <span style={{ marginLeft: '0.5rem' }}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.map((row, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column}>
                  {String(row[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)' }}>
        Showing {filteredAndSortedData.length} of {data.length} items
        {Object.keys(filterValues).some(key => filterValues[key]) && ' (filtered)'}
      </div>
    </div>
  );
}