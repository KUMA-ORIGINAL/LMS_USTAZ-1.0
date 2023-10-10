import { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ColorModeContext, tokens } from "../../../theme";

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
          color: "#3F8CFF !important",
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
                  USTA CRM
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
                {theme.palette.mode === "dark" ? "Dark" : "Light"}
              </Typography>
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Home
            </Typography>

            <Item
              title="Dashboard"
              to="/admin/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Mentors"
              to="/admin/view-mentors"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Courses"
              to="/admin/view-courses"
              icon={<LaptopChromebookOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Students"
              to="/admin/view-students"
              icon={<LocalLibraryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mail"
              to="/admin/view-mail"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Stat
            </Typography>
            <Item
              title="Profit"
              to="/admin/stat-profit"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Expenses"
              to="/admin/stat-expenses"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sales Funnel"
              to="/admin/sales-funnel"
              icon={<FilterAltIcon />}
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
