import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from "./Pages/Admin";
import Salon from "./Pages/Salon";
import Main from "./Pages/Main";

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
            <Route exact path="/" element={<Main />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/salones" element={<Salon/>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
