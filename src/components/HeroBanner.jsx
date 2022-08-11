import { Box, Button, Typography } from '@mui/material';
import { scroll } from '../utils/scroll';
import HeroBannerImage from '../assets/images/banner.png';
import '../App.css';

const HeroBanner = () => {
  return (
    <Box
      position='relative'
      sx={{
        mt: [10, 20, 27],
        ml: 4,
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
      <Typography lineHeight='40px' fontSize={20}>
        Check Out The Most Effective Exercises
      </Typography>
      <Button
        onClick={() => scroll(1800)}
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
        color='#ff2625'
        fontSize={210}
        fontWeight='600'
        sx={{
          mt: 1,
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
