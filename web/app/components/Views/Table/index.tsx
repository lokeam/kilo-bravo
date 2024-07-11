import React, { useState, useMemo, useRef } from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingFn,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { allData } from '../../../mockData/mock';
import TableHeader from '../../Table/TableHeader';
import TableBody from '../../Table/TableBody';
import TablePagination from '../../Table/TablePagination';
import ColumnVisibilityControls from '../../Table/ColumnVisibilityControls';

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

const customSort: SortingFn<Book> = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId)?.toString().toLowerCase() ?? '';
  const b = rowB.getValue(columnId)?.toString().toLowerCase() ?? '';
  return a.localeCompare(b);
};

const TableView: React.FC = () => {
  const [data, _setData] = useState(() => [...allData]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 11,
  });

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    title: true,
    author: true,
    genre: true,
    isbn: true,
    language: true,
    pages: true,
  });

  const columns = useMemo<ColumnDef<Book>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => info.getValue(),
        sortingFn: customSort,
      },
      {
        accessorKey: 'author',
        header: 'Author',
        cell: (info) => info.getValue(),
        sortingFn: customSort,
      },
      {
        accessorKey: 'genre',
        header: 'Genre',
        cell: (info) => info.getValue(),
        sortingFn: customSort,
      },
      {
        accessorKey: 'isbn',
        header: 'ISBN',
        cell: (info) => info.getValue(),
        sortingFn: 'basic',
      },
      {
        accessorKey: 'language',
        header: 'Language',
        cell: (info) => info.getValue(),
        sortingFn: customSort,
      },
      {
        accessorKey: 'pages',
        header: 'Pages',
        cell: (info) => info.getValue(),
        sortingFn: 'basic',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      size: 200,
      minSize: 120,
      maxSize: 700,
    },
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    state: {
      columnVisibility,
      pagination,
    },
  });

  const { rows } = table.getRowModel();
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 63,
    overscan: 20,
  });

  return (
    <main className="p-4 h-auto pt-20">
      <h1 className="text-white">Table view</h1>
      <ColumnVisibilityControls columnVisibility={columnVisibility} setColumnVisibility={setColumnVisibility} />
      <div ref={parentRef} className="table_wrapper flex flex-col overflow-hidden rounded whitespace-normal relative cursor-default">
        <div className="table_virtualizer_wrapper" style={{ height: `${virtualizer.getTotalSize()}px` }}>
          <table className="table_main relative rounded w-full">
            <TableHeader table={table} />
            <TableBody table={table} virtualizer={virtualizer} rows={rows} />
          </table>
        </div>
      </div>
      <TablePagination table={table} />
    </main>
  );
};

export default TableView;
