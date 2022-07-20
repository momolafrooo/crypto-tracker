import React, { memo } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { fetcher, formatPrice } from "../../utils";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../api";
import useSWR from "swr";
import { useStore } from "../../store";
import shallow from "zustand/shallow";

const Sidebar = memo(() => {
  const { id } = useParams();
  const { data: coin } = useSWR<SingleCoin>(SingleCoin(id!), fetcher);

  const { currency } = useStore((state) => ({ currency: state.currencyCode }), shallow);

  return (
    <Wrapper>
      <Header>
        <Logo src={coin?.image?.large} />
        <Title variant="h3">{coin?.name}</Title>
      </Header>
      <Description variant="subtitle1">{ReactHtmlParser(coin?.description?.en?.split(".")[0] || "")}</Description>
      <Infos>
        <InfoItem>
          <Label variant="h5">Rank:</Label>{" "}
          <Value variant="h5">{formatPrice(coin?.market_cap_rank?.toString() || "0")}</Value>
        </InfoItem>
        <InfoItem>
          <Label variant="h5">Current Price:</Label>{" "}
          <Value variant="h5">{formatPrice(coin?.market_data?.current_price[currency.toLowerCase()] || "0")}</Value>
        </InfoItem>
        <InfoItem>
          <Label variant="h5">Market Cap:</Label>{" "}
          <Value variant="h5">
            {formatPrice(coin?.market_data?.market_cap[currency.toLowerCase()]?.toString()?.slice(0, -6) || "0")}M
          </Value>
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
