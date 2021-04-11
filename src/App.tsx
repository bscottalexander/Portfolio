import ThemeProvider from "Providers/ThemeProvider/ThemeProvider";
import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </Router>
  );
};

export default App;
