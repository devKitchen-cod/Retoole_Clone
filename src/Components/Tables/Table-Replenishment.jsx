import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import { rows } from "../mockData/mock-data-table-replenishment";

export function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



const header = [
  "Item",
  "Item Cost",
  "Case Pack Qty",
  "Target Mark",
  "In Market Qty",
  "Recommended Qty",
  "Recommended Cost",
  "Budgeted Cost",
  "Requested Qty",
  "Order Cost",
  "Order Budgeted",
];



export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgb(219, 219, 219)",
      //   backgroundColor: '#1A2027',
      color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      //   backgroundColor:'green'
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "white",

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {header.map((item) => (
              <StyledTableCell sx={{ fontSize: "12px" }}>
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Item}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {/* <Input placeholder={row.ItemCost} variant='plain'/> */}
                {row.ItemCost}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.CasePackQty}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.TargetMarktal}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.InMarketQty}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.RecommendedCost}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.RecommendedQty}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.BudgetedCost}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.RequestedQty}
              </StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {row.OrderCost}
              </StyledTableCell>
              <StyledTableCell
                sx={{ backgroundColor: "rgb(153, 217, 136)" }}
                align="right"
                component="th"
                scope="row"
              >
                {row.OrderBudgeted}
              </StyledTableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={12}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
