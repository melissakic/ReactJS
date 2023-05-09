import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";


export function useFetchUsers(setUsers, setValue) {
  return async () => {
    const niz = [];
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      niz.push(doc.data().email);
    });
    setUsers(niz);
    setValue(niz.at(0));
  };
}
