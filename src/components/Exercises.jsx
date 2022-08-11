import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {
  return (
    <Box
      id='exercises'
      sx={{
        mt: [4, 6, 8, 8],
      }}
    >
      <Typography
        component='h3'
        sx={{
          ml: 4,
          fontSize: [42, 44, 46, 48],
          fontWeight: 600,
          textAlign: { xs: 'left', lg: 'center' },
        }}
      >
        Exercises
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        flexWrap='wrap'
        sx={{
          gap: { lg: 15, xs: 5 },
          mt: [4, 6, 8, 8],
        }}
      >
        {exercises.map((item) => (
          <ExerciseCard key={item.id} exercise={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
