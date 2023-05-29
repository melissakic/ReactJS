import style from "./MyTasks.module.css";
import axios from "axios";
import CustomCard from "../../Components/UI/CustomCard/CustomCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect } from "react";
import LogTimeModal from "../../Components/LogTimeModal/LogTimeModal";
import EditModal from "../../Components/EditModal/EditModal";
import { useFetchTasks } from "../../hooks/fetch";
import dayjs from "dayjs";
import Card from "@mui/material/Card";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { useTranslation } from "react-i18next";

export default function MyTasks() {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const fetch = useFetchTasks(setTasks);
  //modals
  const [openLog, setOpenLog] = useState(false);
  const handleClose = () => {
    setOpenLog(false);
  };
  const [openEdit, setOpenEdit] = useState(false);
  const [editPath, setEditPath] = useState();
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>{t("pageMyTasks")}</p>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            {tasks.map(
              (data) =>
                JSON.parse(localStorage.getItem("auth")).email ===
                  data.email && (
                  <Card
                    key={data.key}
                    sx={{
                      backgroundColor: "#917FB3",
                      paddingX: "6%",
                      paddingY: "3%",
                    }}
                  >
                    <Stack>
                      <Tooltip title={t("title")}>
                        <p className={style.main}> {data.title}</p>
                      </Tooltip>
                      <Tooltip title={t("description")}>
                        <p className={style.main}>{data.description}</p>
                      </Tooltip>
                    </Stack>
                    <Grid container>
                      <Grid item md={4} xs={12}>
                        <Stack sx={{ textAlign: "center" }}>
                          <Divider className={style.split} />
                          <Tooltip title={t("taskCreated")}>
                            <p className={style.text}>
                              {dayjs(data.createdDate).format("DD/MM/YYYY")}
                            </p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <Tooltip title={t("taskDeadline")}>
                            <p className={style.text}>
                              {dayjs(data.deadline).format("DD/MM/YYYY")}
                            </p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <IconButton
                            onClick={() => {
                              axios
                                .delete(
                                  `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks/${data.key}.json`
                                )
                                .then(() => {
                                  setTasks((prev) =>
                                    prev.filter((id) => data.key !== id.key)
                                  );
                                  fetch();
                                });
                            }}
                          >
                            <DeleteIcon
                              sx={{
                                fontSize: "30px",
                                color: "white",
                              }}
                            />
                          </IconButton>
                        </Stack>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <Stack sx={{ textAlign: "center" }}>
                          <Divider className={style.split} />
                          <Tooltip title={t("loggedTime")}>
                            <p className={style.text}>{data.loggedTime}h</p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <Tooltip title={t("estimatedTime")}>
                            <p className={style.text}>{data.estimatedTime}h</p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <IconButton
                            onClick={() => {
                              setOpenLog(true);
                              setEditPath(data.key);
                            }}
                          >
                            <MoreTimeIcon
                              sx={{
                                fontSize: "30px",
                                marginX: "20px",
                                color: "white",
                              }}
                            />
                          </IconButton>
                        </Stack>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <Stack sx={{ textAlign: "center" }}>
                          <Divider className={style.split} />
                          <Tooltip title={t("priority")}>
                            <p className={style.text}>
                              {t(data.priority.toLowerCase())}
                            </p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <Tooltip title="Status">
                            <p className={style.text}>{t(data.status.toLowerCase())}</p>
                          </Tooltip>
                          <Divider className={style.split} />
                          <IconButton
                            onClick={() => {
                              setOpenEdit(true);
                              setEditPath(data.key);
                            }}
                          >
                            <EditIcon
                              sx={{
                                fontSize: "30px",
                                color: "white",
                              }}
                            />
                          </IconButton>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Card>
                )
            )}
          </Stack>
        </CustomCard>
        <LogTimeModal
          openLog={openLog}
          handleClose={handleClose}
          editPath={editPath}
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
