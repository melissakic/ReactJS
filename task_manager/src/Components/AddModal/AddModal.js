import CustomModal from "../../UI/Modal/CustomModal";
import { useState, useEffect } from "react";
import { useFetchUsers } from "../../hooks/fetch";
import dayjs from "dayjs";

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
import { usePostTask } from "../../hooks/post";
import { useFetchTasks } from "../../hooks/fetch";

export default function AddModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [allUsers, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const fetch = useFetchUsers(setUsers, setValue);
  const [inputValue, setInputValue] = useState("a");
  const [dateAdd, setDateAdd] = useState(dayjs().add("15", "day"));
  const [statusAdd, setStatusAdd] = useState("Active");
  const [priorityAdd, setPriorityAdd] = useState("Medium");
  const fetchTasks = useFetchTasks(props.setTasks);
  const post = usePostTask(
    title,
    value,
    description,
    estimatedTime,
    dateAdd,
    dayjs(),
    statusAdd,
    priorityAdd
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTasks = () => {
    post();
    setTitle("");
    setDescription("");
    setEstimatedTime("");
    fetchTasks();
    props.handleCloseAdd();
  };

  return (
    <CustomModal open={props.openAdd} onClose={props.handleCloseAdd}>
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <TextField
          {...register("title", {
            required: true,
          })}
          label="Title"
          error={errors.title ? true : false}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextField
          label="Description"
          {...register("desc", {
            required: true,
          })}
          error={errors.desc ? true : false}
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <TextField
          type="number"
          label="Estimated time"
          {...register("estimated", {
            required: true,
          })}
          error={errors.estimated ? true : false}
          inputProps={{ min: 0 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
          value={estimatedTime}
          onChange={(event) => {
            setEstimatedTime(event.target.value);
          }}
        />
        <Autocomplete
          options={allUsers}
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
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
              value={dateAdd}
              onChange={(newValue) => setDateAdd(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <ToggleButtonGroup
          color="primary"
          value={statusAdd}
          exclusive
          onChange={(event, newStatus) => {
            setStatusAdd(newStatus);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="Active">Active</ToggleButton>
          <ToggleButton value="Completed">Completed</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={priorityAdd}
          exclusive
          onChange={(event, newPriority) => {
            setPriorityAdd(newPriority);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="High">High</ToggleButton>
          <ToggleButton value="Medium">Medium</ToggleButton>
          <ToggleButton value="Low">Low</ToggleButton>
        </ToggleButtonGroup>

        <Button
          onClick={handleSubmit(addTasks)}
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
