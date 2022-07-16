import React, { memo } from "react";
import AppBar from "@mui/material/AppBar";
import { Container, FormControl, makeStyles, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Title = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: "gold",
  fontWeight: "bold",
}));

const Header = memo(() => {
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar style={{ padding: 0, display: "flex", justifyContent: "space-between" }}>
          <Title variant="h6">Crypto Tracker</Title>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select value="USD" onChange={() => {}} displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EURO">EURO</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;
