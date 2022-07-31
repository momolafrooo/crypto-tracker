import React, { memo } from "react";
import styled from "@emotion/styled";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SelectButton from "../SelectButton";
import { useStore } from "../../store";
import useSWR from "swr";
import { ECurrencies, fetcher } from "../../utils";
import { Chart as IChart, HistoricalChart } from "../../api";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = memo(() => {
  const { id } = useParams();
  const [days, onSelectDays] = React.useState(1);
  const currency = useStore((state) => state.currencyCode);
  const { data: history, isValidating } = useSWR<IChart>(HistoricalChart(id!, days, currency), fetcher);

  const data = React.useMemo(() => {
    if (!history) return [];

    return history.prices.map((price) => price[1]);
  }, [history]);

  const labels = React.useMemo(() => {
    if (!history) return [];

    return history.prices.map((price) => {
      let date = new Date(price[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    });
  }, [history]);

  if (isValidating) {
    return <CircularProgress />;
  }

  return (
    <Wrapper>
      <Line
        data={{
          labels,
          datasets: [
            {
              data,
              label: `Price ( Past ${days} Days ) in ${ECurrencies[currency as keyof typeof ECurrencies]}`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <SelectButton onSelect={onSelectDays} select={days} />
    </Wrapper>
  );
});

export default Chart;

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 40,
  width: "100%",
  "@media screen and (max-width:890px)": {
    padding: 0,
  },
}));
