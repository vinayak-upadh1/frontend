import React from "react";

const fileTypes = ["PDF", "DOCX", "TXT", "Image", "Video"];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const FileTypeFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Types</option>
      {fileTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default FileTypeFilter;
