import ProjectImg from "../../assets/images/project.png";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const ProjectCard = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { title, category, date, student } = data;
  return (
    <Card sx={{ maxWidth: 300, background:colors.primary[400]}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: colors.blueAccent[500] }} aria-label="project">
          R
        </Avatar>
      }
      title={student}
      subheader={date}
    />
    <CardMedia
      component="img"
      height="194"
      image={ProjectImg}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body1" color={colors.blueAccent[600]} sx={{ fontWeight:"bold", background:"white", padding:"3px", margin:"0px 0px 10px 0px", borderRadius:"2px"}}>
        {category}
      </Typography>
      <Typography variant="h5">
        {title}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton  aria-label="view" sx={{margin:"0px  !important"}}>
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
      <IconButton aria-label="edit"  sx={{margin:"0px !important"}}>
        {true ? <EditOutlinedIcon /> :  <EditOutlinedIcon />}
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default ProjectCard;