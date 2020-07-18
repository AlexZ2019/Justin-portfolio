import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
import logoImG from "../../images/logo_new.png"
import {Field, reduxForm} from 'redux-form'


let NavTrackingForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'ttn_text'} component={'input'} type="text" placeholder="Введіть номер посилки"/>
            <button>
                пошук
            </button>
        </form>)
}
let NavTrackingFormRedux = reduxForm({
    form: 'navTracking'
})(NavTrackingForm)
const Navigation = (props) => {
    return <>
        <div className={s["nav"] + " container-fluid fixed-top"}>
            <div className="container">
                <div className="row">
                    <div className={s['nav-logo'] + " col-6 col-sm-2"}>
                        <NavLink to={'/'}>
                            <img src={logoImG} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className={s['nav-button'] + " col-1 ml-4"}>
                        <button>
                            міжнародна доставка посилок
                        </button>
                    </div>
                    <div className={s['nav-button'] + " col-1 ml-4"}>
                        <button>
                            кабінет приватним особам
                        </button>
                    </div>
                    <div className={s['nav-call-us'] + " col-2"}>
                        <a href="">0-800-301-661</a>
                    </div>
                    <div className={s['nav-input'] + " col-3"}>
                        <NavTrackingFormRedux onSubmit={props.onParcelCheck}/>
                    </div>
                    <nav role="navigation">
                        <div id={s["menuToggle"]}>

                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id={s["menu"]}>
                                <NavLink to={"/"} ><li>Головна</li></NavLink>
                                <NavLink to={"/tracking"} ><li>Відслідкувати посилку</li></NavLink>
                                <NavLink to={"/NearestDepartments"} ><li>Знайти найближче відділення</li></NavLink>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>

        </div>
    </>
}

export default Navigation