import CustomModal from "../../UI/Modal/CustomModal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useEditTime } from "../../hooks/editTime";

export default function LogTimeModal(props) {
  const [loggedTime, setLoggedTime] = useState("");
  const editTime = useEditTime(props.editPath, loggedTime, props.setTasks);
  const logTime = () => {
    editTime();
    setLoggedTime("");
    props.handleClose();
  };

  return (
    <CustomModal open={props.openLog} onClose={props.handleClose}>
      <Stack alignItems="center" justifyContent="center">
        <TextField
          sx={{
            marginX: "40%",
            marginTop: "10px",
          }}
          type="number"
          value={loggedTime}
          onChange={(event) => setLoggedTime(event.target.value)}
          inputProps={{ min: 0 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
        />
        <Button
          onClick={logTime}
          variant="contained"
          sx={{
            backgroundColor: "#2A2F4F",
            marginTop: "10px",
          }}
        >
          Save
        </Button>
      </Stack>
    </CustomModal>
  );
}
