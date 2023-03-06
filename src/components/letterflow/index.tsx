import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import divider from "../../assets/images/divider.png";

const Letters = [
  "News scroll",
  "News scrolling xxx",
  "News scrolling",
  "News scrolling xxxxx",
  "News scrolling xxxxxxxxxxxx",
  "News scrolling xxx",
  "News scrolling xxxxxx",
];

function LetterFlow() {
  const upperRef = useRef<HTMLDivElement>(null);
  const lowerRef = useRef<HTMLDivElement>(null);
  let constUpperLength: number;
  let constLowerLength: number;
  let upperlength: number = -1200;
  let lowerlength: number = 0;
  const motionHandler = () => {
    if (upperRef.current) {
      upperlength++;
      if (upperlength > (constUpperLength - 1200)) upperlength = -1200;
      upperRef.current.style.transform = `translate(${upperlength}px)`;
    }
    if (lowerRef.current) {
      lowerlength -= 2;
      if (lowerlength < -1392) lowerlength = 0;
      lowerRef.current.style.transform = `translate(${lowerlength}px)`;
    }
  };

  useEffect(() => {
    if (upperRef.current) {
      constUpperLength = upperRef.current.clientWidth / 2;
    }
    if (lowerRef.current) {
      constLowerLength = lowerRef.current.clientWidth / 2;
    }
    setInterval(motionHandler, 100);
  }, []);
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          height: { xs: "80px", md: "112px" },
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box display="flex" ref={upperRef}>
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                mx="12px"
                sx={{
                  backgroundColor: "white",
                }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="white"
                whiteSpace="nowrap"
              >
                {letter}
              </Typography>
            </Box>
          ))}
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                mx="12px"
                sx={{
                  backgroundColor: "white",
                }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="white"
                whiteSpace="nowrap"
              >
                {letter}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box component="img" src={divider} />
        <Box display="flex" ref={lowerRef}>
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                mx="12px"
                sx={{
                  backgroundColor: "white",
                }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="white"
                whiteSpace="nowrap"
              >
                {letter}
              </Typography>
            </Box>
          ))}
          {Letters.map((letter, index) => (
            <Box display="flex" alignItems="center" key={index}>
              <Box
                width="8px"
                height="8px"
                borderRadius="50%"
                mx="12px"
                sx={{
                  backgroundColor: "white",
                }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="20px"
                color="white"
                whiteSpace="nowrap"
              >
                {letter}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          backgroundColor: "black",
          width: "100%",
          height: { xs: "80px", md: "112px" },
          borderRadius: { xs: '12px', md: '28px'},
          zIndex: "-1",
        }}
      ></Box>
    </Box>
  );
}

export default LetterFlow;
