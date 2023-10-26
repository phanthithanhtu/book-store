import React from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import './ListStory.scss';
import data from '../../data/items.json';

function ListStory() {
  const datas = data;

  return (
    <div className="list-story">
      {datas.map((data, index) => (
        <StoryItem key={index} data={data} />
      ))}
    </div>
  );
}
export default ListStory;
