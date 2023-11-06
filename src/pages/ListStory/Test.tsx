import React, { useEffect, useState } from 'react';
import { getItems } from '../../data/api';
import StoryItem from '../../components/StoryItem/StoryItem';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/system';

type ItemType = {
  id: number;
  name: string;
  title: string;
  author: string;
  year: number;
  views: number;
  rating: number;
  imagesURL: string;
  genreName: string[];
  description: string;
  status: boolean;
  approvalStatus: boolean;
  genreIds: any[] | null;
};

const ListStoryContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
});

function ListStory() {
  const [datas, setDatas] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        if (Array.isArray(data)) {
          setDatas(data as ItemType[]); // Type assertion to ItemType[]
        } else {
          console.error('Data received is not an array');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListStoryContainer>
      {datas.map((data, index) => (
        <Grid item key={index} sx={{ height: '100%' }}>
          <Stack sx={{ height: '100%' }}>
            <StoryItem data={data} />
          </Stack>
        </Grid>
      ))}
    </ListStoryContainer>
  );
}

export default ListStory;
