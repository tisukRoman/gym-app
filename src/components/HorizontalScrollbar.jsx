import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';

const HorizontalScrollbar = ({ data }) => {
  return (
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
  );
};

export default HorizontalScrollbar;
