import { Container, Pagination, Paper, TableContainer, TextField, Typography } from "@mui/material";
import React, { memo } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "@emotion/styled";
import { Coin } from "../../api";
import { formatPrice } from "../../utils";

interface TableProps {
  data: Coin[];
  page: number;
  setPage: (page: number) => void;
}

const CustomTable = memo(({ data, page = 1, setPage }: TableProps) => {
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
            {data.slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin: Coin) => (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" style={{ display: "flex", gap: 15 }} scope="row">
                  <img src={coin.image} alt={coin.name} height="50" style={{ marginBottom: 10 }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        textTransform: "uppercase",
                        fontSize: 22,
                      }}
                    >
                      {coin?.symbol}
                    </span>
                    <span style={{ color: "darkgrey" }}>{coin?.name}</span>
                  </div>
                </TableCell>
                <TableCell align="right">{formatPrice(coin?.current_price?.toFixed(2))}</TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: Number(coin?.price_change_percentage_24h) > 0 ? "rgb(14, 203, 129)" : "red",
                    fontWeight: 500,
                  }}
                >
                  {Number(coin?.price_change_percentage_24h) > 0
                    ? "+" + coin?.price_change_percentage_24h?.toFixed(2)
                    : coin?.price_change_percentage_24h?.toFixed(2)}
                  %
                </TableCell>
                <TableCell align="right">{formatPrice(coin?.market_cap?.toString().slice(0, -6))}M</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomPagination
        count={Number((data.length / 10).toFixed(0))}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scrollTo({ top: 450, behavior: "smooth" });
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
