import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const useAuth = (email, password, setLoader, setError, username) => {
  const navigation = useNavigate();
  return () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, user.email), {
            username: username,
          });
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
