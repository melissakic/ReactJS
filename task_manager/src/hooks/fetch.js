import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";

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

export function useFetchTasks(setTasks) {
  return () => {
    axios
      .get(
        `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`
      )
      .then((res) => {
        const data = res.data;
        if (data == undefined) return;
        const val = Object.values(data);
        const key = Object.keys(data);
        let tasks = [];
        for (let i = 0; i < val.length; i++) {
          tasks.push({ key: key[i], ...val[i] });
        }
        setTasks(tasks);
      });
  };
}
