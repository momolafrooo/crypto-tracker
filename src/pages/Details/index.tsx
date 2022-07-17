import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Sidebar from "../../components/Sidebar";

const Details = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div>chart</div>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "400px 1fr",
  gap: "1rem",
  paddingTop: 50,
}));
