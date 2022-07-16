import { Container, Pagination, Paper, TableContainer, TextField, Typography } from "@mui/material";
import React, { memo } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";

interface TableProps {}

const CustomTable = memo(({}: TableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#EEBC1D" }}>
            <TableRow>
              <Cell>Coin</Cell>
              <Cell align="right">Price</Cell>
              <Cell align="right">24h change</Cell>
              <Cell align="right">Market Cap</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" style={{ display: "flex", gap: 15 }} scope="row">
                <img
                  src={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
                  alt={"Bitcoin"}
                  height="50"
                  style={{ marginBottom: 10 }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontSize: 22,
                    }}
                  >
                    {"BTC"}
                  </span>
                  <span style={{ color: "darkgrey" }}>{"Bitcoin"}</span>
                </div>
              </TableCell>
              <TableCell align="right">$ 200540</TableCell>
              <TableCell align="right">-0.65%</TableCell>
              <TableCell align="right">$ 200540M</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <CustomPagination
        count={100}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          // setPage(value);
          window.scroll(0, 450);
        }}
      />
    </>
  );
});

export default CustomTable;

const Cell = styled(TableCell)(({ theme }) => ({
  color: "black",
  fontWeight: "700",
  fontFamily: "Montserrat",
}));

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "gold",
  },
}));
