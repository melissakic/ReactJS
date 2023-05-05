import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/auth-context";
import { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export function useLogOut() {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  return () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("auth");
        ctx.setUser(auth.currentUser);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
