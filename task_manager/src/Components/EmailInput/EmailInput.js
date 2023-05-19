import { useTranslation } from "react-i18next";
import style from "./EmailInput.module.css";
import TextField from "@mui/material/TextField";

export default function EmailInput(props) {
  const { t } = useTranslation();
  return (
    <TextField
      {...props.register("email", {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      })}
      error={props.errors.email ? true : false}
      label={props.errors.email ? t("emailHelp") : "Email"}
      variant="filled"
      className={style.input}
      onChange={(event) => {
        props.setEmail(event.target.value);
      }}
    ></TextField>
  );
}
