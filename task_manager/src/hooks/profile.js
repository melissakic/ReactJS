import { auth, db } from "../firebase";
import { collection, updateDoc, query, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

export function useProfile(setEmail, setTasks, setUsername) {
  console.log("profile");
  const navigation = useNavigate();
  return async () => {
    try {
      const user = JSON.parse(localStorage.getItem("auth")) || auth.currentUser;
      setEmail(user.email);
      const q = query(collection(db, user.email));
      const querySnapshot = await getDocs(collection(db, user.email));
      querySnapshot.forEach((doc) => {
        setUsername(doc.get("username"));
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
