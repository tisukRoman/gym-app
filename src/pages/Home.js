import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchPanel from '../components/SearchPanel';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchPanel />
      <Box height={300}></Box>
    </Box>
  );
};

export default Home;
