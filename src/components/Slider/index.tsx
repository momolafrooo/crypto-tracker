import React, { memo } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderItem from "../SliderItem";

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

const items: any[] | undefined = [
  <SliderItem
    logo={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
    name={"BTC"}
    profit={6.4}
    price={200540}
  />,
  <SliderItem
    logo={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
    name={"BTC"}
    profit={6.4}
    price={200540}
  />,
  <SliderItem
    logo={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
    name={"BTC"}
    profit={6.4}
    price={200540}
  />,
  <SliderItem
    logo={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
    name={"BTC"}
    profit={6.4}
    price={200540}
  />,
  <SliderItem
    logo={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png"}
    name={"BTC"}
    profit={6.4}
    price={200540}
  />,
];

const Slider = memo(() => {
  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
});

export default Slider;
