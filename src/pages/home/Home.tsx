import React from 'react';
import Layout from '../../components/Layout/Layout';
import ListStory from '../ListStory/ListStory';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

const MainContent = styled('div')({
  padding: '20px',
  backgroundColor: '#f0f0f0',
  minHeight: '100vh',
});

const Home = () => {
  return (
    <Layout>
      <Container>
        <MainContent>
          <ListStory key={'list'} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default Home;
