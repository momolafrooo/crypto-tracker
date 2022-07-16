import { Container, TextField, Typography } from "@mui/material";
import React, { memo } from "react";
import CustomTable from "../CustomTable";

interface CoinsTableProps {}

const CoinsTable = memo(({}: CoinsTableProps) => {
  return (
    <Container>
      <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat", textAlign: "center" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <CustomTable />
    </Container>
  );
});

export default CoinsTable;
