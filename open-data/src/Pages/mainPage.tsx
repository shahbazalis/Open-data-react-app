import Table from "@mui/material/Table";
//import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MainPage() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="30%">Todos</TableCell>
              <TableCell>Description&nbsp;</TableCell>
              <TableCell>Status&nbsp;</TableCell>
              <TableCell>Actions&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {todo.map((row: TodoItemObj) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.status === "Pending" ? (
                  <TableCell component="th" scope="row" width="30%">
                    {row.todo}
                  </TableCell>
                ) : (
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ textDecorationLine: "line-through" }}
                  >
                    {row.todo}
                  </TableCell>
                )}
                <TableCell>{row.description}</TableCell>
                <TableCell onClick={() => handleStatusChange(row)}>
                  {row.status}
                </TableCell>
                <TableCell>
                  <DeleteButton
                    deleteTodoItem={() => handleTodoItemDelete(row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
}
