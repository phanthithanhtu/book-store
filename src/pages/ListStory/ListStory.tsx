import data from '../../data/items.json';
import React from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/system';

// Style the Grid component to match the desired list style
const ListStoryContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
});

function ListStory() {
  const datas = data; // Assuming data is imported correctly

  return (
    <ListStoryContainer>
      {datas.map((data, index) => (
        <Grid item key={index}>
          <Stack>
            <StoryItem data={data} />
          </Stack>
        </Grid>
      ))}
    </ListStoryContainer>
  );
}

export default ListStory;
