import React from 'react';
import Layout from '../../components/Layout/Layout';
import ListStory from '../ListStory/Test';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import Slide from '../../components/slide/slide';
import Listtop from '../ListStory/ListToptrending';
const MainContent = styled('div')({
  padding: '20px',
  backgroundColor: '#f0f0f0',
  minHeight: '100vh',
  margin: '30px',
  borderRadius: '10px !important',
});

const Home = () => {
  return (
    <Layout>
      <Slide />
      <Container>
        <MainContent>
          <ListStory key={'list1'} />
          <Listtop key={'list2'} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default Home;
