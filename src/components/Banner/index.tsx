import React, { memo } from "react";
import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import Slider from "../Slider";

const Banner = memo(() => {
  return (
    <Wrapper>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div>
          <Title>Crypto Tracker</Title>
          <Subtitle>Get All The Info Regarding Your Favorite Crypto Currency</Subtitle>
        </div>
        <Slider />
      </Container>
    </Wrapper>
  );
});

export default Banner;

const Wrapper = styled("div")(({ theme }) => ({
  height: 400,
  backgroundImage: "url('/banner.jpg')",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "3.75rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  marginTop: "2rem",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: "darkgrey",
  textTransform: "capitalize",
  textAlign: "center",
}));
