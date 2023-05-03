import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const useAuth = (email, password, setLoader, setError) => {
  const navigation = useNavigate();
  return () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoader(false);
        navigation("/alltasks");
        const user = userCredential.user;
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
