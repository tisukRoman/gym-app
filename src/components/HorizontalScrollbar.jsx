import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';

const HorizontalScrollbar = ({ data }) => {
  console.log(data);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        p: [2, 2, 4],
      }}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <BodyPart
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            {item}
          </BodyPart>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
