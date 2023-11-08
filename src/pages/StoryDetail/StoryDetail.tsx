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
            <div className="img-wrap">
              <img src={truyen?.image} alt="" />
            </div>

            <div className="heroSide__main">
              <div className="heroSide__main__title">
                <h2>{truyen?.name}</h2>
              </div>
              <ul className="heroSide__main__info row">
                <li className="box"> {truyen?.author}</li>
                <li className="box"> {truyen?.status}</li>
                <li className="box"> {truyen?.type}</li>
              </ul>
              <ul className="heroSide__main__statistic row">
                <li>
                  <span className="fs-16 bold">{truyen?.numberofchapter || '0'}</span>
                  <span>Chương</span>
                </li>
                <li>
                  <span className="fs-16 bold">{truyen?.reads || '0'}</span>
                  <span>Lượt đọc</span>
                </li>
              </ul>
              <div className="heroSide__main__rate">
                <div className="heroSide__main__rate-wrap fs-16 d-flex">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      className={`bx ${
                        truyen?.rating && parseFloat(truyen.rating) >= num ? 'bxs-star' : 'bx-star'
                      }`}
                    ></span>
                  ))}
                  <span>
                    &nbsp;{truyen?.rating ? Number(truyen.rating).toFixed(1) : '0.0'}/5 (
                    {truyen?.numberofrating} đánh giá)
                  </span>
                </div>
              </div>
            </div>
            <div className="title">
              <button> ĐỌC TRUYỆN </button>
            </div>
          </div>
        )}
        <div className="heroSide__main__description">
          <h2>Description</h2>
          <p>{truyen?.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export default StoryDetail;
