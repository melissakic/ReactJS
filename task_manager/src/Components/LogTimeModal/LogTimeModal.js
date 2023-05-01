import CustomModal from "../../UI/Modal/CustomModal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";

export default function LogTimeModal(props) {
  return (
    <CustomModal open={props.openLog} onClose={props.handleClose}>
      <Stack alignItems="center" justifyContent="center">
        <TextField
          sx={{
            marginX: "40%",
            marginTop: "10px",
          }}
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
        />
        <Button
          onClick={props.logTime}
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
