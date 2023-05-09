import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../AuthContext/auth-context";
import { useContext } from "react";

const useAuth = (email, password, setLoader, setError) => {
  const check = useSecurity();
  const navigation = useNavigate();
  return () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("auth", JSON.stringify(user));
        setLoader(false);
        check();
        navigation("/alltasks");
        // ...
      })
      .catch((error) => {
        setError(true);
        setLoader(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
};

export function useSecurity() {
  const ctx = useContext(AuthContext);
  return () => {
    const user = JSON.parse(localStorage.getItem("auth")) || auth.currentUser;
    if (user == null) {
      console.log("aaaa");
      ctx.setUser(false);
      return;
    }
    const today = Date.now();
    const difference = today - user.lastLoginAt;
    if (Math.floor(difference / 1000 / 60 / 60 / 24) > 2) {
      ctx.setUser(false);
      return;
    }
    return ctx.setUser(true);
  };
}

export function useSecurityContext() {
  const user = JSON.parse(localStorage.getItem("auth")) || auth.currentUser;
  if (user == null) {
    return false;
  }
  const today = Date.now();
  const difference = today - user.lastLoginAt;
  if (Math.floor(difference / 1000 / 60 / 60 / 24) > 2) {
    return false;
  }
  return true;
}

export default useAuth;
