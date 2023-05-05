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
import { Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useLogOut } from "../../hooks/logOut";
import {
  useProfile,
  useResetPass,
  useChangeUsername,
} from "../../hooks/profile";

export default function Profile() {
  const logOut = useLogOut();
  //data
  const [email, setEmail] = useState("example@gmail.com");
  const [numberTasks, setNumberTasks] = useState("0");
  const [username, setUsername] = useState("example");
  const [linkSent, setLinkSent] = useState(false);
  const [linkSentText, setLinkSentText] = useState("Success!");
  const [usernameChanged, setUsernameChanged] = useState();

  //Modal
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const changeUsername = () => {
    if (usernameChanged == null || usernameChanged.length == 0) {
      setError(true);
      return;
    }
    resetUsername();
  };

  //fetching data
  const profileData = useProfile(setEmail, setNumberTasks, setUsername);
  const resetPassword = useResetPass(email, setLinkSent);
  const resetUsername = useChangeUsername(
    email,
    usernameChanged,
    setLinkSentText,
    setLinkSent,
    setUsernameChanged,
    setUsername,
    usernameChanged,
    handleClose
  );

  useEffect(() => {
    profileData();
  }, []);

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

              <Button
                className={style.reset}
                variant="contained"
                onClick={logOut}
              >
                Log out
              </Button>
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
                    setLinkSentText("Success! Check email to reset password");
                    resetPassword();
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

        <Snackbar
          open={linkSent}
          autoHideDuration={2000}
          onClose={() => {
            setLinkSent(false);
          }}
          sx={{ maxWidth: "50%" }}
        >
          <Alert sx={{ marginX: "20px", marginY: "20px" }}>
            {linkSentText}
          </Alert>
        </Snackbar>

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
