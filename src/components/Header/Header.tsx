import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'gray',
  },
  // Add more CSS properties here for the button styling
}));

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <CustomButton variant="contained">{children}</CustomButton>
    </Link>
  );
};

const StyledHeader = styled('nav')(({ theme }) => ({
  backgroundColor: '#ccc',
  padding: theme.spacing(1),
}));

const StyledNavWrap = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavWrap>
        <Stack spacing={2} direction="row">
          <NavButton to="/home">Home</NavButton>
          <NavButton to="/theloai">Browse</NavButton>
        </Stack>
      </StyledNavWrap>
    </StyledHeader>
  );
}
