import React from 'react';
import Layout from '../../components/Layout/Layout';
import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';
import ChapterView from './ChapterView';
import ListChapter from '../../components/StoryItem/ListChap';

const MainContent = styled('div')({
  padding: '20px',
  backgroundColor: '#f0f0f0',
  minHeight: '100vh',
  margin: '30px',
  borderRadius: '10px !important',
});

const ChapPage = () => {
  return (
    <Layout>
      <Container>
        <MainContent>
          <Grid container spacing={2}>
            {/* First List takes up 70% */}
            <Grid item xs={8}>
              <ChapterView key={'list1'} />
            </Grid>
            {/* Second List takes up 30% */}
            <Grid item xs={4}>
              <ListChapter key={'list2'} />
            </Grid>
          </Grid>
        </MainContent>
      </Container>
    </Layout>
  );
};

export default ChapPage;
