import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExercisesScrollbar from './ExercisesScrollbar';
import { api } from '../utils/api';

const SimilarTarget = ({ exerciseTarget }) => {
  const [similarTargets, setSimilarTargets] = useState([]);

  useEffect(() => {
    async function loadSimilarTargets() {
      const list = await api.getTargetExercises(exerciseTarget);
      setSimilarTargets(list);
    }
    loadSimilarTargets();
  }, [exerciseTarget]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        p: [2, 2, 4],
      }}
    >
      <Typography
        variant='h4'
        mb={4}
        fontSize={48}
        fontWeight={600}
        textTransform='capitalize'
      >
        other exercises for{' '}
        <span style={{ color: '#ff2625' }}>{exerciseTarget}</span>
      </Typography>
      <Stack>
        <ExercisesScrollbar data={similarTargets} />
      </Stack>
    </Box>
  );
};

export default SimilarTarget;
