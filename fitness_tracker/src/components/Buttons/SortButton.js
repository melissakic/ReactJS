import styles from './SortButton.module.css';

export default function SortButton(props){
    return (
        <div className={styles.content}>
        <button onClick={props.sort1}>{props.title1}</button>
        <button onClick={props.sort2}>{props.title2}</button>
        </div>
    )
}