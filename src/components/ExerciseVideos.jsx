import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { api } from '../utils/api';

const ExerciseVideos = ({ exerciseName }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const search_query = `${exerciseName} exercise`;
      const videos_data = await api.searchYoutubeVideos(search_query);
      setVideos(videos_data.contents);
    }
    loadVideos();
  }, [exerciseName]);

  return (
    <Box
      sx={{
        p: 4,
        mt: { lg: 8, xs: 4 },
      }}
    >
      <Typography variant='h4' mb={4} fontSize={48} fontWeight={600}>
        Watch{' '}
        <span style={{ textTransform: 'capitalize', color: '#ff2625' }}>
          {exerciseName}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        mt={8}
        flexWrap='wrap'
        justifyContent='flex-start'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row', xs: 'column' },
          gap: { lg: 12, xs: 0 },
        }}
      >
        {videos?.slice(0, 3).map(({ video }) => (
          <a
            key={video.videoId}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={video.thumbnails[0].url} alt={video.title} />
            <Typography color='#000'>{video.title}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
