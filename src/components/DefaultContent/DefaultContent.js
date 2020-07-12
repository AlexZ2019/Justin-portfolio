import React from "react";
import s from './DefaultContent.module.css'
import slide_1 from '../../images/slide_1.jpg'

let DefaultContent = () => {
    return <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className={`d-block w-100 ${s.slider_img}`} src={slide_1} alt="Первый слайд"/>
                </div>
                <div className="carousel-item">
                    <img className={`d-block w-100 ${s.slider_img}`} src={slide_1} alt="Второй слайд"/>
                </div>
                <div className="carousel-item">
                    <img className={`d-block w-100 ${s.slider_img}`} src={slide_1} alt="Третий слайд"/>
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
        <div className={`container-fluid ${s.content}`}>
            <div className={`row`}>
                <div className={`offset-md-1 mr-md-5 col-md-4 col-12 ${s.contentBlock}`}>
                    <img src="" alt=""/>
                    <hr/>
                    <p>Our departments</p>
                    <button>
                        Search
                    </button>
                </div>
                <div className={`offset-md-1 col-md-4 col-12 ${s.contentBlock}`}>
                    <img src="" alt=""/>
                    <hr/>
                    <p>Calculator</p>
                    <button>
                        Calculate department's price
                    </button>
                </div>
                <div className='offset-2 mt-5'>
                    <img src="https://justin.ua/wp-content/uploads/2019/04/500_pravka-1024x148.png" alt=""/>
                </div>
                <h2 className='mt-5 col-md-12'>
                    our partners
                </h2>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                            src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <div className="carousel-item mb-5 mt-3 pb-5">
                        <img className="w-auto pr-5 offset-2"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="first slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="second slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="third slide"/>
                        <img className="w-auto pr-5"
                             src="https://justin.ua/uploads/symlink/0_1000/42_bigl_logo.png" alt="fourth slide"/>
                    </div>
                    <ol className="carousel-indicators mb-5">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="19"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="20"></li>
                    </ol>
                </div>
            </div>
        </div>
    </>
}

export default DefaultContent
