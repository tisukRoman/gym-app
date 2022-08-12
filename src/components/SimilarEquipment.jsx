import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExercisesScrollbar from './ExercisesScrollbar';
import { api } from '../utils/api';

const SimilarEquipment = ({ exerciseEquipment }) => {
  const [similarEquipments, setSimilarEquipments] = useState([]);

  useEffect(() => {
    async function loadSimilarEquipments() {
      const list = await api.getEquipmentExercises(exerciseEquipment);
      setSimilarEquipments(list);
    }
    loadSimilarEquipments();
  }, [exerciseEquipment]);

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
        mb={8}
        fontSize={48}
        fontWeight={600}
        textTransform='capitalize'
      >
        other exercises with{' '}
        <span style={{ color: '#ff2625' }}>{exerciseEquipment}</span>
      </Typography>
      <Stack>
        <ExercisesScrollbar data={similarEquipments} />
      </Stack>
    </Box>
  );
};

export default SimilarEquipment;
