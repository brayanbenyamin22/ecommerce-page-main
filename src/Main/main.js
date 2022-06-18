import React, { useState } from "react";
import './main.css'
import imagen1 from '../images/image-product-1.jpg';
/* import imagen1 from '../images/image-product-1.jpg';
import imagen2 from '../images/image-product-2.jpg';
import imagen3 from '../images/image-product-3.jpg';
import imagen4 from '../images/image-product-4.jpg'; */

/* const slideImage = () => {
    const image = require(`../images/image-product-1.jpg`);
    return image;
} */
function Main () {

    /*==== Logica del Slide ====*/
    const [slideImage, setSlideImage] = React.useState(1);

    const nextImage = () => {
        if(slideImage === 4){
            setSlideImage(1);
        }
        else {
            setSlideImage(slideImage + 1);
        }
    }
    const prevImage = () => {
        if(slideImage === 1){
            setSlideImage(4);
        }
        else {
            setSlideImage(slideImage - 1);
        }
    }
    console.log(slideImage);
    return (
        <main className="main-container">
            <div className="slider">
                <div className="swiper swiper-main">
                    <div className="swiper-wrapper">
                        <div className="swiper-buttons__container">
                            <div className="swiper-buttons">
                                <div className="swiper-button-prev">
                                    <img
                                        onClick={prevImage} 
                                        src={require("../images/icon-previous.svg").default} 
                                        alt="next"
                                    />
                                </div>
                                <div className="swiper-button-next">
                                    <img 
                                        onClick={nextImage}
                                        src={require("../images/icon-next.svg").default} 
                                        alt="next"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={imagen1} alt="imagenes"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export { Main }; 