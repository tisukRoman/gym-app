import { Box, Button, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import '../App.css';
import { fontSize } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box
      p='20px'
      position='relative'
      sx={{
        mt: { lg: '212px', sm: '80px', xs: '40px' },
        ml: { sm: '50px' },
      }}
    >
      <Typography mb='20px' color='#ff2625' fontWeight='600' fontSize='36px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight='700'
        mb='20px'
        sx={{
          fontSize: { lg: '54px', sm: '52px', xs: '50px' },
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
        sx={{ mt: '26px', fontSize: '18px' }}
      >
        Explore Exercises
      </Button>
      <Typography
        mt='4px'
        color='#ff2625'
        fontSize='210px'
        fontWeight='600'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
