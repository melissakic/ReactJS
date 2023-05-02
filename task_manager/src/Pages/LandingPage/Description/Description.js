import style from './Description.module.css'

export default function Description(){
    return (
        <div className={style.body_down}>
        <ul className={style.list}>
          <li>Plan your tasks</li>
          <li>Collaborate with colleagues</li>
          <li>Log time and be efficient</li>
        </ul>
      </div>
    );
}