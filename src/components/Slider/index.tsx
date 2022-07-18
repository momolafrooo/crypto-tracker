import React, { memo, useMemo } from "react";
import AliceCarousel from "react-alice-carousel";
import useSWR from "swr";
import { TrendingCoins } from "../../api";
import { useStore } from "../../store";
import { fetcher } from "../../utils";
import SliderItem from "../SliderItem";

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  price_change_percentage_24h: number;
  current_price: number;
}

const Slider = memo(() => {
  const [currency, currencySymbol] = useStore((state) => [state.currencyCode, state.currencySymbol]);
  const { data, error } = useSWR<Coin[]>(TrendingCoins(currency), fetcher);

  const items = useMemo(() => {
    if (data) {
      return data.map((item) => (
        <SliderItem
          logo={item.image}
          name={item.symbol}
          profit={item.price_change_percentage_24h?.toFixed(2)}
          price={item.current_price?.toFixed(2)}
          currency={currencySymbol}
        />
      ));
    }
  }, [data]);

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
