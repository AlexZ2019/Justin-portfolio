import React from "react";
import s from "./DefaultContent.module.css";
import slide_1 from "../../images/slide_1.jpg";
import calculator from "../../images/calculator.png";
import departments from "../../images/departments.png"
import {Redirect} from "react-router";
import {connect} from "react-redux";

class DefaultContent extends React.Component {

    state = {
        isRedirect: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({
                isRedirect: true
            })
        }
    }

    render() {
        if (this.state.isRedirect === true) {
            return (
                <Redirect to="/tracking"/>
                )}
        else
            return <>
                <div id="carouselExampleControls" className={s["main-slider"] + " carousel slide"} data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className={`d-block w-100`} src={slide_1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className={`d-block w-100 ${s.slider_img}`} src={slide_1} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className={`d-block w-100 ${s.slider_img}`} src={slide_1} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true">
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className={s["content"] + " container-fluid"}>
                    <div className={`row`}>
                        <div className={s["content-block"] + " col-sm-4 col-10 offset-1"}>
                            <img src={departments} alt={departments}/>
                            <hr/>
                            <p>Наші відділення</p>
                            <button className={s["button"]}>
                                Пошук
                            </button>
                        </div>
                        <div className={s["content-block"] + " col-sm-4 col-10 offset-1 offset-sm-2 mt-5 mt-sm-0"}>
                            <img src={calculator} alt="calculator"/>
                            <hr/>
                            <p>Калькулятор</p>
                            <button className={s["button"]}>
                                Розрахувати ціну відділення
                            </button>
                        </div>
                        <div className=" mt-5">
                            <img src="https://justin.ua/wp-content/uploads/2019/04/500_pravka-1024x148.png" alt=""/>
                        </div>
                        <h2 className="mt-5 col-md-12">
                            our partners
                        </h2>
                    </div>
                    <div id="carouselExampleIndicators" className={s["slider"] + " carousel slide"} data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>

                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <div className="carousel-item mb-5 mt-3 pb-5">
                                <img className="w-auto pr-5 ml-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="second slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                                <img className="w-auto pr-5"
                                     src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png"
                                     alt="fourth slide"/>
                            </div>
                            <ol className="carousel-indicators mb-5">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        result: state.TrackingReducer.result
    }
}

export default connect(mapStateToProps)(DefaultContent)
