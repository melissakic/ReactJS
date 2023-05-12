import CustomCard from "../../UI/CustomCard/CustomCard";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
import { IconButton, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import style from "./AllTasks.module.css";
import FilterModal from "../../Components/FilterModal/FilterModal";
import AddModal from "../../Components/AddModal/AddModal";
import { useFetchTasks } from "../../hooks/fetch";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import axios from "axios";

export default function AllTasks() {
  const [tasks, setTasks] = useState([]);
  //fetch tasks
  const fetch = useFetchTasks(setTasks);

  //sorting and filtering
  const [date, setDate] = useState(dayjs());
  const [statusFilter, setStatusFilter] = useState("Active");
  const [sort, setSort] = useState("");

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const handleChange = (event, newStatus) => {
    setStatusFilter(newStatus);
  };

  const applyFilter = () => {
    setOpenFilter(false);
  };

  //modals
  const [openFilter, setOpenFilter] = useState(false);
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  useEffect(() => {
    fetch();
  }, [openAdd]);

  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>All tasks</p>
          <Grid container>
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Tooltip title="Filter and sorting options">
                <IconButton
                  onClick={() => {
                    setOpenFilter(true);
                  }}
                >
                  <SettingsIcon className={style.icon} />
                </IconButton>
              </Tooltip>
              <Divider className={style.split} />
            </Grid>
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Tooltip title="Refresh tasks">
                <IconButton
                  onClick={() => {
                    fetch();
                  }}
                >
                  <RefreshIcon className={style.icon} />
                </IconButton>
              </Tooltip>
              <Divider className={style.split} />
            </Grid>
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Tooltip title="Add new task">
                <IconButton
                  onClick={() => {
                    setOpenAdd(true);
                  }}
                >
                  <AddCircleIcon className={style.icon} />
                </IconButton>
              </Tooltip>
              <Divider className={style.split} />
            </Grid>
          </Grid>
          {tasks.length != 0 &&
            tasks.map((task) => (
              <Card
                key={task.key}
                sx={{
                  backgroundColor: "#917FB3",
                  marginX: "10%",
                  marginY: "5%",
                }}
              >
                <Stack alignItems="center" justifyContent="center">
                  <p>{task.title}</p>
                  <p className={style.desc}>{task.description}</p>
                  <p>{task.email}</p>
                  <p className={style.desc}>Logged time: {task.loggedTime}h</p>
                  <p className={style.desc}>
                    Estimated time: {task.estimatedTime}h
                  </p>
                  <Stack direction="row">
                    <Tooltip title="Status">
                      <p className={style.details}>{task.status}</p>
                    </Tooltip>
                    <Tooltip title="Priority">
                      <p className={style.details}>{task.priority}</p>
                    </Tooltip>
                  </Stack>
                  <Grid container>
                    <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <EditIcon className={style.icon} />
                        </IconButton>
                      </Tooltip>
                      <Divider className={style.split} />
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => {
                            axios
                              .delete(
                                `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.key}.json`
                              )
                              .then(() => {
                                setTasks((prev) =>
                                  prev.filter((id) => task.key != id.key)
                                );
                                fetch();
                              });
                          }}
                        >
                          <DeleteIcon className={style.icon} />
                        </IconButton>
                      </Tooltip>
                      <Divider className={style.split} />
                    </Grid>
                  </Grid>
                </Stack>
              </Card>
            ))}
        </CustomCard>
        <FilterModal
          openFilter={openFilter}
          handleCloseFilter={handleCloseFilter}
          statusFilter={statusFilter}
          handleChange={handleChange}
          date={date}
          setDate={setDate}
          sort={sort}
          handleChangeSort={handleChangeSort}
          applyFilter={applyFilter}
        />
        <AddModal openAdd={openAdd} handleCloseAdd={handleCloseAdd} />
      </div>
    </>
  );
}
