import style from "./ResetMod.module.css";
import CustomModal from "../../../UI/Modal/CustomModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ResetMod(props) {
  return (
    <CustomModal open={props.open} onClose={props.onClose}>
      <TextField
        error={props.error}
        label="Email"
        variant="filled"
        className={style.input}
        onChange={(event) => {
          props.setEmailReset(event.target.value);
        }}
      ></TextField>
      <Button
        onClick={props.resetPassword}
        variant="contained"
        sx={{
          backgroundColor: "#2A2F4F",
          marginX: "15%",
          marginTop: "5%",
        }}
      >
        Send
      </Button>
    </CustomModal>
  );
}
