import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './StoryDetail.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStory } from '../../data/api'; // Đảm bảo đường dẫn và tên file API đúng
import { Story } from '../../models/Story';
import Slide from '../../components/slide/slide';
function StoryDetail() {
  const { url } = useParams();
  const [truyen, setTruyen] = useState<Story | null>(null);

  const { isLoading, data, refetch } = useQuery<Story, Error>(
    ['get-story', url || ''], // Sử dụng giá trị mặc định cho 'url' nếu nó là 'undefined'
    () => getStory(url || ''), // Truyền giá trị mặc định cho 'url' vào hàm API
    {
      onSuccess: (data) => {
        setTruyen(data);
        console.log(setTruyen);
      },
    },
  );

  useEffect(() => {
    if (refetch) {
      refetch(); // Kích hoạt 'refetch' nếu 'refetch' tồn tại và là một hàm
    }
  }, [url, refetch]); // Bao gồm 'refetch' như một phụ thuộc

  return (
    <Layout>
      <Slide />
      <div className="main-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="heroSide row">
            <div className="heroSide__img">
              <div className="img-wrap">
                <img src={truyen?.image} alt="" />
              </div>
            </div>

            <div className="heroSide__main">
              <div className="heroSide__main__title">
                <h2>{truyen?.name}</h2>
              </div>
              <p>{truyen?.description}</p>
              {/* Cung cấp thông tin cơ bản khác ở đây */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default StoryDetail;
