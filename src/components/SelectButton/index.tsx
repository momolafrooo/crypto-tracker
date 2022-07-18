import React, { memo } from "react";
import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";
import { chartDays } from "./data";

interface Props {
  onSelect: (value: number) => void;
  select: number;
}

const SelectButton = memo(({ onSelect, select }: Props) => {
  return (
    <Wrapper>
      {chartDays.map(({ label, value }) => (
        <Button
          variant={select === value ? "contained" : "outlined"}
          style={{
            background: select === value ? "gold" : "transparent",
            color: select === value ? "black" : "gold",
            fontWeight: select === value ? "bold" : "normal",
          }}
          onClick={() => onSelect(value)}
        >
          {label}
        </Button>
      ))}
    </Wrapper>
  );
});

export default SelectButton;

const Wrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 15,
  width: "100%",
  marginTop: 40,
}));

const Button = styled(MuiButton)(({ theme }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "Montserrat",
  cursor: "pointer",
  color: "gold",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
    border: "1px solid gold",
  },
  "&:focus": {
    outline: "none",
  },
}));
