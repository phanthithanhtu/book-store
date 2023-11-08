import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useUser } from '../../pages/Login/UserContext';
import { queryStore } from '../../store/queryStore';
import { autoPlay } from 'react-swipeable-views-utils';
interface MenuItem {
  path: string;
  display: string;
  icon: string;
}

type MenuType = {
  USER: MenuItem[];
};

const menu: MenuType = {
  USER: [
    {
      path: 'user/profile',
      display: 'Hồ sơ',
      icon: 'bx bx-user',
    },
    {
      path: 'user/change-password',
      display: 'Đổi mật khẩu',
      icon: 'bx bxs-key',
    },
    {
      path: 'user/tu-truyen/reading',
      display: 'Tủ truyện',
      icon: 'bx bx-library',
    },
    {
      path: 'user/setting',
      display: 'Cài đặt',
      icon: 'bx bx-cog',
    },
  ],
};

const SearchBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: '20px', // Đặt góc bo tròn cho thanh tìm kiếm
  padding: '5px',
  marginLeft: 'auto ', // Dịch chuyển thanh tìm kiếm vào giữa header
  marginRight: 'auto',
  border: '1px solid #7e7c7c ',
  '&:hover': {
    border: '1px solid gray',
  },
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  color: 'white',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: 'white',
  '&:hover': {
    backgroundColor: 'gray',
  },
}));

const StyledHeader = styled('nav')(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  position: 'fixed', // Set the header position to fixed
  top: 0, // Position the header at the top of the viewport
  width: '100%', // Make the header span the entire width of the viewport
  zIndex: '999',
}));

const StyledNavWrap = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const RightSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const SettingsIconStyled = styled(SettingsIcon)({
  fontSize: '1.5rem',
  marginLeft: '8px',
});

const VerticalMenu = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'black',
  padding: '10px',
  position: 'absolute',
  top: '100%',
  right: '0',
  zIndex: '1',
});

const MenuItemStyled = styled(Button)({
  textTransform: 'none',
  margin: '5px 0',
  '&:hover': {
    backgroundColor: 'darkgray',
  },
  backgroundColor: 'black',
});

export default function Header() {
  const { user } = useUser();
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const setQuery = queryStore((state) => state.setQuery);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   // Cập nhật giá trị `search`
  //   setSearch(event.target.value);
  // };
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const onClickSearch = () => {
    setQuery(search);
    if (navigate.name !== '/timkiem') {
      navigate('/timkiem');
    }
  };
  return (
    <StyledHeader>
      <StyledNavWrap>
        <Stack spacing={2} direction="row">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <CustomButton variant="contained">Home</CustomButton>
          </Link>
          <Link to="/theloai" style={{ textDecoration: 'none' }}>
            <CustomButton variant="contained">Browse</CustomButton>
          </Link>
          <Link to="/theloai" style={{ textDecoration: 'none' }}>
            <CustomButton variant="contained">Reading</CustomButton>
          </Link>
          <SearchBar>
            <SearchInput
              placeholder="Search..."
              value={searchQuery}
              // onChange={handleSearchChange}
            />
            <SearchIcon onClick={onClickSearch} />
          </SearchBar>
        </Stack>
        <RightSection>
          {/* ... (previous code remains unchanged) */}
          <a href="#1" style={{ textDecoration: 'none' }}>
            <CustomButton variant="contained">NewList</CustomButton>
          </a>
          <a href="#2" style={{ textDecoration: 'none' }}>
            <CustomButton variant="contained">TopTrending</CustomButton>
          </a>
          {/* ... (previous code remains unchanged) */}
        </RightSection>
      </StyledNavWrap>
    </StyledHeader>
  );
}
