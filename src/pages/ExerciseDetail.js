import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadDetails() {
      const exercise_data = await api.getExerciseById(id);
      const search_query = `${exercise_data.name} exercise`;
      const videos_data = await api.searchYoutubeVideos(search_query);
      setDetails(exercise_data);
      setVideos(videos_data.contents);
    }
    loadDetails();
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Details exerciseDetails={details} />
      <ExerciseVideos videos={videos} name={details.name} />
    </Box>
  );
};

export default ExerciseDetail;
