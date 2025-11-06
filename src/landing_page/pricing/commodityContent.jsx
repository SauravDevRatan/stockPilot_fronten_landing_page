import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(i, item, commodityFutures, commodityOptions) {
  return { i, item, commodityFutures, commodityOptions };
}

const rows = [
  createData(
    1,
    "Brokerage",
    "0.03% or Rs. 20/executed order whichever is lower",
    "₹20/executed order"
  ),
  createData(
    2,
    "STT/CTT",
    "0.01% on sell side (Non-Agri)",
    "0.05% on sell side"
  ),
  createData(
    3,
    "Transaction charges",
    "MCX: 0.0021%\nNSE: 0.0001%",
    "MCX: 0.0418%\nNSE: 0.001%"
  ),
  createData(
    4,
    "GST",
    "18% on (brokerage + SEBI charges + transaction charges)",
    "18% on (brokerage + SEBI charges + transaction charges)"
  ),
  createData(
    5,
    "SEBI charges",
    "Agri: ₹1 / crore\nNon-agri: ₹10 / crore",
    "₹10 / crore"
  ),
  createData(
    6,
    "Stamp charges",
    "0.002% or ₹200 / crore on buy side",
    "0.003% or ₹300 / crore on buy side"
  ),
];

export default function CommodityContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="commodity charges table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><b>Commodity Futures</b></TableCell>
            <TableCell><b>Commodity Options</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.i}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: row.i % 2 === 0 ? "#f9f9f9" : "white",
              }}
            >
              <TableCell component="th" scope="row" style={{ whiteSpace: "pre-line", fontWeight: 500 }}>
                {row.item}
              </TableCell>
              <TableCell style={{ whiteSpace: "pre-line" }}>{row.commodityFutures}</TableCell>
              <TableCell style={{ whiteSpace: "pre-line" }}>{row.commodityOptions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
