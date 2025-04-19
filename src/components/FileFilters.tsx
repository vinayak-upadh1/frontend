import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NameFilter from "../filters/NameFilter";
import DateFilter from "../filters/DateFilter";
import FileTypeFilter from "../filters/FileTypeFilter";

export type Filters = {
  name: string;
  date: string;
  fileType: string;
};

const FiltersContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<Filters>({
    name: searchParams.get("name") || "",
    date: searchParams.get("date") || "",
    fileType: searchParams.get("fileType") || "",
  });

  const updateQueryParams = (key: keyof Filters, value: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    if (value) {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }
    setSearchParams(updatedParams);
  };

  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    updateQueryParams(key, value);
  };

  return (
    <div className="flex gap-4 flex-wrap bg-white p-4 rounded shadow-md">
      <NameFilter value={filters.name} onChange={(val) => handleChange("name", val)} />
      <DateFilter value={filters.date} onChange={(val) => handleChange("date", val)} />
      <FileTypeFilter value={filters.fileType} onChange={(val) => handleChange("fileType", val)} />
    </div>
  );
};

export default FiltersContainer;
