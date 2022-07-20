import { Container, TextField, Typography } from "@mui/material";
import React, { memo } from "react";
import useSWR from "swr";
import { Coin, CoinList } from "../../api";
import { useStore } from "../../store";
import { fetcher } from "../../utils";
import CustomTable from "../CustomTable";

interface CoinsTableProps {}

const CoinsTable = memo(({}: CoinsTableProps) => {
  const currency = useStore((state) => state.currencyCode);
  const { data = [] } = useSWR<Coin[]>(CoinList(currency), fetcher);
  const [page, setPage] = React.useState(1);
  const [coins, setCoins] = React.useState<Coin[]>([]);

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filteredData = data.filter(
        (coin) => coin.name.toLowerCase().includes(e.target.value) || coin.symbol.toLowerCase().includes(e.target.value)
      );

      setCoins(filteredData);
    },
    [data]
  );

  React.useEffect(() => {
    setCoins(data);
  }, [data]);

  return (
    <Container>
      <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat", textAlign: "center" }}>
        Cryptocurrency Prices by Market Cap
      </Typography>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={handleSearch}
      />
      <CustomTable data={coins} page={page} setPage={setPage} />
    </Container>
  );
});

export default CoinsTable;
