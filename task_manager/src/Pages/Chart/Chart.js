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
import faker from "faker";

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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 0, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Chart() {
  return (
    <>
      <NavigationBar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <p className={style.title}>Track people efficiency</p>
          <Bar options={options} data={data} className={style.chart} />;
        </CustomCard>
      </div>
    </>
  );
}
