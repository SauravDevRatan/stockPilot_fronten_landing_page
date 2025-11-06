
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(i,item, equityDelivery, equityIntraday, fnoFutures, fnoOptions) {
  return { i,item, equityDelivery, equityIntraday, fnoFutures, fnoOptions };
}

const rows = [
  createData(1,"Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"),
  createData(2,"STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side", "• 0.125% on intrinsic value on options bought & exercised\n• 0.1% on sell side (on premium)"),
  createData(3,"Transaction charges", "NSE: 0.00297%\nBSE: 0.00375%", "NSE: 0.00297%\nBSE: 0.00375%", "NSE: 0.00173%\nBSE: 0", "NSE: 0.03503% (on premium)\nBSE: 0.0325% (on premium)"),
  createData(4,"GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"),
  createData(5,"SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"),
  createData(6,"Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"),
];

export default function EquityContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="brokerage table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><b>Equity delivery</b></TableCell>
            <TableCell><b>Equity intraday</b></TableCell>
            <TableCell><b>F&O - Futures</b></TableCell>
            <TableCell><b>F&O - Options</b></TableCell>
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
                <TableCell style={{ whiteSpace: "pre-line" }}>{row.equityDelivery}</TableCell>
                <TableCell style={{ whiteSpace: "pre-line" }}>{row.equityIntraday}</TableCell>
                <TableCell style={{ whiteSpace: "pre-line" }}>{row.fnoFutures}</TableCell>
                <TableCell style={{ whiteSpace: "pre-line" }}>{row.fnoOptions}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
