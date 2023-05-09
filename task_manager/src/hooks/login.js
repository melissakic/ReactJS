import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSecurity } from "./auth";

export default function useLogin(email, password, setError, setLoader) {
  const navigation = useNavigate();
  const check = useSecurity();
  return () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("auth", JSON.stringify(user));
        check();
        setLoader(false);
        navigation("/alltasks");
        // ...
      })
      .catch((error) => {
        setError(true);
        setLoader(false);
      });
  };
}
