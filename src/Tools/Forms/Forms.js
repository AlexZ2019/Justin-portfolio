import React from "react";
import s from './forms.module.css'

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return <div className={s.formsControl + " " + (hasError ? s.error : '')}>
        <input  {...input} {...props} type="text"/>
        {hasError && <p className='mt-1'>{meta.error}</p>}
    </div>
}
