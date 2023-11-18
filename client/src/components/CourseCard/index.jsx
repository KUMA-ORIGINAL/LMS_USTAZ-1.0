import React from 'react'
import ProgramImg from "../../assets/images/shaking-hands.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import {  useTheme } from "@mui/material";
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import { tokens } from "../../theme";


const CourseCard = ({data}) => {
  const [progress, setProgress] = React.useState(10);
  const { name, mentor, duration, photo } = data;
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Card sx={{ display: 'flex',justifyContent:"space-between", width:"320px",maxWidth:"320px", maxHeight:"155px", background:colors.primary[400], cursor:"pointer" }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent >
        <Typography  sx={{fontSize:"15px"}}component="div" variant="h5">
          {name || "Course"}
        </Typography>
        <Typography sx={{fontSize:"12px"}} variant="subtitle1" color="text.secondary" component="div">
          {mentor || "Mentor"}
        </Typography>
      </CardContent>
      <CardContent>
      <LinearProgressWithLabel value={progress} />
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: "5px",}}>
          <TimelapseOutlinedIcon />
          <Typography sx={{fontSize:"12px"}} variant="subtitle1" color="text.secondary" component="div" >
          {duration || "0"} месяцев
        </Typography>
      </Box>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 150 }}
      image={photo || ProgramImg}
      title={name || "title"}
    />
  </Card>
  )
}

export default CourseCard;


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', columnGap:"10px", marginBottom:"7px"}}>
      <Box sx={{ width: '100%', }}>
        <LinearProgress color='info' variant="determinate"  {...props} />
      </Box>
      <Box >
        <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}