import style from "./EmailInput.module.css";
import TextField from "@mui/material/TextField";

export default function EmailInput(props) {
  return (
    <TextField
      {...props.register("email", {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      })}
      error={props.errors.email}
      label={props.errors.email ? "Enter email in fromat x@x.x" : "Email"}
      variant="filled"
      className={style.input}
      onChange={(event) => {
        props.setEmail(event.target.value);
      }}
    ></TextField>
  );
}
