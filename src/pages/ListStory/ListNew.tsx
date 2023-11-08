import React, { useEffect, useState } from 'react';
import { getNewlist } from '../../data/api';
import StoryNew from '../../components/StoryItem/Storytop';
import { styled } from '@mui/system';
import { Grid, Stack, Typography } from '@mui/material';

type ItemType = {
  _id: string;
  author: string;
  description: string;
  image: string;
  name: string;
  numberofrating: string;
  rating: string;
  reads: string;
  state: string;
  status: string;
  type: string;
  uploader: string;
  url: string;
  numberofchapter: number;
};

const ListStoryContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
});

function ListNew() {
  const [datas, setDatas] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewlist();
        if (Array.isArray(data)) {
          setDatas(data as ItemType[]); // Type assertion to ItemType[]
        } else {
          console.error('Data received is not an array');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    console.log(datas);
    fetchData();
  }, []);

  return (
    <div id="1">
      <Typography variant="h4" gutterBottom>
        NovelNew
      </Typography>
      <ListStoryContainer>
        {datas.map((data, index) => (
          <Grid item key={index} sx={{ height: '100%' }}>
            <Stack sx={{ height: '100%' }}>
              <StoryNew data={data} />
            </Stack>
          </Grid>
        ))}
      </ListStoryContainer>
    </div>
  );
}

export default ListNew;
