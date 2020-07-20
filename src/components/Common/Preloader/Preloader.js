import React from "react";
import spinner from "../../../Files/images/Spinner-1s-200px.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
    return <div className={s["preloader"] + " col-md-12"}>
        <img src={spinner} alt="preloader"/>
    </div>
}

export default Preloader