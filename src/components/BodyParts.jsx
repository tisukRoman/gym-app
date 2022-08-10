import { Box } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const BodyParts = ({
  bodyParts,
  setBodyParts,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        p: [2, 2, 4],
      }}
    >
      <HorizontalScrollbar data={bodyParts} />
    </Box>
  );
};

export default BodyParts;
