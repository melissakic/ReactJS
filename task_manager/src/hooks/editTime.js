import axios from "axios";
import { useFetchTasks } from "./fetch";

export function useEditTime(path, loggedTime, setTasks) {
  const fetch = useFetchTasks(setTasks);
  return () => {
    axios
      .get(
        `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks/${path}.json`
      )
      .then((res) => {
        const data = res.data;
        const val = Object.values(data);
        const keys = Object.keys(data);
        const obj = keys.reduce((acc, key, index) => {
          acc[key] = val[index];
          return acc;
        }, {});
        obj.loggedTime = +obj.loggedTime + +loggedTime;
        axios
          .put(
            `https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks/${path}.json`,
            obj
          )
          .then(() => {
            fetch();
          });
      });
  };
}
