import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      px='20px'
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: ['40px', '122px'],
        mt: ['20px', '32px'],
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
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='baseline'>
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
