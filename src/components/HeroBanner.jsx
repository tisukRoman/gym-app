import { Box, Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import '../App.css';

const HeroBanner = () => {
  return (
    <Box
      p='20px'
      position='relative'
      sx={{
        mt: [10, 20, 27],
        ml: 5,
      }}
    >
      <Typography
        mb={2}
        color='#ff2625'
        fontWeight='600'
        sx={{
          fontSize: [32, 34, 36],
        }}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight='700'
        mb={2}
        sx={{
          fontSize: [50, 52, 54],
        }}
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography lineHeight='40px' fontSize='20px'>
        Check Out The Most Effective Exercises
      </Typography>
      <Button
        href='#exercises'
        variant='contained'
        color='error'
        sx={{
          mt: 4,
          fontSize: 18,
          fontFamily: 'sans-serif',
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        mt={1}
        color='#ff2625'
        fontSize='210px'
        fontWeight='600'
        sx={{
          opacity: 0.1,
          display: { xs: 'none', lg: 'block' },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
