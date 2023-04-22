import style from "./PassInput.module.css";
import TextField from "@mui/material/TextField";

export default function PassInput(props) {
  return (
    <TextField
      {...props.register("password", {
        required: true,
        pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
        minLength: 8,
      })}
      error={props.errors.password ? true : false}
      label={
        props.errors.password
          ? "8 characters long, one uppercase and one number at least"
          : "Password"
      }
      variant="filled"
      type="password"
      className={style.input}
      onChange={(event) => {
        props.setPassword(event.target.value);
      }}
    ></TextField>
  );
}
