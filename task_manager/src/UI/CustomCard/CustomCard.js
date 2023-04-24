import style from "./CustomCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CustomCard(props) {
  return (
    <Card
      className={style.card}
      sx={{ backgroundColor: props.backgroundColor }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
