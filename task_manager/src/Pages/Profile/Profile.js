import style from "./Profile.module.css";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
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
import PersonIcon from "@mui/icons-material/Person";
import ResetMod from "../Login/PassResetModal/ResetMod";

export default function Profile() {

  const [email, setEmail] = useState("example@gmail.com");
  const [numberTasks, setNumberTasks] = useState("0");
  const [username, setUsername] = useState("example");
  const [linkSent, setLinkSent] = useState(false);
  const [linkSentText, setLinkSentText] = useState("Success!");

  //Modal
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [usernameChanged, setUsernameChanged] = useState();
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const changeUsername = () => {
    if (usernameChanged == null || usernameChanged.length == 0) {
      setError(true);
      return;
    }
    //promijeni u bazi
    setLinkSentText(
      "Success! You changed your username to " +
        usernameChanged +
        ". Changes will be visible soon."
    );
    setLinkSent(true);
    setUsernameChanged(null);
    handleClose();
  };

  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <Grid container justify="center" align="center">
            <Grid item md={6} xs={12}>
              <AccountCircleIcon
                className={style.profile}
                sx={{ flexGrow: 1 }}
              />
              {linkSent && (
                <Alert sx={{ marginX: "20px", marginY: "20px" }}>
                  {linkSentText}
                </Alert>
              )}
            </Grid>
            <Grid item md={6} xs={12} className={style.info}>
              <p className={style.title}>My profile</p>
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
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  className={style.data}
                >
                  <p>{username}</p>
                  <Tooltip title="Your username">
                    {<PersonIcon sx={{ fontSize: "35px" }} />}
                  </Tooltip>
                </Stack>
              </Stack>
              <Stack>
                <Button
                  className={style.reset}
                  variant="contained"
                  onClick={() => {
                    setLinkSent(true);
                    setLinkSentText(
                      "Success! Password link sent. Check email for steps to reset your password"
                    );
                  }}
                >
                  Send password reset link
                </Button>
                <Button
                  className={style.reset}
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  Change username
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CustomCard>

        <ResetMod
          label="Username"
          open={open}
          onClose={handleClose}
          error={error}
          setEmailReset={setUsernameChanged}
          resetPassword={changeUsername}
        />
      </div>
    </>
  );
}
