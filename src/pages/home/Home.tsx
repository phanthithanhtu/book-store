import Layout from '../../components/Layout/Layout';
import ListStory from '../ListStory/ListStory';
import './Home.scss';

function Home() {
  return (
    <>
      <Layout>
        <div className="main-content">
          <ListStory key={'list'} />
        </div>
      </Layout>
    </>
  );
}

export default Home;
