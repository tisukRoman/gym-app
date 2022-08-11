import { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import BodyParts from '../components/BodyParts';

const Home = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} />
      <BodyParts />
      <Exercises exercises={exercises} setExercises={setExercises} />
      <Box height={300}></Box>
    </Box>
  );
};

export default Home;
