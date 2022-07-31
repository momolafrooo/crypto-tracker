import { Container, LinearProgress, styled, TextField, Typography } from "@mui/material";
import React, { memo } from "react";
import useSWR from "swr";
import { Coin, CoinList } from "../../api";
import { useStore } from "../../store";
import { fetcher } from "../../utils";
import CustomTable from "../CustomTable";

interface CoinsTableProps {}

const CoinsTable = memo(({}: CoinsTableProps) => {
  const currency = useStore((state) => state.currencyCode);
  const { data = [], isValidating } = useSWR<Coin[]>(CoinList(currency), fetcher);
  const [page, setPage] = React.useState(1);
  const [coins, setCoins] = React.useState<Coin[]>([]);

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filteredData = data.filter(
        (coin) => coin.name.toLowerCase().includes(e.target.value) || coin.symbol.toLowerCase().includes(e.target.value)
      );

      setCoins(filteredData);
      setPage(1);
    },
    [data]
  );

  React.useEffect(() => {
    setCoins(data);
  }, [data]);

  return (
    <Container>
      <Title variant="h4">Cryptocurrency Prices by Market Cap</Title>
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: "100%" }}
        onChange={handleSearch}
      />
      {isValidating ? (
        <LinearProgress style={{ backgroundColor: "#EEBC1D", borderRadius: 20 }} />
      ) : (
        <CustomTable data={coins} page={page} setPage={setPage} />
      )}
    </Container>
  );
});

export default CoinsTable;

const Title = styled(Typography)(({ theme }) => ({
  margin: 18,
  fontFamily: "Montserrat",
  textAlign: "center",
  "@media screen and (max-width:637px)": {
    fontSize: "1.3rem",
    textAlign: "center",
  },
}));
