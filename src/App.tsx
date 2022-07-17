import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./pages/Details";
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/coins/:id" element={<Details />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
