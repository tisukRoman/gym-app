import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const ExerciseDetail = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function loadDetails() {
      const res = await api.getExerciseById(id);
      setDetails(res);
    }
    loadDetails();
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Details exerciseDetails={details} />
    </Box>
  );
};

export default ExerciseDetail;
