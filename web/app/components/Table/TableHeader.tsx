import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';

interface TableHeaderProps {
  table: Table<any>;
}

const TableHeader: React.FC<TableHeaderProps> = ({ table }) => {
  return (
    <thead className="table_header sticky top-0 rounded h-12 px-2 w-full">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="relative px-4 text-white text-left py-3 text-sm">
              <div
                className={`table_header_text mr-1 ${
                  header.column.getCanSort() ? `cursor-pointer select-none` : ``
                }`}
                onClick={header.column.getToggleSortingHandler()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    header.column.getToggleSortingHandler();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
