import style from "./Username.module.css";
import TextField from "@mui/material/TextField";

export default function UsernameInput(props) {
  return (
    <TextField
      {...props.register("username", {
        required: true,
      })}
      error={props.errors.username}
      label={props.errors.username ? "Can't be empty" : "Username"}
      variant="filled"
      className={style.input}
      onChange={(event) => {
        props.setInput(event.target.value);
      }}
    ></TextField>
  );
}
