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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = memo(() => {
  const [select, setSelect] = React.useState(1);
  return (
    <Wrapper>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
          ],

          datasets: [
            {
              data: [
                65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56,
                55, 40, 65, 59, 80, 81, 56, 55, 40,
              ],
              label: `Price ( Past ${"635"} Days ) in ${"$"}`,
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
      <SelectButton onSelect={setSelect} select={select} />
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
}));
