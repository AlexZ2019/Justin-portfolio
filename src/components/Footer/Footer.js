import React from "react";
import s from "./Footer.module.css"
import fbLogo from "../../images/facebook-logo.png"
import instLogo from "../../images/instagram-logo.png"
import telegramLogo from "../../images/telegram-logo.png"
import messengerLogo from "../../images/messenger-logo.png"


const Footer = () => {
    return <div className="container-fluid">
        <div className={s["footer"] + " row"}>
            <ul className="offset-md-1 offset-sm-1 offset-1 col-md-3 col-sm-5 col-11">
                <li><a href="#">Про Justin</a></li>
                <li><a href="#">Карта відділень</a></li>
                <li><a href="#">Список відділень</a></li>
                <li><a href="#">Розрахунок ціни</a></li>
            </ul>
            <ul className="offset-sm-1 offset-1 col-md-3 col-sm-5 col-11">
                <li><a href="#">Тарифи</a></li>
                <li><a href="#">Список відділень</a></li>
                <li><a href="#">Умови надання послуг</a></li>
                <li><a href="#">Укласти договір</a></li>
            </ul>
            <ul className={s["list-without-borders"] + " offset-sm-1 offset-1 col-md-3 col-sm-11 col-11"}>
                <li><a href="#">Наші партнери</a></li>
                <li><a href="#">Кредитні посередники</a></li>
                <li><a href="#">Новини</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
            <p className="offset-1 col-3">Justin © 2020</p>
            <p className="offset-1 col-3">
                <a href="#">
                    <img src={fbLogo} alt="Facebook Logo"/>
                </a>
                <a href="#">
                    <img src={instLogo} alt="Instagram Logo"/>
                </a>
                <a href="#">
                    <img src={telegramLogo} alt="Telegram Logo"/>
                </a>
                <a href="#">
                    <img src={messengerLogo} alt="Messenger Logo"/>
                </a>
            </p>
            <p className="offset-1 col-3">
                <a href="#">Політика конфіденційності</a>
            </p>
        </div>
    </div>
}

export default Footer