import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import { useUser } from '../../pages/Login/UserContext';

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
  position: 'relative',
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

const MenuItem = styled(Button)({
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
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  return (
    <StyledHeader>
      <StyledNavWrap>
        <Stack spacing={2} direction="row">
          <NavButton to="/home">Home</NavButton>
          <NavButton to="/theloai">Browse</NavButton>
        </Stack>
        <RightSection>
          {user && (
            <>
              <span>Welcome, {user}!</span>
              <SettingsIconStyled onClick={toggleSettings} />
              {showSettings && (
                <VerticalMenu>
                  {menu.USER.map((item, index) => (
                    <Link key={index} to={item.path} style={{ textDecoration: 'none' }}>
                      <MenuItem startIcon={<span className={item.icon} />} variant="contained">
                        {item.display}
                      </MenuItem>
                    </Link>
                  ))}
                </VerticalMenu>
              )}{' '}
            </>
          )}
        </RightSection>
      </StyledNavWrap>
    </StyledHeader>
  );
}
