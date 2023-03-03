import React from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <Container maxWidth='xl'>
      <Box
        component="img"
        src={logo}
        width='128px'
        height='128px'
        m='12px'
      />
      <Typography
        textTransform='uppercase'
        fontFamily='Inter'
        fontSize='36px'
      >
        awesome_nft.fi
      </Typography>
    </Container>
  );
}

export default Home;
