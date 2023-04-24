import style from "./Present.module.css";
import Avatar from "./Avatar/Avatar";
import AuthLinks from "./AuthLinks/AuthLinks";
import Description from "./Description/Description";
import Contact from "./Contact/Contact";
import Stack from "@mui/material/Stack";

export default function Present() {
  return (
    <Stack className={style.main} direction="column">
      <Avatar />
      <AuthLinks />
      <Description />
      <Contact />
    </Stack>
  );
}
