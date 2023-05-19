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
import { useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useEdit } from "../../hooks/edit";
import { useTranslation } from "react-i18next";

export default function EditModal(props) {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [dateAdd, setDateAdd] = useState(dayjs());
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Active");
  const editTask = useEdit(
    props.editPath,
    title,
    description,
    estimatedTime,
    dateAdd,
    priority,
    status,
    props.setTasks
  );

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const edit = () => {
    setTitle("");
    setDescription("");
    setEstimatedTime("");
    editTask();
    props.handleCloseEdit();
  };

  return (
    <CustomModal open={props.openEdit} onClose={props.handleCloseEdit}>
      <Stack alignItems="center" justifyContent="center">
        <Stack direction="row">
          <TextField
            {...register("title", {
              required: true,
            })}
            error={errors.title ? true : false}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            label={t("title")}
            sx={{ marginX: "5px" }}
          />
          <TextField
            {...register("desc", {
              required: true,
            })}
            error={errors.desc ? true : false}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            label={t("description")}
            sx={{ marginX: "5px" }}
          />
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={t("taskDeadline")}
              value={dateAdd}
              onChange={(newValue) => setDateAdd(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          {...register("estimated", {
            required: true,
          })}
          error={errors.estimated ? true : false}
          value={estimatedTime}
          onChange={(event) => {
            setEstimatedTime(event.target.value);
          }}
          label={t("estimatedTime")}
          type="number"
          inputProps={{ min: 0 }}
          InputProps={{
            endAdornment: <InputAdornment position="start">h</InputAdornment>,
          }}
          sx={{ marginY: "10px" }}
        />
        <Stack direction="row" spacing={2}>
          <ToggleButtonGroup
            value={priority}
            exclusive
            onChange={(event, newVal) => {
              setPriority(newVal);
            }}
            aria-label="Platform"
          >
            <ToggleButton value="High">High</ToggleButton>
            <ToggleButton value="Medium">Medium</ToggleButton>
            <ToggleButton value="Low">Low</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            value={status}
            exclusive
            onChange={(event, newVal) => {
              setStatus(newVal);
            }}
            aria-label="Platform"
          >
            <ToggleButton value="Active">Active</ToggleButton>
            <ToggleButton value="Completed">Completed</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Button
          onClick={handleSubmit(edit)}
          variant="contained"
          sx={{
            backgroundColor: "#2A2F4F",
            marginTop: "10px",
          }}
        >
          {t("edit")}
        </Button>
      </Stack>
    </CustomModal>
  );
}
