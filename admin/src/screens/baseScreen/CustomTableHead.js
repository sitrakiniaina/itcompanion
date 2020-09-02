import React from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
    head: {
      fontWeight: 'bold'
    }
}))(TableCell);

function CustomTableHead({ header }) {
  const domElement = []; //remove cache
  for (let i=0;i<header.length;i++) {
    domElement.push(<StyledTableCell align={header[i].align} key={i}>{header[i].libelle}</StyledTableCell>)
  }
  return (
      <ThemeProvider>
          {domElement}
      </ThemeProvider>
  )
}

export default CustomTableHead;
