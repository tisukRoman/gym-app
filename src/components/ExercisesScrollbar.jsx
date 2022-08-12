import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';
import ExerciseCard from './ExerciseCard';

const ExercisesScrollbar = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          mr={10}
        >
          <ExerciseCard exercise={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ExercisesScrollbar;
