import style from "./Description.module.css";
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className={style.body_down}>
      <ul className={style.list}>
        <li>{t("firstD")}</li>
        <li>{t("secondD")}</li>
        <li>{t("thirdD")}</li>
      </ul>
    </div>
  );
}
