import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddAdmin from "./Components/AddAdmin";
import AddSalon from "./Components/AddSalon";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar></Navbar>
        <Router>
          <Routes>
            <Route exact path="/" />
            <Route path="/registrar-admin" element={<AddAdmin/>} />
            <Route path="/registrar-salon" element={<AddSalon/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
