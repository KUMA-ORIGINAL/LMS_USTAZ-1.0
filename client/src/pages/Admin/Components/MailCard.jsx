import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const MailCard = ({ phoneNumber, name }) => {
  return (
    <Paper >
      <Typography variant="h6">Заявка</Typography>
      <Typography>Номер телефона: {phoneNumber}</Typography>
      <Typography>Имя: {name}</Typography>
    </Paper>
  );
};

export default MailCard;
