import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Box display='flex' alignItems='center'>
      <Box
        component="img"
        src={logo}
        m='12px'
        sx={{
          width: { xs: '64px', sm: '96px', md: '128px' },
          height: { xs: '64px', sm: '96px', md: '128px' },
        }}
      />
      <Typography
        mr='16px'
        textTransform='uppercase'
        fontFamily='Inter'
        sx={{
          fontSize: { xs: '20px', sm: '36px' }
        }}
      >
        awesome_nft.fi
      </Typography>
    </Box>
  );
}

export default Header;
