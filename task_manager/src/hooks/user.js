import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection, updateDoc, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSecurity } from "./auth";

export function useAuth(email, password, setLoader, setError, username) {
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
          await addDoc(collection(db, "users"), { email: user.email });
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
        // ..
      });
  };
}

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

export function useLogin(email, password, setError, setLoader) {
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

export function useProfile(setEmail, setTasks, setUsername) {
  const navigation = useNavigate();
  return async () => {
    let numOfTasks = 0;
    try {
      const user = JSON.parse(localStorage.getItem("auth")) || auth.currentUser;
      setEmail(user.email);
      const querySnapshot = await getDocs(collection(db, user.email));
      querySnapshot.forEach((doc) => {
        setUsername(doc.get("username"));
      });
      axios
        .get(
          "https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        )
        .then((res) => {
          const loggedMail = JSON.parse(localStorage.getItem("auth")).email;
          const data = res.data;
          if (data == null) {
            setTasks(0);
            return;
          }
          const val = Object.values(data);
          val.forEach((data) => {
            if (loggedMail === data.email) numOfTasks++;
          });
          setTasks(numOfTasks);
        });
    } catch (err) {
      navigation("/");
    }
  };
}

export function useResetPass(email, setLinkSent) {
  return () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLinkSent(true);
      })
      .catch((error) => {
        console.log("eror");
      });
  };
}

export function useChangeUsername(
  email,
  username,
  setLinkSentText,
  setLinkSent,
  setUsernameChanged,
  setUsername,
  usernameChanged,
  handleClose
) {
  return async () => {
    const querySnapshot = await getDocs(collection(db, email));
    querySnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        username: username,
      });
      setLinkSentText(
        "Success! You changed your username to " + usernameChanged
      );
      setLinkSent(true);
      setUsernameChanged(null);
      setUsername(usernameChanged);
      handleClose();
    });
  };
}
