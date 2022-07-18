import React, { memo, ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Container,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import shallow from "zustand/shallow";

const Header = memo(() => {
  const navigate = useNavigate();

  const { currency, setCurrency } = useStore(
    (state) => ({ currency: state.currencyCode, setCurrency: state.setCurrency }),
    shallow
  );

  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    setCurrency(event.target.value);
  };

  const goToHome = React.useCallback(() => {
    navigate("/");
  }, []);

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar style={{ padding: 0, display: "flex", justifyContent: "space-between" }}>
          <Title variant="h6" onClick={goToHome}>
            Crypto Tracker
          </Title>

          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <Select
              value={currency}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;

const Title = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: "gold",
  fontWeight: "bold",
  cursor: "pointer",
}));
