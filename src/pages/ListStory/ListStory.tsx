import React from 'react';
import StoryItem from '../../components/StoryItem/StoryItem';
import './ListStory.scss';
import data from '../../data/items.json'; // Điều chỉnh đường dẫn và tên tệp JSON

function ListStory() {
  const datas = data; // Sử dụng dữ liệu từ tệp JSON giả

  return (
    <div className="list-story">
      {datas.map((data, index) => (
        <StoryItem key={index} data={data} />
      ))}
    </div>
  );
}
export default ListStory;
