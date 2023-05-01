import CustomModal from "../../UI/Modal/CustomModal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

export default function EditModal(props) {
  return (
    <CustomModal open={props.openEdit} onClose={props.handleCloseEdit}>
      <Stack alignItems="center" justifyContent="center">
        <Stack direction="row">
          <TextField label="Title" sx={{ marginX: "5px" }} />
          <TextField label="Description" sx={{ marginX: "5px" }} />
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Task deadline" />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          label="Estimated time"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
          sx={{ marginY: "10px" }}
        />
        <Stack direction="row">
          <ToggleButtonGroup
            color="primary"
            value={props.alignment}
            exclusive
            onChange={props.handleChange}
            aria-label="Platform"
            sx={{
              marginRight: "5px",
              backgroundColor: "#2A2F4F",
            }}
          >
            <ToggleButton value="High" sx={{ color: "white" }}>
              High
            </ToggleButton>
            <ToggleButton value="Medium" sx={{ color: "white" }}>
              Medium
            </ToggleButton>
            <ToggleButton value="Low" sx={{ color: "white" }}>
              Low
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            color="primary"
            value={props.status}
            exclusive
            onChange={props.handleChangeStatus}
            aria-label="Platform"
            sx={{ marginLeft: "5px", backgroundColor: "#2A2F4F" }}
          >
            <ToggleButton value="Active" sx={{ color: "white" }}>
              Active
            </ToggleButton>
            <ToggleButton value="Completed" sx={{ color: "white" }}>
              Completed
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Button
          onClick={props.edit}
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
