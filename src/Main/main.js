import React from "react";
import './main.css'
import imagen1 from '../images/image-product-1.jpg';
import imagen2 from '../images/image-product-1.jpg';
import imagen3 from '../images/image-product-1.jpg';
import imagen4 from '../images/image-product-1.jpg';
const imagenes = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
]
const previousImg = () => {
}
function Main () {
    return (
        <main className="main-container">
            <div className="slider">
                <div className="swiper swiper-main">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={imagen1} alt="imagenes"/>
                        </div>
                        <div className="swiper-button-next">
                            <img src={require("../images/icon-next.svg").default} alt="next"/>
                        </div>
                        <div className="swiper-button-prev">
                            <img src={require("../images/icon-previous.svg").default} alt="next"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export { Main }; 