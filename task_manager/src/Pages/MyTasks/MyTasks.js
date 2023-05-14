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
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import LogTimeModal from "../../Components/LogTimeModal/LogTimeModal";
import EditModal from "../../Components/EditModal/EditModal";

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
        <LogTimeModal
          openLog={openLog}
          handleClose={handleClose}
          logTime={logTime}
        />
        <EditModal openEdit={openEdit} handleCloseEdit={handleCloseEdit} />
      </div>
    </>
  );
}
