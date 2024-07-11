import React from 'react';
import { VisibilityState } from '@tanstack/react-table';

interface ColumnVisibilityControlsProps {
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
}

const ColumnVisibilityControls: React.FC<ColumnVisibilityControlsProps> = ({ columnVisibility, setColumnVisibility }) => {
  return (
    <div className="table_col_visibility_controls mt-8 mb-12">
      {Object.keys(columnVisibility).map((key) => (
        <label key={key} className="text-white mr-2">
          <input
            checked={columnVisibility[key]}
            type="checkbox"
            onChange={() =>
              setColumnVisibility((prev) => ({
                ...prev,
                [key]: !prev[key],
              }))
            }
          />
          {key}
        </label>
      ))}
    </div>
  );
};

export default ColumnVisibilityControls;
