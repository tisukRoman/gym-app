import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = async () => {
    if (searchValue.trim()) {
      console.log('FETCH DATA');
    }
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
          onChange={(e) => setSearchValue(e.target.value)}
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

export default SearchPanel;
