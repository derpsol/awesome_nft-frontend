import React from "react";
import Home from "./pages/home";
import { Container, Box } from "@mui/material";
import Header from "./components/header";

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
