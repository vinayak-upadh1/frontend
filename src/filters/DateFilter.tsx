import React from "react";

type Props = {
  from: string;
  to: string;
  onChange: (from: string, to: string) => void;
};

const DateRangeFilter: React.FC<Props> = ({ from, to, onChange }) => {
  return (
    <div className="flex space-x-2">
      <input
        type="date"
        className="border p-2 rounded"
        value={from}
        onChange={(e) => onChange(e.target.value, to)}
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={to}
        onChange={(e) => onChange(from, e.target.value)}
      />
    </div>
  );
};

export default DateRangeFilter;
