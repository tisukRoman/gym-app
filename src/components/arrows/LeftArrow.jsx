import { useContext } from 'react';
import { Typography } from '@mui/material';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Typography>
  );
};

export default LeftArrow;
