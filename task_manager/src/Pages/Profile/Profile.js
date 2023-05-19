import style from "./Profile.module.css";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
import CustomCard from "../../UI/CustomCard/CustomCard";
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
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
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
    if (usernameChanged === undefined || usernameChanged.length === 0) {
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
  }, [profileData]);

  return (
    <>
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>{t("profile")}</p>
          <Stack className={style.userData}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className={style.data}
            >
              <p className={style.info}>{email}</p>
              <Tooltip title={t("emailTooltip")}>
                <EmailIcon sx={{ fontSize: "35px", color: "white" }} />
              </Tooltip>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className={style.data}
            >
              <p className={style.info}>{numberTasks}</p>
              <Tooltip title={t("tasksTooltip")}>
                <AssignmentIndIcon sx={{ fontSize: "35px", color: "white" }} />
              </Tooltip>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className={style.data}
            >
              <p className={style.info}>{username}</p>
              <Tooltip title={t("usernameTooltip")}>
                {<PersonIcon sx={{ fontSize: "35px", color: "white" }} />}
              </Tooltip>
            </Stack>
          </Stack>
          <Stack>
            <Button
              className={style.reset}
              variant="contained"
              onClick={() => {
                setLinkSentText(t("resetPassFeedback"));
                resetPassword();
              }}
            >
              {t("resetPass")}
            </Button>
            <Button
              className={style.reset}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              {t("resetUsername")}
            </Button>
            <Button
              className={style.reset}
              variant="contained"
              onClick={logOut}
            >
              {t("logOut")}
            </Button>
          </Stack>
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
          label={t("username")}
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
