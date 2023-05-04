import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthContext/auth-context";
import { useContext } from "react";

export default function useLogin(email, password, setError, setLoader) {
  const ctx = useContext(AuthContext);
  const navigation = useNavigate();
  return () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("auth", JSON.stringify(auth.currentUser));
        ctx.setUser(auth.currentUser);
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
