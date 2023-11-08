import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled } from '@mui/system';
import { Story } from '../../models/Story';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledStoryCard = styled('div')({
  display: 'flex',
  margin: '10px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  height: '100%',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)', // Increase size when hovered
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)', // Add box shadow
  },
  '&:hover $Checkbox': {
    opacity: 1, // Show checkbox on hover
  },
});

const StyledImgWrap = styled('div')({
  flex: '0 0 120px',
});

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
});

const StyledContent = styled('div')({
  flex: 1,
  padding: '10px',
});

const StyledTitle = styled('h2')({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '1.25rem',
  margin: 0,
  maxHeight: '30px',
});

const StyledTitleLink = styled(Link)({
  textDecoration: 'none',
  color: '#000',
  fontSize: '17px',
});

const StyledDescription = styled('div')({
  fontSize: '1rem',
  color: '#777',
  maxHeight: '20px',
  overflow: 'hidden',
});

const StyledInfo = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
});

const StyledAuthor = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: '#777',
});

const StyledAuthorIcon = styled('i')({
  marginRight: '0.25rem',
});

const StyledType = styled('div')({
  padding: '4px',
  border: '1px solid #007bff',
  color: '#007bff',
});

const StyledRating = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  color: '#777',
  marginTop: '8px',
});

const StyledStarIcon = styled('i')({
  marginRight: '4px',
  color: '#FFD700', // Màu vàng cho sao
});

const StoryTop: React.FC<{ data: Partial<Story> }> = ({ data }) => {
  return (
    <StyledStoryCard>
      <StyledImgWrap>{data?.image && <StyledImage src={data.image} alt="" />}</StyledImgWrap>
      <StyledContent>
        <StyledTitle>
          <StyledTitleLink to={`/novel/${data?.url}`}>{data?.name}</StyledTitleLink>
        </StyledTitle>
        <StyledDescription>{data?.description}</StyledDescription>
        {data?.author && (
          <StyledInfo>
            <StyledAuthor>
              <StyledAuthorIcon className="bx bx-edit-alt" />
              {data?.author}
            </StyledAuthor>
          </StyledInfo>
        )}
        <StyledRating>
          {Array.from({ length: 5 }).map((_, index) => (
            <StyledStarIcon
              key={index}
              className={`bx ${
                data?.rating && parseFloat(data.rating) >= index + 1 ? 'bxs-star' : 'bx-star'
              }`}
            />
          ))}
          <span>
            {data?.rating ? Number(data.rating).toFixed(1) : '0.0'}/5 ({data?.numberofrating} đánh
            giá)
          </span>
        </StyledRating>
        <Checkbox {...label} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      </StyledContent>
    </StyledStoryCard>
  );
};

export default StoryTop;
