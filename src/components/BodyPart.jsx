import { Stack, Typography } from '@mui/material';
import GymIcon from '../assets/icons/gym.png';
import '../App.css';

const BodyPart = ({ children }) => {
  return (
    <Stack
      sx={{
        m: '0 40px',
        border: 'none',
        cursor: 'pointer',
        bgcolor: '#fff',
        width: 270,
        height: 280,
        gap: 6,
      }}
      type='button'
      direction='column'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
    >
      <img
        src={GymIcon}
        alt={children}
        style={{
          width: '60px',
          height: '60px',
        }}
      />
      <Typography
        fontSize='24px'
        fontWeight='600'
        color='#3a1212'
        textTransform='capitalize'
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
