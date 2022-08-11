import { useState, useEffect } from 'react';
import { useBodyParts } from '../hooks/useBodyParts';
import { api } from '../utils/api';
import { scroll } from '../utils/scroll';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const ITEMS_PER_PAGE = 9;

const Exercises = ({ exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { selectedBodyPart } = useBodyParts();

  useEffect(() => {
    async function loadBodyPartExercises() {
      const res =
        selectedBodyPart === 'all'
          ? await api.getAllExercises()
          : await api.getBodyPartExercises(selectedBodyPart);

      setExercises(res);
    }
    loadBodyPartExercises();
  }, [selectedBodyPart, setExercises]);

  const lastExerciseIndex = currentPage * ITEMS_PER_PAGE;
  const firstExerciseIndex = lastExerciseIndex - ITEMS_PER_PAGE;
  const currentExercises = exercises.slice(
    firstExerciseIndex,
    lastExerciseIndex
  );

  const onPageChange = (e, value) => {
    setCurrentPage(value);
    scroll(1800);
  };

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
        Showing Results
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
        {currentExercises.map((item) => (
          <ExerciseCard key={item.id} exercise={item} />
        ))}
      </Stack>
      <Stack alignItems='center'>
        {exercises.length > ITEMS_PER_PAGE && (
          <Pagination
            sx={{
              mt: 8,
            }}
            size='large'
            count={Math.ceil(exercises.length / ITEMS_PER_PAGE)}
            defaultPage={1}
            page={currentPage}
            onChange={onPageChange}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
