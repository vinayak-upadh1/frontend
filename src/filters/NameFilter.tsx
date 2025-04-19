import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NameFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default NameFilter;
