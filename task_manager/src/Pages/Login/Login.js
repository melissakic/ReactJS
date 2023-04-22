import style from "./Login.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "../../Components/EmailInput/EmailInput";
import PassInput from "../../Components/PassInput/PassInput";
import ResetMod from "./PassResetModal/ResetMod";

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

  const submit = () => {
    console.log(email);
    console.log(password);
  };

  const resetPassword = () => {
    if (emailReset == null || emailReset.length == 0) {
      setError(true);
      return;
    } 
    console.log(emailReset);
    handleClose();
  };

  return (
    <div className={style.body}>
      <Card className={style.form_body} sx={{ backgroundColor: "#E5BEEC" }}>
        <CardContent>
          <Stack spacing={3}>
            <p className={style.welcome}>Welcome back!</p>
            <EmailInput
              register={register}
              errors={errors}
              setEmail={setEmail}
            />
            <PassInput
              register={register}
              errors={errors}
              setPassword={setPassword}
            />
            <Button
              onClick={() => setOpen(true)}
              variant="text"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              Forgot password?
            </Button>
            <Button
              onClick={handleSubmit(submit)}
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

      <ResetMod
        open={open}
        onClose={handleClose}
        error={error}
        setEmailReset={setEmailReset}
        resetPassword={resetPassword}
      />
    </div>
  );
}
