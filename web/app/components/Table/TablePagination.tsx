import React from 'react';
import { Table } from '@tanstack/react-table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface TablePaginationProps {
  table: Table<any>;
}

const TablePagination: React.FC<TablePaginationProps> = ({ table }) => {
  return (
    <div className="table__footer flex justify-end items-center">
      <label className="text-sm text-gray-400" htmlFor="table__row_adjust">Rows per page</label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-14 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2 mr-4"
        id="table__row_adjust"
        name="Select number of rows"
        onChange={event => table.setPageSize(Number(event.target.value))}
        value={table.getState().pagination.pageSize}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="flex items-center justify-center text-hepatica hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <MdOutlineKeyboardDoubleArrowLeft size={22} />
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-hepatica hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdOutlineKeyboardArrowLeft size={22} />
      </button>
      <div className="flex content-center gap-1 text-sm text-gray-400 text-left mx-2">
        Page
        <span className="text-white">{table.getState().pagination.pageIndex + 1}</span>
        of{' '}
        <span className="text-white">{table.getPageCount().toLocaleString()}</span>
      </div>
      <button
        type="button"
        className="flex items-center justify-center text-hepatica hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <MdOutlineKeyboardArrowRight size={22} />
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-hepatica hover:bg-gray-700 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg p-3 focus:outline-none dark:focus:ring-primary-800 mr-1"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <MdKeyboardDoubleArrowRight size={22} />
      </button>
    </div>
  );
};

export default TablePagination;
