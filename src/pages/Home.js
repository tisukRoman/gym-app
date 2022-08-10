import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { api } from '../utils/api';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import BodyParts from '../components/BodyParts';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');

  useEffect(() => {
    async function loadBodyParts() {
      const data = await api.getBodyParts();
      console.log(data);
      setBodyParts(['all', ...data]);
    }
    loadBodyParts();
  }, []);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} />
      <BodyParts
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      <Exercises
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
      <Box height={300}></Box>
    </Box>
  );
};

export default Home;
