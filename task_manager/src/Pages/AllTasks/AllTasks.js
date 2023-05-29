import CustomCard from "../../Components/UI/CustomCard/CustomCard";
import { IconButton, Tooltip } from "@mui/material";
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
import EditModal from "../../Components/EditModal/EditModal";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

export default function AllTasks() {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  //fetch tasks
  const fetch = useFetchTasks(setTasks);

  //modals
  const [openFilter, setOpenFilter] = useState(false);
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const [openEdit, setOpenEdit] = useState(false);
  const [editPath, setEditPath] = useState();
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    fetch();
  }, [openAdd]);

  return (
    <>
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>{t("allTasks")}</p>
          <Grid container>
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Tooltip title={t("filterTooltip")}>
                <IconButton
                  onClick={() => {
                    setOpenFilter(true);
                    fetch();
                  }}
                >
                  <SettingsIcon className={style.icon} />
                </IconButton>
              </Tooltip>
              <Divider className={style.split} />
            </Grid>
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Tooltip title={t("refreshTooltip")}>
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
              <Tooltip title={t("addTooltip")}>
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
          {tasks.length !== 0 &&
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
                  <p className={style.text}>{task.title}</p>
                  <p className={style.desc}>{task.description}</p>
                  <p className={style.text}>{task.email}</p>
                  <p className={style.desc}>
                    {t("loggedTime")}: {task.loggedTime}h
                  </p>
                  <p className={style.desc}>
                    {t("estimatedTime")}: {task.estimatedTime}h
                  </p>
                  <p>
                    {t("deadline")}: {dayjs(task.deadline).format("DD/MM/YYYY")}
                  </p>
                  <Stack direction="row">
                    <Tooltip title="Status">
                      <p className={style.details}>
                        {t(task.status.toLowerCase())}
                      </p>
                    </Tooltip>
                    <Tooltip title={t("priority")}>
                      <p className={style.details}>
                        {t(task.priority.toLowerCase())}
                      </p>
                    </Tooltip>
                  </Stack>
                  <Grid container>
                    <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                      <Tooltip title={t("edit")}>
                        <IconButton
                          onClick={() => {
                            setOpenEdit(true);
                            setEditPath(task.key);
                          }}
                        >
                          <EditIcon className={style.icon} />
                        </IconButton>
                      </Tooltip>
                      <Divider className={style.split} />
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                      <Tooltip title={t("delete")}>
                        <IconButton
                          onClick={() => {
                            axios
                              .delete(
                                `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.key}.json`
                              )
                              .then(() => {
                                setTasks((prev) =>
                                  prev.filter((id) => task.key !== id.key)
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
          setTasks={setTasks}
          tasks={tasks}
        />
        <AddModal
          openAdd={openAdd}
          handleCloseAdd={handleCloseAdd}
          setTasks={setTasks}
        />
        <EditModal
          openEdit={openEdit}
          handleCloseEdit={handleCloseEdit}
          editPath={editPath}
          setTasks={setTasks}
        />
      </div>
    </>
  );
}
