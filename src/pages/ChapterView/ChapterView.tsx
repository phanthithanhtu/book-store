import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Chapter.scss';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { getChapterByNumber } from '../../data/api';
import { Chapter } from '../../models/Chapter';
import { AxiosError } from 'axios';
import './Chapter.scss';
function ChapterView() {
  const { chapnum, url } = useParams();
  const navigate = useNavigate();

  const [chapter, setChapter] = useState<Chapter | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { refetch: refetchChapter } = useQuery<Chapter, AxiosError>(
    ['get-chapter', url, chapnum],
    () => getChapterByNumber(url, chapnum || ''), // Handling chapnum being undefined
    {
      onSuccess: (data) => {
        setChapter(data);
      },
      onError: (err) => {
        // Handle error, e.g., redirect to a different page
        navigate('/error');
      },
    },
  );

  useEffect(() => {
    if (chapter) {
      if (contentRef.current) {
        contentRef.current.innerHTML = chapter.content || '';
      }
    }
    window.scrollTo(0, 0);
  }, [chapter]);

  const goToPreviousChapter = () => {
    // Navigate to the previous chapter
    const prevChapterNumber = parseInt(chapnum || '1', 10) - 1;
    navigate(`/truyen/${url}/${prevChapterNumber}`);
  };

  const goToNextChapter = () => {
    // Navigate to the next chapter
    const nextChapterNumber = parseInt(chapnum || '1', 10) + 1;
    navigate(`/truyen/${url}/${nextChapterNumber}`);
  };

  return (
    <div className="main" style={{ backgroundColor: '#ced9d9', paddingTop: '30px' }}>
      <div className="container" style={{ paddingBottom: '3rem' }}>
        <h1>{chapter?.id}</h1>
        <div ref={contentRef} id="chapter__content">
          {chapter?.content ? chapter.content : <Skeleton count={20} />}
        </div>
        <div className="onClick">
          <button onClick={goToPreviousChapter}>Previous </button>
          <button onClick={goToNextChapter}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ChapterView;
