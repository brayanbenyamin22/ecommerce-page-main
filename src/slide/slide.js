import React from "react";
import './slide.css';
import imagen1 from '../images/image-product-1.jpg';
import imagen2 from '../images/image-product-2.jpg';
import imagen3 from '../images/image-product-3.jpg';
import imagen4 from '../images/image-product-4.jpg'; 
function Slide () {
    /* ====FORMA SENCILLA ==== Si funciono xD*/
    /* Array de imagenes para el slide */
    const images = [
        imagen1,
        imagen2,
        imagen3,
        imagen4,
    ];
    /*==== Logica del Slide ====*/
    const [slideImage, setSlideImage] = React.useState(0);

    const nextImage = () => {
        if(slideImage === (images.length - 1)){
            setSlideImage(0);
        }
        else {
            setSlideImage(slideImage + 1);
        }
    }
    const prevImage = () => {
        if(slideImage === 0){
            setSlideImage(images.length - 1);
        }
        else {
            setSlideImage(slideImage - 1);
        }
    }
    return (
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
                            <img src={images[slideImage]} alt="imagenes"/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export {Slide};