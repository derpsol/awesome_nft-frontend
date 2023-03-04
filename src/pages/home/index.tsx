import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import grid_back from "../../assets/images/grid_back.png";
import call_pic from "../../assets/images/callout_box.png";
import LetterFlow from "../../components/letterflow";
import SearchContent from "../../components/searchContent";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: { grid_back },
      }}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            fontFamily="Inter"
            mb="30px"
            sx={{
              mx: { xs: "auto", md: 0 },
              mr: { xs: "0px", md: "28px", lg: "96px" },
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "18px", lg: "22px" },
              mt: { md: "40px", lg: "80px" },
            }}
          >
            Learning NFT Finance just got easy. Well...maybe not easy, but we
            definitely try to make it approachable by compiling some educational
            resources and charts to get you up to speed.
          </Typography>
        </Box>
        <Box
          component="img"
          src={call_pic}
          sx={{
            width: { xs: "90%", md: "50%" },
          }}
          mx="auto"
        />
      </Box>
      <Box
        sx={{
          mt: { md: "-96px", lg: "-160px" },
          mb: { xs: "30px", md: "150px" },
          mx: { xs: "auto", md: "0px" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "40px", sm: "54px", md: "72px", lg: "102px" },
            fontWeight: "600",
          }}
        >
          NFT Finance
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: { sm: "center", md: "left" },
            mt: { xs: "-12px", sm: "-24px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "40px", sm: "54px", md: "72px", lg: "102px" },
              fontWeight: "600",
            }}
          >
            made easy for
          </Typography>
          <Typography
            color="#F9FAFB"
            ml="24px"
            sx={{
              textShadow:
                "-1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black",
              fontFamily: "Inter",
              fontSize: { xs: "40px", sm: "54px", md: "72px", lg: "102px" },
              fontWeight: "600",
              mt: { xs: "-12px", sm: "0px" },
            }}
          >
            everyone.
          </Typography>
        </Box>
      </Box>
      <LetterFlow />
      <Box mt="120px"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-around' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center'
        }}
        >
        <TextField
          name={"text"}
          variant="outlined"
          focused={false}
          placeholder="Resource"
          sx={{
            padding: '0px',
            borderRadius: '30px',
            border: '1px solid black',
            width: { xs: '90%', md: '75%'},
            height: '86px',
            overflow: 'hidden',
            'input': {
              fontSize: '22px',
              lineHeight: '26px',
              fontFamily: 'Inter',
              ml: { xs: '20px', sm: '52px' },
              '&::placeholder': {
                fontSize: '22px',
                lineHeight: '26px',
                fontFamily: 'Inter',    
              }
            },
            "& .MuiOutlinedInput-root": {
              '& fieldset': {
                border: 'none',
                  },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            }
          }}
          InputProps={{
            startAdornment: <Button variant="contained" onClick={() => 0}
              sx={{
                backgroundColor: '#E1E1E1',
                color: '#141414',
                px: { xs: '35px', sm: '64px'},
                py: '30px',
                ml: '-20px',
                fontSize: '22px',
                lineHeight: '26px',
                fontFamily: 'Inter',
                borderRight: '1px dashed #141414',
                '&:focus' : {
                  backgroundColor: '#E1E1E1'
                }
              }}
            >Search</Button>,
          }}
        />
        <Button
          sx={{
            width: { xs: '90%', sm: '50%', md: '20%' },
            height: '86px',
            border: '1px solid black',
            borderRadius: '30px',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: '600',
            color: '#141414',
            display: 'flex',
            alignItems: 'center',
            mt: { xs: '10px', md: '0px' }
          }}
        >
          <Box width='60%' ml='10%'>
            Category
          </Box>
          <Box
            display='flex'
            width="30%"
            alignItems='center'
            justifyContent='center'
          >
            <ArrowForwardIosIcon/>
          </Box>
        </Button>
      </Box>
      <SearchContent/>
    </Box>
  );
}

export default Home;
