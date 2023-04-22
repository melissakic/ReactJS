import style from "./Login.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomModal from "../../UI/Modal/CustomModal";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  //Modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailReset, setEmailReset] = useState();
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const test = () => {
    console.log(email);
    console.log(password);
  };
  const resetPassword = () => {
    if (emailReset==null || emailReset.length == 0)   {
      setError(true);
    } else handleClose();
  };

  return (
    <div className={style.body}>
      <Card className={style.form_body} sx={{ backgroundColor: "#E5BEEC" }}>
        <CardContent>
          <Stack spacing={3}>
            <p className={style.welcome}>Welcome back!</p>

            <TextField
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              error={errors.email ? true : false}
              label={errors.email ? "Enter email in fromat x@x.x" : "Email"}
              variant="filled"
              className={style.input}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></TextField>

            <TextField
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                minLength: 8,
              })}
              error={errors.password ? true : false}
              label={
                errors.password
                  ? "8 characters long, one uppercase and one number at least"
                  : "Password"
              }
              variant="filled"
              type="password"
              className={style.input}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></TextField>

            <Button
              onClick={() => setOpen(true)}
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              Forgot password?
            </Button>

            <Button
              onClick={handleSubmit(test)}
              variant="contained"
              sx={{ backgroundColor: "#2A2F4F" }}
            >
              Login
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#2A2F4F" }}>
              Go to sign up
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <CustomModal open={open} onClose={handleClose}>
        <TextField
          error={error}
          label="Email"
          variant="filled"
          className={style.input}
          onChange={(event) => {
            setEmailReset(event.target.value);
          }}
        ></TextField>
        <Button
          onClick={resetPassword}
          variant="contained"
          sx={{
            backgroundColor: "#2A2F4F",
            marginX: "15%",
            marginTop: "5%",
          }}
        >
          Send
        </Button>
      </CustomModal>
    </div>
  );
}
