import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        p: 4,
        bgcolor: '#fff3f4',
      }}
    >
      <Stack alignItems='center' gap='20px'>
        <img src={Logo} alt='footer logo' style={{width: '300px', height: '60px'}}/>
        <Typography fontSize={24} fontWeight={600} fontStyle='italic'>
          {' '}
          Made By Tyschuk Roman
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
