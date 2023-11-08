import data from '../../data/fakebooks.json';
import React from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import { Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './index.scss';

const ListStoryContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
});

function ListStory() {
  const datas = data;

  return (
    <div id="1">
      <Typography variant="h4" gutterBottom>
        List of Stories
      </Typography>
      <ListStoryContainer>
        {datas.map((data, index) => (
          <Grid item key={index} sx={{ height: '100%' }}>
            <Stack sx={{ height: '100%' }}>
              <StoryItem data={data} />
            </Stack>
          </Grid>
        ))}
      </ListStoryContainer>
    </div>
  );
}

export default ListStory;
