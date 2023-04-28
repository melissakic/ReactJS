import style from "./MyTasks.module.css";
import NavigationBar from "./../../UI/NavigationBar/NavigationBar";
import CustomCard from "../../UI/CustomCard/CustomCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import data from "./MyTasksData";
import Divider from "@mui/material/Divider";
import { IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/InputAdornment";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useState } from "react";
import CustomModal from "../../UI/Modal/CustomModal";

export default function MyTasks() {
  const [openLog, setOpenLog] = useState(false);
  const handleClose = () => {
    setOpenLog(false);
  };
  const [openEdit, setOpenEdit] = useState(false);
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const logTime = () => {
    handleClose();
  };

  //edit
  const [date, setDate] = useState();

  //toogle
  const [alignment, setAlignment] = useState("Medium");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [status, setStatus] = useState("Active");

  const handleChangeStatus = (event, newStatus) => {
    setStatus(newStatus);
  };

  const edit = () => {
    handleCloseEdit();
  };

  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>My tasks</p>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            {data.map((data) => {
              return (
                <CustomCard backgroundColor="#917FB3">
                  <Grid container>
                    <Grid item md={3} xs={12}>
                      <Stack sx={{ textAlign: "center" }}>
                        <Divider />
                        <p className={style.text}>{data.title}</p>
                        <Divider />
                        <p className={style.text}>{data.description}</p>{" "}
                        <Divider />
                        <IconButton
                          onClick={() => {
                            setOpenEdit(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack sx={{ textAlign: "center" }}>
                        <Divider />
                        <Tooltip title="Task created">
                          <p className={style.text}>{data.dateCreated}</p>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="Task deadline">
                          <p className={style.text}>{data.deadline}</p>
                        </Tooltip>
                        <Divider />
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack sx={{ textAlign: "center" }}>
                        <Divider />
                        <Tooltip title="Hours looged">
                          <p className={style.text}>{data.loggedTime}h</p>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="Hours estimated">
                          <p className={style.text}>{data.estimatedTime}h</p>
                        </Tooltip>
                        <Divider />
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: "12px",
                            marginTop: "6px",
                            marginX: "2px",
                            backgroundColor: "#2A2F4F",
                          }}
                          onClick={() => setOpenLog(true)}
                        >
                          Log time
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <Stack sx={{ textAlign: "center" }}>
                        <Divider />
                        <Tooltip title="Priority">
                          <p className={style.text}>{data.priority}</p>
                        </Tooltip>
                        <Divider />
                        <Tooltip title="Status">
                          <p className={style.text}>{data.status}</p>
                        </Tooltip>
                        <Divider />
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: "12px",
                            marginTop: "6px",
                            marginX: "2px",
                            backgroundColor: "#2A2F4F",
                          }}
                        >
                          Save edit
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </CustomCard>
              );
            })}
          </Stack>
        </CustomCard>
        <CustomModal open={openLog} onClose={handleClose}>
          <Stack alignItems="center" justifyContent="center">
            <TextField
              sx={{
                marginX: "40%",
                marginTop: "10px",
              }}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">h</InputAdornment>
                ),
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
        <CustomModal open={openEdit} onClose={handleCloseEdit}>
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
                endAdornment: (
                  <InputAdornment position="start">h</InputAdornment>
                ),
              }}
              sx={{ marginY: "10px" }}
            />
            <Stack direction="row">
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
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
                value={status}
                exclusive
                onChange={handleChangeStatus}
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
              onClick={edit}
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
      </div>
    </>
  );
}
