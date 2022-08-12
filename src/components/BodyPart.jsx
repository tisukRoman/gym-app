import { Stack, Typography } from '@mui/material';
import { useBodyParts } from '../hooks/useBodyParts';
import GymIcon from '../assets/icons/gym.png';

const BodyPart = ({ item }) => {
  const { selectedBodyPart, setSelectedBodyPart } = useBodyParts();

  return (
    <Stack
      onClick={() => setSelectedBodyPart(item)}
      sx={{
        m: '0 40px',
        borderBottom: selectedBodyPart === item ? '3px solid #ff2625' : '',
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
        alt={item}
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
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
