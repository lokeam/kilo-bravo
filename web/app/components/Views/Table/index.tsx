import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { allData } from '../../../mockData/mock';

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

interface BookResponse {
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

interface TableViewSettings {
  allBooks: BookResponse[];
}

const TableView: React.FC = () => {
  const [data, _setData] = useState(() => [...allData]);

  // Column Visibility
  const [columnVisibility, setColumnVisibility] = useState({
    title: true,
    author: true,
    genre: true,
    isbn: true,
    language: true,
    pages: true,
    isPhysical: true,
    isEbook: true,
    isAudio: true,
  });

  const columns = useMemo<ColumnDef<Book>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'author',
        header: 'Author',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'genre',
        header: 'Genre',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'isbn',
        header: 'ISBN',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'language',
        header: 'Language',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'pages',
        header: 'Pages',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'isPhysical',
        header: 'Physical',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'isEbook',
        header: 'Ebook',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'isAudio',
        header: 'Audio',
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  });

  const { rows } = table.getRowModel();
  const parentRef = React.useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 63,
    overscan: 20,
  });

  console.log(allData)

  return (
    <main className="p-4 h-auto pt-20">
      <h1 className="text-white">Table view</h1>
      <div className="table_col_visibility_controls">
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
      <div ref={parentRef} className="table_wrapper">
        <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="text-white">
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {virtualizer.getVirtualItems().map((virtualRow, index) => {
                const row = rows[virtualRow.index] as Row<Book>;

                return (
                  <tr
                    key={row.id}
                    className="text-white"
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${
                        virtualRow.start - index * virtualRow.size
                      }px)`,
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default TableView;
