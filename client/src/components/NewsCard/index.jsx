import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const NewsCard = ({ title, description, date, imageUrl }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const truncatedDescription = description.length > 150
  ? description.slice(0, 120) + '...'  
  : description;
  
  return (
    <Card sx={{ maxWidth: 320, maxHeight:400,  background:colors.primary[400]}}>
      <CardMedia
        sx={{ height: 180, cursor:"pointer" }}
        image={imageUrl}
        title={title}
      />
      <CardContent>
      <Typography gutterBottom variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Typography gutterBottom  variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:colors.blueAccent[500], marginLeft:"5px"}} size="small">Узнать больше</Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;