import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
  const { id, name, target, bodyPart, gifUrl } = exercise;

  return (
    <Link to={`/exercise/${id}`} className='exercise-card'>
      <img src={gifUrl} alt={name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            color: '#fff',
            bgcolor: '#ffa9a9',
            textTransform: 'capitalize',
            fontSize: 14,
            ml: 2,
            borderRadius: 20,
          }}
        >
          {bodyPart}
        </Button>
        <Button
          sx={{
            color: '#fff',
            bgcolor: '#fcc757',
            textTransform: 'capitalize',
            fontSize: 14,
            ml: 2,
            borderRadius: 20,
          }}
        >
          {target}
        </Button>
      </Stack>
      <Typography
        ml={2}
        fontSize={24}
        textTransform='capitalize'
        color='#3a1212'
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
