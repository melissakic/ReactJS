import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CustomModal from "../../Components/UI/Modal/CustomModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FiterModal(props) {
  const { t } = useTranslation();
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
    props.setTasks((prev) =>
      prev.filter(
        (data) =>
          dayjs(data.deadline).format("DD/MM/YYYY") ===
            date.format("DD/MM/YYYY") && data.status === statusFilter
      )
    );
    props.handleCloseFilter();
  };

  const applySort = () => {
    let tasks = props.tasks;
    tasks.sort((t1, t2) => {
      if (+t1[sort] < +t2[sort]) {
        return -1;
      }
      if (+t1[sort] > +t2[sort]) {
        return 1;
      }
      return 0;
    });
    props.setTasks(tasks);
    props.handleCloseFilter();
  };

  return (
    <CustomModal open={props.openFilter} onClose={props.handleCloseFilter}>
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <ToggleButtonGroup
          color="primary"
          value={statusFilter}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Active">{t("active")}</ToggleButton>
          <ToggleButton value="Completed">{t("completed")}</ToggleButton>
        </ToggleButtonGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={t("filterDate")}
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{t("sortBy")}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label={t("sortBy")}
              onChange={handleChangeSort}
            >
              <MenuItem value={"loggedTime"}>{t("loggedTime")}</MenuItem>
              <MenuItem value={"estimatedTime"}>{t("estimatedTime")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Button
        onClick={applyFilter}
        variant="contained"
        sx={{
          backgroundColor: "#2A2F4F",
          marginTop: "10px",
        }}
      >
        {t("filter")}
      </Button>
      <Button
        onClick={applySort}
        variant="contained"
        sx={{
          backgroundColor: "#2A2F4F",
          marginTop: "10px",
        }}
      >
        {t("sort")}
      </Button>
    </CustomModal>
  );
}
