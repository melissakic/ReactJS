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
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CustomModal from "../../UI/Modal/CustomModal";

export default function FiterModal(props) {
  return (
    <CustomModal open={props.openFilter} onClose={props.handleCloseFilter}>
      <Stack alignItems="center" justifyContent="center" spacing={2}>
        <ToggleButtonGroup
          color="primary"
          value={props.statusFilter}
          exclusive
          onChange={props.handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Active">Active</ToggleButton>
          <ToggleButton value="Completed">Completed</ToggleButton>
        </ToggleButtonGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Filter by date"
              value={props.date}
              onChange={(newValue) => props.setDate(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.sort}
              label="Sort by"
              onChange={props.handleChangeSort}
            >
              <MenuItem value={"logged"}>Logged hours</MenuItem>
              <MenuItem value={"estimated"}>Estimated time</MenuItem>
              <MenuItem value={"priority"}>Priority</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Button
        onClick={props.applyFilter}
        variant="contained"
        sx={{
          backgroundColor: "#2A2F4F",
          marginTop: "10px",
        }}
      >
        Save
      </Button>
    </CustomModal>
  );
}
