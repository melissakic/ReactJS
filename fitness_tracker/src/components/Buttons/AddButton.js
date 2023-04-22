import styles from './AddButton.module.css'

export default function AddButton(props){
    return(
        <div className={styles.body}>
             <button onClick={props.onClick} className={styles.button}>+</button>
        </div>
    )
}