import style from "./Login.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "../../Components/EmailInput/EmailInput";
import PassInput from "../../Components/PassInput/PassInput";
import CustomCard from "../../UI/CustomCard/CustomCard";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/login";
import Alert from "@mui/material/Alert";
import { Backdrop, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigation = useNavigate();
  const { t } = useTranslation();
  //Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //login hook
  const [loader, setLoader] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const login = useLogin(email, password, setErrorLogin, setLoader);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    setErrorLogin(false);
    setLoader(true);
    login();
  };
  return (
    <div className={style.body}>
      <CustomCard backgroundColor="#E5BEEC">
        <Stack spacing={3}>
          <p className={style.welcome}>{t("login")}</p>
          <EmailInput register={register} errors={errors} setEmail={setEmail} />
          <PassInput
            register={register}
            errors={errors}
            setPassword={setPassword}
          />
          <Button
            onClick={handleSubmit(submit)}
            variant="contained"
            sx={{ backgroundColor: "#2A2F4F" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#2A2F4F" }}
            onClick={() => {
              navigation("/signup");
            }}
          >
            Go to sign up
          </Button>
          {errorLogin && (
            <Alert variant="filled" severity="error">
              Account login failed, try again later
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
