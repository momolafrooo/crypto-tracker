import React, { memo } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";

const Sidebar = memo(() => {
  return (
    <Wrapper>
      <Header>
        <Logo src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" />
        <Title variant="h3">Bitcoin</Title>
      </Header>
      <Description variant="subtitle1">
        {ReactHtmlParser(
          "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency."
        )}
      </Description>
      <Infos>
        <InfoItem>
          <Label variant="h5">Rank:</Label> <Value variant="h5">1</Value>
        </InfoItem>
        <InfoItem>
          <Label variant="h5">Current Price:</Label> <Value variant="h5">$ 45.093.333</Value>
        </InfoItem>
        <InfoItem>
          <Label variant="h5">Market Cap:</Label> <Value variant="h5">$ 45.093.333</Value>
        </InfoItem>
      </Infos>
    </Wrapper>
  );
});

export default Sidebar;

const Wrapper = styled("div")(({ theme }) => ({
  borderRight: "1px solid #e0e0e0",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const Logo = styled("img")(({ theme }) => ({
  height: 200,
  marginBottom: 20,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "20px",
}));

const Description = styled(Typography)(({ theme }) => ({
  paddingRight: 25,
  marginBottom: 30,
  paddingTop: 0,
  textAlign: "justify",
}));

const Infos = styled("div")(({ theme }) => ({}));

const InfoItem = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 15,
}));

const Label = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "20px",
}));

const Value = styled(Typography)(({ theme }) => ({}));
