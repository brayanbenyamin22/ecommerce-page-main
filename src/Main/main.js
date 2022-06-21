import React, { useState } from "react";
import './main.css'
import imagen1 from '../images/image-product-1.jpg';
import imagen2 from '../images/image-product-2.jpg';
import imagen3 from '../images/image-product-3.jpg';
import imagen4 from '../images/image-product-4.jpg'; 

function Main () {
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
        if(slideImage === 3){
            setSlideImage(0);
        }
        else {
            setSlideImage(slideImage + 1);
        }
    }
    const prevImage = () => {
        if(slideImage === 0){
            setSlideImage(3);
        }
        else {
            setSlideImage(slideImage - 1);
        }
    }

    const price = 120;
    console.log(slideImage);
    return (
        <main className="main-container">
            {/* ===== Slide ===== */}
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
            {/* ===== Information ===== */}
            <div className="info-container">
                {/* ===== Description ===== */}
                <div className="description-container">
                    <p className="sub-title">
                        SNEAKER COMPANY
                    </p>
                    <p className="title">
                        Fall Limited Edition
                        Sneakers
                    </p>
                    <p className="description">
                        These low-profile sneakers are your perfect
                        casual wear companion. Featuring a durable
                        rubber outer sole, they'll withstand everything
                        the weather can offer.
                    </p>
                </div>
                {/* ==== Price and Add Cart ==== */}
                <div className="price-container">
                    <div className="price-cards">
                        <div className="price-card--1">
                            <p className="price-now">
                                $125.00
                            </p>
                            <div className="price-discount">
                                <p>50%</p>
                            </div>
                        </div>
                        <div className="price-card--2">
                            <p className="price-before">
                                $250.00
                            </p>
                        </div>
                            
                    </div>
                </div>
            </div>
        </main>
    );
}

export { Main }; 