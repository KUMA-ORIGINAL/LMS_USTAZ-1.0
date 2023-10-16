import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('home');

  // Update the value when the location changes
  useEffect(() => {
    if (location.pathname === '/student/home') {
      setValue('home');
    } else if (location.pathname === '/student/course') {
      setValue('course');
    } else if (location.pathname === '/student/rating') {
      setValue('rating');
    } else if (location.pathname === '/student/profile') {
      setValue('profile');
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const defaultStyle ={
    fontSize:"30px"
  }
  const activeStyle = {
    color: "#156dd1",
    fontSize: '35px', 
  };
  const navStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    borderRadius: "20px 20px 0px 0px",
    padding:"10px"
  };

  return (
    <>
      <Outlet />
      <BottomNavigation
        className="Nav"
        showLabels
        value={value}
        onChange={handleChange}
        style={navStyle}
      >
        <BottomNavigationAction
          value={"home"}
          onClick={() => navigate('/student/home')}
          label="Главная"
          icon={<HomeOutlinedIcon sx={value === 'home' ? activeStyle : defaultStyle} />}
          style={value === 'home' ? activeStyle : defaultStyle}
        />
        <BottomNavigationAction
          value={"course"}
          onClick={() => navigate('/student/course')}
          label="Лекции"
          icon={<LibraryBooksOutlinedIcon sx={value === 'course' ? activeStyle : defaultStyle} />}
          style={value === 'course' ? activeStyle : defaultStyle}
        />
        <BottomNavigationAction
          value={"rating"}
          onClick={() => navigate('/student/rating')}
          label="Рейтинг"
          icon={<StarBorderPurple500SharpIcon sx={value === 'rating' ? activeStyle :defaultStyle} />}
          style={value === 'rating' ? activeStyle : defaultStyle}
        />
        <BottomNavigationAction
          value={"profile"}
          onClick={() => navigate('/student/profile')}
          label="Профиль"
          icon={<AccountCircleOutlinedIcon sx={value === 'profile' ? activeStyle : defaultStyle} />}
          style={value === 'profile' ? activeStyle : defaultStyle}
        />
      </BottomNavigation>
    </>
  );
};

export default Navigation;
