import React, { useState, useEffect } from 'react'
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
import UserService from '../../services/UserService';


const CourseCard = ({data}) => {
  const [progress, setProgress] = React.useState(10);
  const { name, mentor, duration,created, photo } = data;
  const [mentorName, setMentorName] = useState("")
  useEffect(() => {
    const getMentorFullName = async (mentorId) => {
      try {
        const response = await UserService.getUser(mentorId);
        console.log(response.data);
        setMentorName(response.data.first_name)
      } catch (e) {
        console.log(e);
      }
    };

    const calculateProgress = () => {
      const startDate = new Date(created);
      const currentDate = new Date();
      const elapsedTime = currentDate - startDate;
      const courseDurationInMilliseconds = duration * 30 * 24 * 60 * 60 * 1000; // Assuming duration is in months

      const calculatedProgress = (elapsedTime / courseDurationInMilliseconds) * 100;
      setProgress(calculatedProgress >= 100 ? 100 : calculatedProgress);
    };

    getMentorFullName(mentor);
    calculateProgress();

    const timer = setInterval(() => {
      calculateProgress();
    }, 60000); // Update progress every minute

    return () => {
      clearInterval(timer);
    };
  }, [mentor, duration, created]);
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
          {mentorName || "Mentor"}
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