import React, { useEffect, useState } from 'react';
import NameFilter from '../filters/NameFilter';
import DateRangeFilter from '../filters/DateFilter';
import FileTypeFilter from '../filters/FileTypeFilter';

const LOCAL_STORAGE_KEY = 'fileFilters';

type Props = {
  onFilterChange: (filters: Record<string, string>) => void;
};

export const FiltersContainer: React.FC<Props> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filters));
      onFilterChange(filters);
    }, 500);
    return () => clearTimeout(debounce);
  }, [filters]);

  const resetFilters = () => {
    setFilters({});
    onFilterChange({});
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      {/* Name Filter */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700 mb-1">Search Name</label>
        <NameFilter
          value={filters.filename || ''}
          onChange={(v) => setFilters(f => ({ ...f, filename: v }))}
        />
      </div>
  
  
      {/* File Type Filter */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700 mb-1">File Type</label>
        <FileTypeFilter
          value={filters.file_type || ''}
          onChange={(v) => setFilters(f => ({ ...f, file_type: v }))}
        />
      </div>
  
      {/* Date Range Filter */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700 mb-1">Date Range</label>
        <div className="flex gap-2">
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={filters.uploaded_from || ''}
            onChange={(e) =>
              setFilters(f => ({ ...f, uploaded_from: e.target.value }))
            }
          />
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={filters.uploaded_to || ''}
            onChange={(e) =>
              setFilters(f => ({ ...f, uploaded_to: e.target.value }))
            }
          />
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex items-end justify-start lg:justify-end">
        <button
          className="w-full sm:w-auto px-4 py-2 bg-gray-100 border text-sm rounded-md text-gray-700 hover:bg-gray-200 transition"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  </div>
  
  );
};

