import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Chart from "../../components/Chart";
import Sidebar from "../../components/Sidebar";

const Details = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Chart />
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "400px 1fr",
  gap: "1rem",
  padding: 50,
}));
