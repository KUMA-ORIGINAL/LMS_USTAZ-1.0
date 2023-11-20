import * as React from 'react';
import { useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import {  useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { ColorModeContext, tokens } from "../../theme";
import { useDispatch } from "react-redux";
import Avatar from '@mui/material/Avatar';
import { logout } from '../../slices/authSlice';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


export default function Header() {
    const navigate = useNavigate();
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);

  }

  const user = JSON.parse(localStorage.getItem("user"));

  const toProfilePage= () => {
    if(user){
        switch (user.role) {
            case 'mentor':
              navigate('/mentor/profile');
              break;
            case 'student':
              navigate('/student/profile');
              break;
            default:
              navigate('/auth');
          }
          handleMenuClose()
    }
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth")
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={toProfilePage}>Профиль</MenuItem>
      <MenuItem onClick={handleLogout}><LogoutIcon/> Выйти</MenuItem>
    </Menu>
  );

  

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box >
      <Box sx={{borderRadius:"5px", height:"70px", background:colors.primary[400]}} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Ustaz LMS
          </Typography>
          <Box sx={{ flexGrow: 1, }} />
          <Box sx={{ display:"flex",alignItems:"center"}}>
            <IconButton size="large" onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
               <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar sx={{ width: 30, height: 30, bgcolor:colors.iceAccent[300] }} alt="Maksat"  
   src={
    user && user.profile_photo
      ? `http://localhost:8000/${user.profile_photo}`
      : "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg"
  }/>
      </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      {
        renderMenu
      }
    </Box>
  );
}