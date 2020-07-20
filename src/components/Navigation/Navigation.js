import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";
import logoImG from "../../images/logo_new.png";
import {Field, reduxForm} from "redux-form";


let NavTrackingForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"ttn_text"} component={"input"} type="text" placeholder="Введіть номер посилки"/>
            <button className={s["button"]}>
                пошук
            </button>
        </form>)
}
let NavTrackingFormRedux = reduxForm({
    form: "navTracking"
})(NavTrackingForm)
const Navigation = (props) => {
    return <>
        <div className={s["nav"] + " container-fluid fixed-top"}>
            <div className="container">
                <div className="row">
                    <div className={s["nav-logo"] + " col-4 col-md-2 mr-sm-2 offset-0 offset-lg-1"}>
                        <NavLink to={'/'}>
                            <img src={logoImG} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className={s["nav-button"] + " ml-md-4 d-none d-md-block"}>
                        <button className={s["button"]}>
                            міжнародна доставка посилок
                        </button>
                    </div>
                    <div className={s["nav-button"] + " ml-md-4 ml-sm-2 d-none d-md-block"}>
                        <button className={s["button"]}>
                            кабінет приватним особам
                        </button>
                    </div>
                    <div className={s["nav-call-us"] + " d-none d-md-block"}>
                        <a href="">0-800-301-661</a>
                    </div>
                    <div className={s["nav-input"] + " col-md-3 col-sm-4 d-none d-md-block"}>
                        <NavTrackingFormRedux onSubmit={props.onParcelCheck}/>
                    </div>
                    <nav role="navigation" className="offset-5 offset-sm-6 offset-md-0">
                        <div className={s["menu-toggle"]}>

                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul className={s["menu"]}>
                                <NavLink to={"/"} ><li>Головна</li></NavLink>
                                <a href="#"><li className="d-md-none">Міжнародна доставка посилок</li></a>
                                <a href="#"><li className="d-md-none">Кабінет приватним особам</li></a>
                                <NavLink to={"/tracking"} ><li>Відслідкувати посилку</li></NavLink>
                                <NavLink to={"/nearest-departments"} ><li>Знайти найближче відділення</li></NavLink>

                            </ul>
                        </div>
                    </nav>

                </div>
            </div>

        </div>
    </>
}

export default Navigation