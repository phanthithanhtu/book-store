import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import data from '../../data/items.json';
import Browse from '../../components/Browses/Browse';

const BrowsePage = () => {
  const [items, setItems] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('male');

  const StyledButton = styled(Button)({
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: '#ccc',
    color: '#000',
    '&.selected': {
      backgroundColor: '#3f51b5',
      color: '#fff',
    },
  });

  const StyledContainer = styled('div')({
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  });

  const StyledButtonsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) => item.theloai === selectedCategory);

  return (
    <StyledContainer>
      <StyledButtonsWrapper>
        <StyledButton
          className={selectedCategory === 'male' ? 'selected' : ''}
          onClick={() => handleCategoryClick('male')}
        >
          Male
        </StyledButton>
        <StyledButton
          className={selectedCategory === 'female' ? 'selected' : ''}
          onClick={() => handleCategoryClick('female')}
        >
          Female
        </StyledButton>
      </StyledButtonsWrapper>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={6} sm={4} md={3} lg={3}>
            <Browse item={item} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default BrowsePage;
