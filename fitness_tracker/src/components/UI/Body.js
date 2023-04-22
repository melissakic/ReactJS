import React from "react"
import style from './Body.module.css'

export default function Body(props){
    return (
        <div className={style.body}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}