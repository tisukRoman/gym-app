import { useState } from 'react';
import { api } from '../utils/api';
import { scroll } from '../utils/scroll';
import { Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = ({ setExercises }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = async () => {
    if (searchValue.trim()) {
      const res = await api.searchExercises(searchValue);
      setExercises(res);
      scroll(1900);
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
    </Stack>
  );
};

export default SearchExercises;
