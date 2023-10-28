import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>
              Trang chủ
            </Button>
          </Link>
          <Link to="/theloai">
            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>
              Thể Loại
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}
