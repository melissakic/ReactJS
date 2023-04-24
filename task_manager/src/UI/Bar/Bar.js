import style from "./Bar.module.css";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BarChartIcon from "@mui/icons-material/BarChart";
import Tooltip from "@mui/material/Tooltip";
import TooggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TooggleButton from "@mui/material/ToggleButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import avatar from "./../LandingPage/Avatar/avatar.jpg";

export default function Bar() {
  return (
    <AppBar position="static" className={style.bar}>
      <Toolbar>
        <Typography sx={{ flexGrow: 0.5 }} variant="h5">
          TaskPlanner
        </Typography>
        <TooggleButtonGroup value="bs" sx={{ backgroundColor: "white" }}>
          <TooggleButton value="en">English</TooggleButton>
          <TooggleButton value="bs">Bosnian</TooggleButton>
        </TooggleButtonGroup>
        <Box className={style.links}>
          <Tooltip title="All tasks">
            <IconButton>
              <AssignmentIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="My tasks">
            <IconButton>
              <AssignmentIndIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Statistics">
            <IconButton>
              <BarChartIcon className={style.icons} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton>
              <AccountCircleIcon className={style.icons} />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
