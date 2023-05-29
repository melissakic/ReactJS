import style from "./ResetMod.module.css";
import CustomModal from "../../Components/UI/Modal/CustomModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function ResetMod(props) {
  const { t } = useTranslation();
  return (
    <CustomModal open={props.open} onClose={props.onClose}>
      <TextField
        error={props.error ? true : false}
        label={props.label}
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
        {t("send")}
      </Button>
    </CustomModal>
  );
}
