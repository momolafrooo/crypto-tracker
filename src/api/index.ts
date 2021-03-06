export const CoinList = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id: string, days = 365, currency: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;

  price_change_percentage_24h: number;
  current_price: number;
  market_cap: number;
}

export interface SingleCoin {
  id: string;
  name: string;
  description: {
    en: string;
  };
  image: {
    small: string;
    large: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: {
      [key: string]: string;
    };
    market_cap: {
      [key: string]: string;
    };
  };
}

export interface Chart {
  prices: Array<any>;
}
