import React from "react";
import s from "./Footer.module.css"

const Footer = () => {
    return <div className="container-fluid">
        <div className={`row ${s.footer}`}>
            <ul className='offset-md-1 offset-sm-1 offset-1 col-md-3 col-sm-5 col-11'>
                <li><a href="#"> About Justin</a></li>
                <li><a href="#">Departments map</a></li>
                <li><a href="#">Departments List</a></li>
                <li><a href="#">Cost calculation</a></li>
            </ul>
            <ul className='offset-sm-1 offset-1 col-md-3 col-sm-5 col-11'>
                <li><a href="#"> Tariffs</a></li>
                <li><a href="#">Departments map</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Make a contract</a></li>
            </ul>
            <ul className='offset-sm-1 offset-1 col-md-3 col-sm-11 col-11' id={s.lastList}>
                <li><a href="#"> Our partners</a></li>
                <li><a href="#">Credit intermediaries</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <p className='offset-1 col-3 '>
                © 2020 Company Justin
            </p>
            <p className='offset-1 col-3'>
                social networks
            </p>
            <p className='offset-1 col-3'>
                <a href="#">Privacy policy</a>
            </p>
        </div>
    </div>
}

export default Footer