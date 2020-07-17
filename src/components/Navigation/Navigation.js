import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
import logo from "../../images/logo_new.png"
import {Field, reduxForm} from 'redux-form'


let NavTrackingForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <Field name={'ttn_text'} component={'input'} type="text"/>
        <button className="mt-5">
            Get status
        </button>
    </form>)
}
let NavTrackingFormRedux = reduxForm({
    form: 'navTracking'
})(NavTrackingForm)
const Navigation = (props) => {
    return <>
        <div className="container-fluid fixed-top">
            <div className={`row ${s.navigation} pt-1 pb-sm-4 pb-2 pb-2`}>
                <div className="col-sm-2 col-md-2 offset-md-1 offset-sm-0 p-0 col-5">
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <button className={s.navBtn + "col-md-1 col-sm-1 ml-5 mr-md-4 mr-2 d-none d-md-block d-sm-block"}>
                    міжнародна доставка посилок
                </button>
                <button className={s.navBtn + " col-md-1 col-sm-1 ml-md-3 ml-2 mr-md-4 d-none d-md-block d-sm-block"}>
                    кабінет приватним особам
                </button>
                <div className={`${s.call_us} col-md-1 col-sm-1 p-0 d-none d-md-block d-sm-block`}>
                    <a href="">0-800-301-661</a>
                </div>
                <div className="col-md-2 col-sm-2 p-0 ml-md-4 ml-sm-3 d-none d-md-block d-sm-block">
                    <NavTrackingFormRedux onSubmit={props.onParcelCheck}/>
                </div>
                <div
                    className={`dropdown col-md-1 col-sm-2 col-5 p-0 ml-md-4 ml-0 d-none d-md-block d-sm-block ${s.nav_menu}`}>
                    <a className={`nav-link dropdown-toggle `} href="#" id="navbarDropdown"
                       role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> menu </a>
                    {/*<button className={`nav-link dropdown-toggle d-none d-sm-block d-md-none mt-1 ml-3`}*/}
                    {/*        id="navbarDropdown" role="button"*/}
                    {/*        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> menu*/}
                    {/*</button>*/}
                    <div className="dropdown-menu dropdown-menu-right border-0 py-0" aria-labelledby="navbarDropdown">
                        <div className={s.nav_menu_item} id={s.nav_menu_item_1}>
                            <NavLink to={'/tracking'}>
                                Tracking
                            </NavLink>
                        </div>
                        <div className={s.nav_menu_item} id={s.nav_menu_item_2}>
                            <NavLink to={'/theNearestDepartments'}>
                                Знайти найближче відділення
                            </NavLink>
                        </div>
                    </div>
                </div>
                <nav className={"navbar navbar-light d-sm-none col-5"}>
                    <button className={s.nav_burger + " navbar-toggler mt-0"} type="button" data-toggle="collapse"
                            data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className={s.nav_menu + " collapse d-sm-none"} id="navbarToggleExternalContent">
                    <div className="col-12">
                        <a href="#">
                            міжнародна доставка посилок
                        </a>
                    </div>
                    <div className="col-12 pt-2">
                        <a href="#">
                            кабінет приватним особам
                        </a>
                    </div>
                    <div className="col-12 pt-2">
                        <NavLink to={'/tracking'}>
                            Tracking parcels in Justin network
                        </NavLink>
                    </div>
                    <div className="col-12 pt-2 pb-2">
                        <NavLink to={'/theNearestDepartments'}>
                            Знайти найближче відділення
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navigation