import { auth, db } from "../firebase";
import { collection, updateDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import axios from "axios";

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
