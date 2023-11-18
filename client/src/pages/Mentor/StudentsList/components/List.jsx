import React from 'react'
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StudentItem = ({ title }) => {
  return (
    <>
      <ListItem sx={{ cursor: "pointer" }}>
        <ListItemAvatar>
          <Avatar alt={title} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          {title}
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default StudentItem