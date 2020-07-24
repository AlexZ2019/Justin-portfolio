import React from "react";
import spinner from "../../../Files/images/Spinner-1s-200px.svg";

const Preloader = () => {
    return <div className={"col-md-12"}>
        <img src={spinner} alt="preloader"/>
    </div>
}

export default Preloader