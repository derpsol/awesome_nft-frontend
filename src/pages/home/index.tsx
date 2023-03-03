import { Box, Typography } from "@mui/material";
import grid_back from '../../assets/images/grid_back.png'
import call_pic from '../../assets/images/callout_box.png'
import LetterFlow from "../../components/letterflow";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: {grid_back},
      }}
    >
      <Box
        display='flex' 
        alignItems='flex-start'
        sx={{
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' }
          }}
        >
          <Typography
            fontFamily='Inter'
            mb='30px'
            sx={{
              mx: { xs: 'auto', md: 0},
              mr: { xs: '0px', md: '28px', lg: '96px'},
              textAlign: { xs: 'center', md: 'left' },
              fontSize: {xs: '18px', lg: '22px'},
              mt: { md: '40px', lg: '80px' }
            }}
          >
            Learning NFT Finance just got easy. Well...maybe not easy, but we definitely try to make it approachable by compiling some educational resources and charts to get you up to speed.  
          </Typography>
        </Box>
        <Box
          component='img'
          src={call_pic}
          sx={{
            width: { xs: '90%', md: '50%' }
          }}
          mx='auto'
        />
      </Box>
      <Box
        sx={{
          mt: { md: '-96px', lg: '-160px' },
          mx: { xs: 'auto', md: '0px'},
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '40px', sm: '54px', md: '72px', lg: '102px'},
            fontWeight: '600', 
          }}
        >
          NFT Finance
        </Typography>
        <Box
          sx={{
            display: { xs: 'block', sm: 'flex' },
            justifyContent: { sm: 'center', md: 'left' },
            mt: { xs: '-12px', sm: '-24px' }
          }}
        >
          <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '40px', sm: '54px', md: '72px', lg: '102px'},
            fontWeight: '600', 
          }}
          >
            made easy for
          </Typography>
          <Typography
            color='#F9FAFB'
            ml='24px'
            sx={{
              textShadow: '-1.2px 0 black, 0 1.2px black, 1.2px 0 black, 0 -1.2px black',
              fontFamily: 'Inter',
              fontSize: { xs: '40px', sm: '54px', md: '72px', lg: '102px'},
              fontWeight: '600',
              mt: { xs: '-12px', sm: '0px' }
            }}
          >
            everyone.
          </Typography>
        </Box>
      </Box>
      <LetterFlow/>
    </Box>
  );
}

export default Home;
