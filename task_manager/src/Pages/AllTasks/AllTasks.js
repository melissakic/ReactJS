import CustomCard from "../../UI/CustomCard/CustomCard";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
import { IconButton, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CustomModal from "../../UI/Modal/CustomModal";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import style from "./AllTasks.module.css";
import { useForm } from "react-hook-form";
import FilterModal from "../../Components/FilterModal/FilterModal";

export default function AllTasks() {
  //sorting and filtering
  const [date, setDate] = useState(dayjs("2022-04-17"));
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

  //modal
  const [openFilter, setOpenFilter] = useState(false);
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [openAdd, setOpenAdd] = useState(false);
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //add
  const addTasks = () => {
    handleCloseAdd();
  };

  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>All tasks</p>
          <Grid container>
            <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
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
            <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
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
        <CustomModal open={openAdd} onClose={handleCloseAdd}>
          <Stack alignItems="center" justifyContent="center" spacing={2}>
            <TextField
              label="Title"
              {...register("title", {
                required: true,
              })}
              error={errors.title}
            />
            <TextField
              label="Description"
              {...register("desc", {
                required: true,
              })}
              error={errors.desc}
            />
            <TextField
              type="number"
              label="Estimated time"
              {...register("estimated", {
                required: true,
              })}
              error={errors.estimated}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">h</InputAdornment>
                ),
              }}
            />

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
      </div>
    </>
  );
}
