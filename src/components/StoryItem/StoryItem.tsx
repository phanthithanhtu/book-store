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
  fontSize: '1.25rem',
  margin: 0,
});

const StyledTitleLink = styled(Link)({
  textDecoration: 'none',
  color: '#000',
});

const StyledDescription = styled('div')({
  fontSize: '1rem',
  color: '#777',
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

const StoryItem: React.FC<{ data: Partial<Story> }> = ({ data }) => {
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
            <StyledType>Type</StyledType>
          </StyledInfo>
        )}
        <Checkbox {...label} icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      </StyledContent>
    </StyledStoryCard>
  );
};

export default StoryItem;
