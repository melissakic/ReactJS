import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/auth-context";
import { useContext } from "react";

const useAuth = (email, password, setLoader, setError, username) => {
  const ctx = useContext(AuthContext);
  const navigation = useNavigate();
  return () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, user.email), {
            username: username,
          });
          localStorage.setItem("auth", JSON.stringify(auth.currentUser));
          ctx.setUser(auth.currentUser);
          setLoader(false);
          navigation("/alltasks");
        } catch (e) {
          setError(true);
          setLoader(false);
        }

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

export default useAuth;
