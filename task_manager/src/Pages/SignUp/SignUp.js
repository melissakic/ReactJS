import style from "./SignUp.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "../../Components/EmailInput/EmailInput";
import PassInput from "../../Components/PassInput/PassInput";
import CustomCard from "../../UI/CustomCard/CustomCard";
import UsernameInput from "../../Components/CustomInput/Username";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/register";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function SignUp() {
  const navigation = useNavigate();
  //Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //auth hooks
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const createUser = useAuth(email, password, setLoader, setError, username);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    setError(false);
    setLoader(true);
    createUser();
  };

  return (
    <div className={style.body}>
      <CustomCard backgroundColor="#E5BEEC">
        <Stack spacing={3}>
          <p className={style.welcome}>Join our community!</p>
          <EmailInput register={register} errors={errors} setEmail={setEmail} />
          <PassInput
            register={register}
            errors={errors}
            setPassword={setPassword}
          />
          <UsernameInput
            register={register}
            errors={errors}
            setInput={setUsername}
          />
          <Button
            onClick={handleSubmit(submit)}
            variant="contained"
            sx={{ backgroundColor: "#2A2F4F" }}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#2A2F4F" }}
            onClick={() => {
              navigation("/login");
            }}
          >
            Go to login
          </Button>
          {error && (
            <Alert variant="filled" severity="error">
              Account creation failed, try again later
            </Alert>
          )}
        </Stack>
      </CustomCard>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
