import style from "./Chart.module.css";
import NavigationBar from "../../UI/NavigationBar/NavigationBar";
import CustomCard from "../../UI/CustomCard/CustomCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { useFetchTasks } from "../../hooks/fetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    y: {
      gridLines: {
        color: "white",
      },
      ticks: {
        color: "white",
        beginAtZero: true,
        font: {
          size: 15,
        },
      },
    },
    x: {
      ticks: {
        color: "white",
        beginAtZero: true,
        font: {
          size: 15,
        },
      },
    },
  },
};

export default function Chart() {
  const [tasks, setTasks] = useState([]);
  const fetch = useFetchTasks(setTasks);
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>Track people efficiency</p>
          <Stack justifyContent="center" alignItems="center">
            <Bar
              options={options}
              data={{
                labels: tasks.map((data) => data.title),
                datasets: [
                  {
                    label: "Logged hours",
                    data: tasks.map((data) => data.loggedTime),
                    backgroundColor: "rgba(255, 99, 0, 0.5)",
                  },
                ],
              }}
              className={style.chart}
            />
          </Stack>
        </CustomCard>
      </div>
    </>
  );
}
