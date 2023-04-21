import style from "./Present.module.css";
import Avatar from "./Avatar/Avatar"
import AuthLinks from "./AuthLinks/AuthLinks";
import Description from "./Description/Description";
import Contact from "./Contact/Contact";

export default function Present() {
  return (
    <div className={style.main}>
      <Avatar/>
      <AuthLinks />
      <Description/>
      <Contact/>
    </div>
  );
}
