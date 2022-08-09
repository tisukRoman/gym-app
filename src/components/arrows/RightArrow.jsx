import { useContext } from 'react';
import { Typography } from '@mui/material';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

export default RightArrow;
