import React from 'react';
import { flexRender, Table, Row } from '@tanstack/react-table';
import { Virtualizer } from '@tanstack/react-virtual';

interface TableBodyProps {
  table: Table<any>;
  virtualizer: Virtualizer<any, any>;
  rows: Row<any>[];
}


type Book = {
  author: string;
  img: string;
  title: string;
  genre: string;
  isbn: number;
  pages: number;
  isPhysical: boolean;
  isEbook: boolean;
  isAudio: boolean;
  notes: string;
  location: string;
  language: string;
}

const TableBody: React.FC<TableBodyProps> = ({ table, virtualizer, rows }) => {
  return (
    <tbody>
      {virtualizer.getVirtualItems().map((virtualRow, index) => {
        const row = rows[virtualRow.index] as Row<Book>;
        return (
          <tr
            key={row.id}
            className="table_row text-white hover:bg-gray-700"
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td className="px-4" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
