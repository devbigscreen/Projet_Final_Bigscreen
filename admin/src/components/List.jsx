import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N°</StyledTableCell>
            <StyledTableCell align="right">Question</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>          </TableRow>
        </TableHead>
        <TableBody>

            <StyledTableRow key={1}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">Test ?</StyledTableCell>
              <StyledTableCell align="right">A</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={2}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">Test ?</StyledTableCell>
              <StyledTableCell align="right">A</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={3}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">Test ?</StyledTableCell>
              <StyledTableCell align="right">A</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={4}>
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell align="right">Test ?</StyledTableCell>
              <StyledTableCell align="right">A</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}