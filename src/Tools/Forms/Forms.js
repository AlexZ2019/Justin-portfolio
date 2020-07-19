import React from "react";
import s from './forms.module.css'

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return <div className={s["forms-control"] + " " + (hasError ? s.error : "")}>
        <input  {...input} {...props} type="text" placeholder="Введіть номер посилки"/>
        {hasError && <p>{meta.error}</p>}
    </div>
}
