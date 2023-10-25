import React from 'react';
import { Link } from 'react-router-dom';
import './Story.scss';
import { Story } from '../../models/Story';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StoryItem: React.FC<{ data: Partial<Story> }> = ({ data }) => {
  return (
    <div className="story-card">
      <div className="story-card__img-wrap">{data?.image && <img src={data.image} alt="" />}</div>
      <div className="story-card__content">
        <h2 className="story-card__tilte">
          <Link to={`/truyen/${data?.url}`}>{data?.name}</Link>
        </h2>
        <div className="story-card__description text-secondary">{data?.description}</div>
        {data?.author && (
          <div className="story-card__info">
            <div className="story-card__author text-overflow-1-lines text-secondary">
              <i style={{ marginRight: '0.25rem' }} className="bx bx-edit-alt"></i>
              {data?.author}
            </div>
          </div>
        )}
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      </div>
    </div>
  );
};

export default StoryItem;
