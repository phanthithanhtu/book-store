import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  // Add more CSS properties here for the button styling
});

export default function Header() {
  return (
    <nav className="header bg-gray-400 p-4">
      <div className="header__wrap max-w-7xl mx-auto flex justify-between items-center">
        <div className="collapse">
          <button className="navbar__collapse">
            <i className="bx bx-list-ul fs-40"></i>
          </button>
        </div>
        <Stack spacing={2} direction="row">
          <Link to="/home">
            <CustomButton variant="contained">Trang chủ</CustomButton>
          </Link>
          <Link to="/theloai">
            <CustomButton variant="contained">Thể Loại</CustomButton>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}
