
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(i, item, currencyFutures, currencyOptions) {
  return { i, item, currencyFutures, currencyOptions };
}

const rows = [
  createData(1, "Brokerage", "0.03% or ₹ 20/executed order whichever is lower", "₹ 20/executed order"),
  createData(2, "STT/CTT", "No STT", "No STT"),
  createData(3, "Transaction charges", "NSE: 0.00035%\nBSE: 0.00045%", "NSE: 0.0311%\nBSE: 0.001%"),
  createData(4, "GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"),
  createData(5, "SEBI charges", "₹10 / crore", "₹10 / crore"),
  createData(6, "Stamp charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"),
];

export default function CurrencyContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="currency charges table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><b>Currency futures</b></TableCell>
            <TableCell><b>Currency options</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.i}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: row.i % 2 === 0 ? "#f5f5f5" : "white",
              }}
            >
              <TableCell component="th" scope="row" style={{ whiteSpace: "pre-line" }}>
                {row.item}
              </TableCell>
              <TableCell style={{ whiteSpace: "pre-line" }}>{row.currencyFutures}</TableCell>
              <TableCell style={{ whiteSpace: "pre-line" }}>{row.currencyOptions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
