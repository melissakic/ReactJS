import CustomCard from "../../UI/CustomCard/CustomCard";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
import { IconButton, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import style from "./AllTasks.module.css";
import FilterModal from "../../Components/FilterModal/FilterModal";
import AddModal from "../../Components/AddModal/AddModal";

export default function AllTasks() {
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

  //add
  const allUsers = ["1@2.com", "melis@aa.com"];
  const [value, setValue] = useState(allUsers[0]);
  const [inputValue, setInputValue] = useState("");
  const [dateAdd, setDateAdd] = useState(dayjs().add("15", "day"));
  const [statusAdd, setStatusAdd] = useState("Active");
  const [priorityAdd, setPriorityAdd] = useState("Medium");
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
        <AddModal
          openAdd={openAdd}
          handleCloseAdd={handleCloseAdd}
          allUsers={allUsers}
          value={value}
          setValue={setValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
          dateAdd={dateAdd}
          setDateAdd={setDateAdd}
          statusAdd={statusAdd}
          setStatusAdd={setStatusAdd}
          priorityAdd={priorityAdd}
          setPriorityAdd={setPriorityAdd}
          addTasks={addTasks}
        />
        {/* Add Modal */}
      </div>
    </>
  );
}
