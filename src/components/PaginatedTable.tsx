import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { feeder } from "../test/data";
import { TablePagination } from "@mui/material";


// type PaginatedTableState = {
//   rowsPerPage : number,
//   page : number
// }

class PaginatedTable extends React.Component {

  constructor(props : any){
    super(props);
    
  }

  state = {
    rowsPerPage : 5,
    page : 2,
  }

  render(): React.ReactNode {

    const rows = feeder(this.state.rowsPerPage, this.state.page).data;

    return (
      <Paper>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Genre</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Release Year</TableCell>
                <TableCell align="right">Streaming On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.genre}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  <TableCell align="right">{row.yearOfRelease}</TableCell>
                  <TableCell align="right">{row.streamingOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5,10,15,20,25]}
          component="div"
          count={rows.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onPageChange={(event: unknown, newPage: number) => {this.setState({page : newPage})}}
          onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => {this.setState({rowsPerPage : event.target.value})}}
        />
      </Paper>
    );
  }
}

export default PaginatedTable;
