import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ECurrencies } from "../utils";

interface StoreState {
  currencyCode: string;
  currencySymbol: string;
  setCurrency: (currency: string) => void;
}

export const useStore = create<StoreState>()(
  devtools(
    persist((set) => ({
      currencySymbol: "$",
      currencyCode: "USD",
      setCurrency: (currency) =>
        set(() => {
          const currencyCode = currency.toUpperCase();
          const currencySymbol = ECurrencies[currencyCode as keyof typeof ECurrencies];
          return {
            currencyCode,
            currencySymbol,
          };
        }),
    }))
  )
);
