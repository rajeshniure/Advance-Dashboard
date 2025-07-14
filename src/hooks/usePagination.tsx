import { useState, useMemo } from 'react';
import type{ Table } from '@tanstack/react-table';

export function usePagination<T>(table: Table<T>, initialRowsPerPage = 6) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const paginatedRows = useMemo(() => {
    const start = page * rowsPerPage;
    return table.getRowModel().rows.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage, table]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    paginatedRows,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}
