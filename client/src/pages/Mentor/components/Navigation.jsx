import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from "../../../theme";


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
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(location.pathname);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          maxWidth: "220px !important",
          minWidth: "200px !importtant"
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,

        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 30px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "grey !important",
        },
        "& .pro-menu-item.active": {
          color: "grey !important",
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
                  Ментор
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {isCollapsed ? "" : "Главная"}
            </Typography>

            <Item
              title="Панель"
              to="/mentor/home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Обьявления"
              to="/mentor/home"
              icon={<NewspaperOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Button
              sx={{
                m: "15px 0 5px 20px",
                bgcolor: colors.blueAccent[700],
                ':hover': { bgcolor: colors.blueAccent[400] },
                maxWidth: isCollapsed ? "30px" : "none",
                minWidth: "0 !important"
              }}
              variant="contained"
              startIcon={isCollapsed ? null : <AddIcon />}
            >
              <Link to="/mentor/create-course">{isCollapsed ? <AddIcon /> : 'Новая группа'}</Link>
            </Button>
        
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "20px 0 5px 20px" }}
            >
              {isCollapsed ? "" : "Группа"}
            </Typography>
            <Item
              title="Занятия"
              to="/mentor/schedule"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
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
              icon={<GradeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Проекты"
              to="/mentor/student-projects"
              icon={<AssignmentTurnedInOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Студенты"
              to="/mentor/student-list"
              icon={<PeopleAltOutlinedIcon />}
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
