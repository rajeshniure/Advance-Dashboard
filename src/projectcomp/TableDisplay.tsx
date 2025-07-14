import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import theme from '../theme'; 
import TablePagination from './pagination';
import { usePagination } from '../hooks/usePagination';



function TableDisplay({ data, columns }: { data: any[]; columns: any[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const {
    page,
    rowsPerPage,
    paginatedRows,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination(table);


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: theme.palette.customBackgrounds.background }}>
      <TableContainer>
        <Table >
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableCell key={header.id} sx={{ fontSize: '1.5rem',fontWeight: 'bold' }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {paginatedRows.map((row,index) => (
              <TableRow 
                 key={row.id}
                 sx={{
                  backgroundColor: index % 2 === 0 ? theme.palette.background.default: theme.palette.customBackgrounds.neutral,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: theme.palette.customBackgrounds.background2,
                  },
                 }}
                 >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} sx={{ fontSize: '1.2rem' }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableDisplay;