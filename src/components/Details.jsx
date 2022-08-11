import { Button, Stack, Typography } from '@mui/material';
import BodyPartIcon from '../assets/icons/body-part.png';
import TargetIcon from '../assets/icons/target.png';
import EquipmentIcon from '../assets/icons/equipment.png';

const Details = ({ exerciseDetails }) => {
  const { name, target, bodyPart, equipment, gifUrl } = exerciseDetails;

  const extraDetails = [
    {
      icon: BodyPartIcon,
      name: bodyPart,
    },
    {
      icon: TargetIcon,
      name: target,
    },
    {
      icon: EquipmentIcon,
      name: equipment,
    },
  ];

  return (
    <Stack
      mt={6}
      sx={{
        flexDirection: { lg: 'row' },
        alignItems: { lg: 'flex-start', xs: 'center' },
        gap: 5,
        p: 4,
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack>
        <Typography
          component='h3'
          fontWeight='700'
          textTransform='capitalize'
          mb={2}
          sx={{
            fontSize: [50, 52, 54],
          }}
        >
          {name}
        </Typography>
        {extraDetails.map(({ icon, name }) => (
          <Stack
            key={name}
            mt={4}
            gap='24px'
            direction='row'
            alignItems='center'
          >
            <Button
              sx={{
                width: 80,
                height: 80,
                color: '#fff',
                bgcolor: '#fff2db',
                textTransform: 'capitalize',
                fontSize: 14,
                borderRadius: '50%',
              }}
            >
              <img src={icon} alt={name} />
            </Button>
            <Typography
              component='h5'
              fontSize={24}
              fontWeight={600}
              textTransform='capitalize'
            >
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
