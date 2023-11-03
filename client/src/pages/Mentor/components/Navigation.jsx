import { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { ColorModeContext, tokens } from "../../../theme";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "grey !important",
        },
        "& .pro-menu-item.active": {
          color: "#0063f7 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Ustaz LMS
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
            
              style={{
                backgroundColor: "transparent", // Устанавливаем фон элемента в прозрачный цвет
                color: theme.palette.mode === "dark" ? "#fff" : "#000", // Устанавливаем цвет текста
                cursor: "pointer", // Устанавливаем курсор на указатель при наведении
              }}
              onClick={colorMode.toggleColorMode}
              icon={
                theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )
              }
            >

              <Typography>
                {theme.palette.mode === "dark" ? "Темная" : "Светлая"}
              </Typography>
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            General
            </Typography>

            <Item
              title="Главная"
              to="/mentor/home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Расписание"
              to="/mentor/schedule"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Course
            </Typography>
            <Item
              title="Лекции"
              to="/mentor/lecture"
              icon={<LibraryBooksOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Посещения"
              to="/mentor/visits"
              icon={<AddTaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Оценки"
              to="/mentor/student-rating"
              icon={<GradeOutlinedIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Студенты"
              to="/mentor/student-list"
              icon={<PeopleAltOutlinedIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Profile
            </Typography>
            <Item
              title="Профиль"
              to="/mentor/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
