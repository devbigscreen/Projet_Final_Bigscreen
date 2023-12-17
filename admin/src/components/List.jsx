/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/AnswersList.css";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function List(props) {
  const shouldRender =
    (props.view === "questions"
      ? props.questionsDatas
      : props.userDatas && props.questionsDatas) !== null;

  return (
    <TableContainer component={Paper}>
      {shouldRender && (
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>N°</StyledTableCell>
              <StyledTableCell align="center">Question</StyledTableCell>
              <StyledTableCell align="center">
                {props.view === "questions" ? "Type" : "Answers"}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.questionsDatas.map((question, index) => (
              <StyledTableRow key={question.question_id}>
                <StyledTableCell component="th" scope="row">
                  {question.question_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {question.body}
                </StyledTableCell>
                {props.view === "questions" ? (
                  <StyledTableCell align="center">
                    {question.type}
                  </StyledTableCell>
                ) : (
                  <StyledTableCell align="center">
                    {props.userDatas[index] && props.userDatas[index].answers}
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
