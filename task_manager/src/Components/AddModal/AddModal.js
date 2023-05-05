import CustomModal from "../../UI/Modal/CustomModal";
import {
  Stack,
  TextField,
  InputAdornment,
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";

export default function AddModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <CustomModal open={props.openAdd} onClose={props.handleCloseAdd}>
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <TextField
          label="Title"
          {...register("title", {
            required: true,
          })}
          error={errors.title ? true : false}
        />
        <TextField
          label="Description"
          {...register("desc", {
            required: true,
          })}
          error={errors.desc ? true : false}
        />
        <TextField
          type="number"
          label="Estimated time"
          {...register("estimated", {
            required: true,
          })}
          error={errors.estimated ? true : false}
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
        />
        <Autocomplete
          options={props.allUsers}
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue);
          }}
          inputValue={props.inputValue}
          onInputChange={(event, newInputValue) => {
            props.setInputValue(newInputValue);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Assign to user" />
          )}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Deadline"
              value={props.dateAdd}
              onChange={(newValue) => props.setDateAdd(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <ToggleButtonGroup
          color="primary"
          value={props.statusAdd}
          exclusive
          onChange={(event, newStatus) => {
            props.setStatusAdd(newStatus);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="Active">Active</ToggleButton>
          <ToggleButton value="Completed">Completed</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={props.priorityAdd}
          exclusive
          onChange={(event, newPriority) => {
            props.setPriorityAdd(newPriority);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="High">High</ToggleButton>
          <ToggleButton value="Medium">Medium</ToggleButton>
          <ToggleButton value="Low">Low</ToggleButton>
        </ToggleButtonGroup>

        <Button
          onClick={handleSubmit(props.addTasks)}
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
