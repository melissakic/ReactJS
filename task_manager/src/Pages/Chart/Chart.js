import style from "./Chart.module.css";
import Bar from "./../../UI/Bar/Bar";
import CustomCard from "../../UI/CustomCard/CustomCard";

export default function Chart() {
  return (
    <>
      <Bar />
      <div className={style.body}>
        <CustomCard backgroundColor="#2A2F4F">
          <canvas id="bar-chart" width="800" height="450"></canvas>
        </CustomCard>
      </div>
    </>
  );
}
