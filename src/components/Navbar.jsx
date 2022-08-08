import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      px={2}
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      sx={{
        gap: [5, 16],
        mt: [2, 4],
        justifyContent: 'none',
      }}
    >
      <Link
        to='/'
        style={{
          color: '#3a1212',
          textDecoration: 'none',
        }}
      >
        <img
          src={Logo}
          alt='logo'
          style={{
            width: '48px',
            height: '48px',
            margin: '0 20px',
          }}
        />
      </Link>
      <Stack direction='row' gap={5} fontSize={24} alignItems='baseline'>
        <Link
          to='/'
          style={{
            color: '#3a1212',
            textDecoration: 'none',
            borderBottom: '3px solid #ff2625',
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{
            color: '#3a1212',
            textDecoration: 'none',
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
