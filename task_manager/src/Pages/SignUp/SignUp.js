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

export default function SignUp() {
  const navigation = useNavigate();
  //Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {
    
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
        </Stack>
      </CustomCard>
    </div>
  );
}
