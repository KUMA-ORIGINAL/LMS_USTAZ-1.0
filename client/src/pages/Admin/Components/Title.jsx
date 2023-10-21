import { Typography, useTheme } from "@mui/material";

const Title = ({title}) => {
  return (
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
  )
}

export default Title