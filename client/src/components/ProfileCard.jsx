import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


import styled from 'styled-components';
import { logout } from '../slices/authSlice';

const StyledProfileCard = styled.div`
  width: 300px;
  min-height: 350px;
  padding: 24px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border: 1px solid;

  box-shadow: 1px 3px 5px 5px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileTitle = styled.h3`
  margin: 30px 0px 20px 0px;
  text-align: center;
`;

const ProfileEmail = styled.p`
  font-size: 12px;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 15px 65px;
  border: 1px solid #929292;
  font-size: 14px;
  transition: all 0.4s ease-out;

  &:active {
    background: #1f2a40;
  }
`;

const RoleBadge = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  padding: 15px 20px;
  backdrop-filter: blur(100px);
  border: 1px solid;
`;

const ProfileCard = () => {
  const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
  const { role, last_name, first_name, email, profile_photo, telegram } = storedUserData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      toast.success("Вы успешно вышли с аккаунта!")
      navigate("/auth")
      dispatch(logout())
    } catch (e) {
      toast.error("Не получилось выйти с аккаунта!")
    }
  }

  return (
    <StyledProfileCard>
      <RoleBadge>{role || ''}</RoleBadge>
      <Avatar
        alt={first_name}
        src={`http://localhost:8000/${profile_photo}`}
        sx={{ width: 130, height: 130, bgcolor: "#0d417d", color: "white", border: '1px solid white' }}
      />
      <StyledProfileWrapper>
        <ProfileTitle>{last_name || ''} {first_name || ''}</ProfileTitle>
        <ProfileEmail>{email || ''}</ProfileEmail>
      </StyledProfileWrapper>
      <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
    </StyledProfileCard>
  );
};

export default ProfileCard;
