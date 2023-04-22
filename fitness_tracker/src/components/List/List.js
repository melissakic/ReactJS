import styles from './List.module.css';
import AddButton from '../Buttons/AddButton';
export default function ActivityList(props){

    function deleteActvity(id){
        props.deleteData(id)
    }

    return(
        <div className={styles.body}>
           {props.array.map((data)=>{
            return(
            <div key={data.id} className={styles.item}>
                <p className={styles.text}>{`${data.time} sec - ${data.distance} meters`}</p>
                <button className={styles.button} onClick={deleteActvity.bind("id",data.id)}>-</button>
                </div>
                )
           })}
           <AddButton onClick={props.onAdd}></AddButton>
        </div>
    )
}