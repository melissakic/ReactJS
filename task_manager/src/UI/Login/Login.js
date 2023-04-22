import style from "./Login.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.body}>
      <Card className={style.form_body} sx={{ backgroundColor: "#E5BEEC" }}>
        <CardContent>
          <Stack spacing={4}>
            <p className={style.welcome}>Welcome back!</p>
            <TextField
              label="Email"
              variant="filled"
              className={style.input}
            ></TextField>
            <TextField
              label="Password"
              variant="filled"
              type="password"
              className={style.input}
            ></TextField>
            <Button
              onClick={() =>
                setOpen((prev) => {
                  return !prev;
                })
              }
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              Forgot password?
            </Button>
            <Grid container>
              <Grid item md={6} xs={12} className={style.action}>
                <Button variant="contained" sx={{ backgroundColor: "#2A2F4F" }}>
                  Go to sign up
                </Button>
              </Grid>
              <Grid item md={6} xs={12} className={style.action}>
                <Button variant="contained" sx={{ backgroundColor: "#2A2F4F" }}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
      <Modal open={open}>
        <div></div>
      </Modal>
    </div>
  );
}
