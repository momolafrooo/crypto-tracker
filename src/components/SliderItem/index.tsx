import styled from "@emotion/styled";
import React, { memo } from "react";
import { formatPrice } from "../../utils";

interface Props {
  logo: string;
  name: string;
  profit: string;
  price: string;
}

const SliderItem = memo((props: Props) => {
  const { logo, name, profit, price } = props;
  return (
    <Wrapper>
      <Logo src={logo} height={80} alt={name} />
      <Name>
        {name.toUpperCase()}{" "}
        <strong
          style={{
            color: Number(profit) > 0 ? "rgb(14, 203, 129)" : "red",
            fontWeight: 500,
          }}
        >
          {Number(profit) > 0 ? "+" + profit : profit}%
        </strong>
      </Name>
      <Price>{formatPrice(price)}</Price>
    </Wrapper>
  );
});

export default SliderItem;

const Logo = styled("img")(({ theme }) => ({
  marginBottom: 15,
}));

const Name = styled("div")(({ theme }) => ({
  marginBottom: 0,
}));

const Wrapper = styled("div")(({ theme }) => ({
  margin: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Price = styled("div")(({ theme }) => ({
  fontSize: 22,
  fontWeight: "bold",
}));
