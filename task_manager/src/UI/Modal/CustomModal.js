import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./CustomModal.module.css"

export default function CustomModal(props) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Card className={style.modal_body}>
        <CardContent className={style.modal_content}>
          {props.children}
        </CardContent>
      </Card>
    </Modal>
  );
}
