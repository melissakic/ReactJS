import axios from "axios";

export function usePostTask(
  title,
  email,
  description,
  estimatedTime,
  deadline,
  createdDate,
  status,
  priority
) {
  return () => {
    const object = {
      loggedTime: 0,
      title: title,
      email: email,
      description: description,
      estimatedTime: estimatedTime,
      deadline: deadline,
      createdDate: createdDate,
      status: status,
      priority: priority,
    };

    axios.post(
      "https://taskplanner-7fb06-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      object
    );
  };
}
