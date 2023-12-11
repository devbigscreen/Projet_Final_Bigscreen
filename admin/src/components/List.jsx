/* eslint-disable react/prop-types */
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

export default function List(props) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N°</StyledTableCell>
            <StyledTableCell align="right">Question</StyledTableCell>
            <StyledTableCell align="right">{ props.view === 'questions' ? 'Type' : 'Answers' }</StyledTableCell>          
          </TableRow>
        </TableHead>
        <TableBody>
          {props.questionsDatas.map((question, index)=>(
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {question.question_id}
              </StyledTableCell>
              <StyledTableCell align="right">{ question.body }</StyledTableCell>
              {props.view === "questions" ? 
                <StyledTableCell align="right">{ question.type }</StyledTableCell>
                :
                <StyledTableCell align="right">{ props.userDatas[index].answers }</StyledTableCell>
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}