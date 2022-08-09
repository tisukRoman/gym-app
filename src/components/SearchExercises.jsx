import { useState, useEffect } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises }) => {
  const [searchValue, setSearchValue] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function loadBodyParts() {
      const bodyData = await fetchData('/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyData]);
    }
   // loadBodyParts();
  }, []);

  const onSearch = async () => {
    if (searchValue.trim()) {
      const exercises = await fetchData('', exerciseOptions);
      const filtered = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue)
      );
      setExercises(filtered);
    }
  };

  const onChangeValue = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <Stack
      sx={{
        mt: { xs: 12, lg: 10 },
      }}
    >
      <Typography
        sx={{
          ml: 4,
          fontSize: [42, 44, 46, 48],
          fontWeight: 600,
          textAlign: { xs: 'left', lg: 'center' },
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Stack
        direction='row'
        sx={{
          m: '3em auto',
          width: { xs: '90%', lg: 1240 },
        }}
      >
        <TextField
          onChange={onChangeValue}
          value={searchValue}
          placeholder='Search Exercises'
          fullWidth
          sx={{
            input: {
              fontWeight: '600',
            },
          }}
        />
        <Button
          onClick={onSearch}
          variant='contained'
          color='error'
          sx={{
            width: 200,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Search
        </Button>
      </Stack>
      <HorizontalScrollbar data={bodyParts} />
    </Stack>
  );
};

export default SearchExercises;
