import style from "./Profile.module.css";
import Bar from "../../UI/Bar/Bar";
import CustomCard from "../../UI/CustomCard/CustomCard";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";

export default function Profile() {
  const [email, setEmail] = useState("example@gmail.com");
  const [numberTasks, setNumberTasks] = useState("0");
  const [linkSent, setLinkSent] = useState(false);

  return (
    <>
      <Bar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <Grid container justify="center" align="center">
            <Grid item md={6} xs={12}>
              <AccountCircleIcon className={style.profile} />
            </Grid>
            <Grid item md={6} xs={12} className={style.info}>
              <h1>My profile</h1>
              <Stack className={style.userData}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  className={style.data}
                >
                  <p>{email}</p>
                  <Tooltip title="Your email">
                    <EmailIcon sx={{ fontSize: "35px" }} />
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  className={style.data}
                >
                  <p>{numberTasks}</p>
                  <Tooltip title="Number of tasks assigned to you">
                    <AssignmentIndIcon sx={{ fontSize: "35px" }} />
                  </Tooltip>
                </Stack>
              </Stack>
              <Button
                className={style.reset}
                variant="contained"
                onClick={() => {
                  setLinkSent(true);
                }}
              >
                Send password reset link
              </Button>
              {linkSent && (
                <Alert>
                  Succes! Follow instructions in mail to reset your password
                </Alert>
              )}
            </Grid>
          </Grid>
        </CustomCard>
      </div>
    </>
  );
}
