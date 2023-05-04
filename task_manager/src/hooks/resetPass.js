import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function useResetPass(email, handleClose) {
  return () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
}
