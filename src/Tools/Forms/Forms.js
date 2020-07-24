import React from "react";
import s from './forms.module.css'

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return <div className={s["forms-control"] + " " + s["get-status"] + " mt-5" + " " + (hasError ? s.error : "")}>
        <div className={s["input"]}>
            <input  {...input} {...props} type="text"/>
            {hasError && <p>{meta.error}</p>}
        </div>
        <button className={s["button"] + " ml-3"}>
            Пошук
        </button>
    </div>
}
