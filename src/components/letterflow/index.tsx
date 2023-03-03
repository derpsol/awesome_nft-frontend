import { useRef } from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import divider from '../../assets/images/divider.png'

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
  
  function motionHandler() {
    if(upperRef.current) {
      upperRef.current.style.transform = 'translate(10px)';
    }
  }
  
  useEffect(() => {
    setInterval(motionHandler(), 100)
  }, [])
    return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ overflow: "hidden", display: 'flex', height: '112px', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Box display='flex' ref={upperRef}>
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
              <Typography fontFamily="Inter" fontSize="20px" color="white" whiteSpace='nowrap'>
                {letter}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          component='img'
          src={divider}
        />
        <Box display='flex' ref={lowerRef}>
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
              <Typography fontFamily="Inter" fontSize="20px" color="white" whiteSpace='nowrap'>
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
          height: "112px",
          borderRadius: "28px",
          zIndex: "-1",
        }}
      ></Box>
    </Box>
  );
}

export default LetterFlow;
