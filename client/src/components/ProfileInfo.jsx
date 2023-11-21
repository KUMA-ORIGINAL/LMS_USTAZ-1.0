import { IconButton } from '@mui/material';
import styled from 'styled-components';


//import icons
import EditIcon from '@mui/icons-material/Edit';


//styles
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const StyledTh = styled.th`
  padding: 18px;
  border: 1px solid #ddd;
  text-align: left;
  width: 180px;
`;

const StyledInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: gray;
  font-weight: bold;
`;

const StyledTd = styled.td`
  width: 100%;
  padding: 18px;
  border: 1px solid #ddd;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <StyledTable className="profile-info">
      <tr>
        <StyledTh>Фамилия</StyledTh>
        <StyledTd>
          <StyledInput type="text" value={storedUserData.last_name || ''} />
          <IconButton sx={{ padding: '2px' }}>
            <EditIcon />
          </IconButton>
        </StyledTd>
      </tr>
      <tr>
        <StyledTh>Имя</StyledTh>
        <StyledTd>
          <StyledInput type="text" value={storedUserData.first_name || ''} />
          <IconButton sx={{ padding: '2px' }}>
            <EditIcon />
          </IconButton>
        </StyledTd>
      </tr>
      <tr>
        <StyledTh>Telegram</StyledTh>
        <StyledTd>
          <StyledInput type="text" value={storedUserData.first_name || ''} />
          <IconButton sx={{ padding: '2px' }}>
            <EditIcon />
          </IconButton>
        </StyledTd>
      </tr>
      <tr>
        <StyledTh>Номер телефона</StyledTh>
        <StyledTd>
          <StyledInput type="text" value={storedUserData.phone_number || ''} />
          <IconButton sx={{ padding: '2px' }}>
            <EditIcon />
          </IconButton>
        </StyledTd>
      </tr>
      <tr>
        <StyledTh>Пароль</StyledTh>
        <StyledTd>
          <StyledInput type="text" value="*******" />
          <IconButton sx={{ padding: '2px' }}>
            <EditIcon />
          </IconButton>
        </StyledTd>
      </tr>
    </StyledTable>
  );
};

export default ProfileInfo;
