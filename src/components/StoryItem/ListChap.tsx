import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/system';

interface Chapter {
  chapternumber: number;
  chaptername: string;
  // Add other properties as needed
}

const ListChapterContainer = styled('div')(({ theme }) => ({
  margin: '15px 0px',
}));

const ChapterLink = styled(Link)(({ theme }) => ({
  fontSize: '16px',
  marginBottom: theme.spacing(2), // Adjust the spacing between chapters as needed
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
}));

function ListChapter() {
  const url = useParams().url || '';
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://becnpmm.vercel.app/api/novels/novel/${url}/mucluc`,
        );
        setChapters(response.data.data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <ListChapterContainer className="listchapter fs-16">
      <h3>Danh sách chương</h3>
      {chapters.map((item, index) => (
        <ChapterLink
          to={`/truyen/${url}/${item.chapternumber}`}
          key={index}
          className="text-overflow-1-lines"
        >
          {item.chaptername} {/* Add other properties/content as needed */}
        </ChapterLink>
      ))}
    </ListChapterContainer>
  );
}

export default ListChapter;
