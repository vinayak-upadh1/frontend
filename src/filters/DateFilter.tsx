import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const DateFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="date"
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DateFilter;
