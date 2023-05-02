import style from "./NavigationBar.module.css";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BarChartIcon from "@mui/icons-material/BarChart";
import Tooltip from "@mui/material/Tooltip";
import TooggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TooggleButton from "@mui/material/ToggleButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Bar() {
  const navigation = useNavigate();
  return (
    <AppBar position="static" className={style.bar}>
      <Toolbar>
        <Typography sx={{ flexGrow: 0.5 }} variant="h5" className={style.name}>
          TaskPlanner
        </Typography>
        <TooggleButtonGroup value="bs" sx={{ backgroundColor: "white" }}>
          <TooggleButton value="en">English</TooggleButton>
          <TooggleButton value="bs">Bosnian</TooggleButton>
        </TooggleButtonGroup>
        <Box className={style.links}>
          <Tooltip title="All tasks">
            <IconButton
              onClick={() => {
                navigation("/alltasks");
              }}
            >
              <AssignmentIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="My tasks">
            <IconButton
              onClick={() => {
                navigation("/mytasks");
              }}
            >
              <AssignmentIndIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Statistics">
            <IconButton
              onClick={() => {
                navigation("/chart");
              }}
            >
              <BarChartIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton
              onClick={() => {
                navigation("/profile");
              }}
            >
              <AccountCircleIcon className={style.icons} />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
