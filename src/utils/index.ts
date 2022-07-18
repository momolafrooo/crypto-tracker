import { useStore } from "../store";

export enum ECurrencies {
  USD = "$",
  EUR = "€",
  GBP = "£",
  CAD = "$",
  AUD = "$",
  NZD = "$",
  CHF = "Fr",
  JPY = "¥",
  NOK = "kr",
  SEK = "kr",
  BRL = "R$",
}

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const formatPrice = (price: number) => {
  const { getState, setState, subscribe, destroy } = useStore;
  const currencyCode = getState().currencyCode;

  return new Intl.NumberFormat(undefined, { style: "currency", currency: currencyCode }).format(price);
};
