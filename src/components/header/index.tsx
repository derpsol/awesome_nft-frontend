import { useRef, useEffect, useState } from "react";
import { Box, Typography, Button, Link, Modal } from "@mui/material";
import logo from "../../assets/images/logo.png";
import useResponsive from "../../hook/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";

const Letters = [
  "News scroll",
  "News scrolling xxx",
  "News scrolling",
  "News scrolling xxxxx",
  "News scrolling xxxxxxxxxxxx",
  "News scrolling xxx",
  "News scrolling xxxxxx",
];

const menuItems = ["home", "magazine", "faqs", "about"];

function Header() {
  const isDesktop = useResponsive("up", "md");
  const upperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  let upperlength: number = 0;
  let constUpperLength: number;

  const motionHandler = () => {
    if (upperRef.current) {
      upperlength -= 2;
      if (upperlength < -constUpperLength) upperlength = 0;
      upperRef.current.style.transform = `translate(${upperlength}px)`;
    }
  };

  useEffect(() => {
    if (upperRef.current) {
      constUpperLength = upperRef.current.clientWidth / 2;
    }
    setInterval(motionHandler, 100);
  }, []);

  return (
    <Box display="flex" alignItems="center" my="40px">
      <Box display="flex" alignItems="center">
        {/* <Box
          component="img"
          src={logo}
          m="12px"
          sx={{
            width: { xs: "32px", sm: "48px", md: "72px" },
            height: { xs: "32px", sm: "48px", md: "72px" },
          }}
        /> */}
        <Typography
          mr="16px"
          textTransform="uppercase"
          fontFamily="Inter"
          sx={{
            fontSize: { xs: "18px", sm: "28px" },
            display: { xs: 'none', sm: 'block' }
          }}
        >
          awesome_nft.fi
        </Typography>
      </Box>
      <Box overflow="hidden">
        <Box display="flex" ref={upperRef}>
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="blue"
                whiteSpace="nowrap"
                mx="12px"
              >
                {letter}
              </Typography>
            </Box>
          ))}
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="blue"
                whiteSpace="nowrap"
                mx="12px"
              >
                {letter}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {isDesktop ? (
        <Box display="flex" alignItems="center">
          <Box display="flex">
            {menuItems.map((menu, index) => (
              <Link
                fontFamily="Inter"
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  mx: "12px",
                  textDecoration: "none",
                  color: "black",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "blue",
                    cursor: "pointer",
                  },
                }}
                key={index}
              >
                {menu}
              </Link>
            ))}
          </Box>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              fontSize: { xs: "16px", sm: "20px" },
              ml: "8px",
              px: "20px",
              py: "4px",
              "&:hover": {
                backgroundColor: "black",
                opacity: "0.8",
              },
            }}
          >
            Join
          </Button>
        </Box>
      ) : (
        <Box mx="12px">
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            sx={{ p: "8px" }}
          >
            <MenuIcon />
          </Button>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "right",
              mt: "84px",
              mr: "36px",
            }}
          >
            <Box
              bgcolor="white"
              width="250px"
              height="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
            >
              <Box textAlign="center">
                {menuItems.map((menu, index) => (
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      textTransform="uppercase"
                      px="40px"
                      py="8px"
                      key={index}
                      borderBottom={index < 3 ? "1px solid black" : ""}
                    >
                      {menu}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
}

export default Header;
