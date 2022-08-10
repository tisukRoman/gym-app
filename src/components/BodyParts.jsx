import { Box } from '@mui/material';
import { useBodyParts } from '../hooks/useBodyParts';
import HorizontalScrollbar from './HorizontalScrollbar';

const BodyParts = () => {
  const { bodyParts } = useBodyParts();

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
