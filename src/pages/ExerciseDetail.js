import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarTarget from '../components/SimilarTarget';
import SimilarEquipment from '../components/SimilarEquipment';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    async function loadDetails() {
      const exercise_data = await api.getExerciseById(id);
      setDetails(exercise_data);
    }
    loadDetails();
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Details exerciseDetails={details} />
      <ExerciseVideos exerciseName={details.name} />
      <SimilarTarget exerciseTarget={details.target} />
      <SimilarEquipment exerciseEquipment={details.equipment} />
    </Box>
  );
};

export default ExerciseDetail;
