import React from "react";
import '../Styles/slide.css';
import imagen1 from '../images/image-product-1.jpg';
import imagen2 from '../images/image-product-2.jpg';
import imagen3 from '../images/image-product-3.jpg';
import imagen4 from '../images/image-product-4.jpg'; 
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg'; 
import { useLogic } from "./useLogic";
import { SlideData } from "./slideData";
function Slide (props) {
    /* ====FORMA SENCILLA ==== Si funciono xD*/
    /* Array de imagenes para el slide */
    const images = [
        imagen1,
        imagen2,
        imagen3,
        imagen4,
    ];
    const thumbs = [
        thumb1,
        thumb2,
        thumb3,
        thumb4,
    ]; 
    /*==== Logica del Slide ====*/
    const {
        slideImage, 
        setSlideImage,
        thumb1Selected, 
        setThumb1Selected,
        thumb2Selected, 
        setThumb2Selected,
        thumb3Selected, 
        setThumb3Selected,
        thumb4Selected, 
        setThumb4Selected,
    } = useLogic();
    /* const [slideImage, setSlideImage] = React.useState(0); */
    const nextImage = () => {
        if(slideImage === (images.length - 1)){
            setSlideImage(0);
        }
        else {
            setSlideImage(slideImage + 1);
        }
        if(slideImage === 0) {
            setThumb1Selected(false);
            setThumb2Selected(true);
            setThumb3Selected(false);
            setThumb4Selected(false);
        } else if (slideImage === 1) {
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(true);
            setThumb4Selected(false);
        } else if (slideImage === 2) {
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(true);
        } else if (slideImage === 3) {
            setThumb1Selected(true);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(false);
        }
    }
    const prevImage = () => {
        if(slideImage === 0){
            setSlideImage(images.length - 1);
        }
        else {
            setSlideImage(slideImage - 1);
        }
        if(slideImage === 0) {
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(true);
        } else if (slideImage === 1) {
            setThumb1Selected(true);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(false);
        } else if (slideImage === 2) {
            setThumb1Selected(false);
            setThumb2Selected(true);
            setThumb3Selected(false);
            setThumb4Selected(false);
        } else if (slideImage === 3) {
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(true);
            setThumb4Selected(false);
        }
    }
    /* ==== Logica del Selector ==== */ /* Tratare de sintetizar */
    const imageSelector = (item) => {
        if(item === "thumb1"){
            setThumb1Selected(true);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(false); 
            setSlideImage(0);
        } else if(item === "thumb2"){
            setThumb1Selected(false);
            setThumb2Selected(true);
            setThumb3Selected(false);
            setThumb4Selected(false); 
            setSlideImage(1);
        } else if(item === "thumb3"){
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(true);
            setThumb4Selected(false); 
            setSlideImage(2);
        } else if(item === "thumb4"){
            setThumb1Selected(false);
            setThumb2Selected(false);
            setThumb3Selected(false);
            setThumb4Selected(true); 
            setSlideImage(3);
        }
    } 
    return (
            <div className="slider">
                <div className="swiper swiper-main">
                    <div className="swiper-wrapper">
                        <div className="swiper-buttons__container">
                            <div className="swiper-buttons">
                                <div 
                                    onClick={prevImage} 
                                    className="swiper-button-prev"
                                >
                                    <img
                                        src={require("../images/icon-previous.svg").default} 
                                        alt="next"
                                    />
                                </div>
                                <div 
                                    onClick={nextImage}
                                    className="swiper-button-next"
                                >
                                    <img 
                                        src={require("../images/icon-next.svg").default} 
                                        alt="next"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img
                                onClick={props.openModal} 
                                src={images[slideImage]} alt="imagenes"/>
                        </div>
                    </div>
                    <div className="swiper-thumbs">
                        <div id="thumb1" className={`swiper-thumbs__items ${thumb1Selected && 'thumb1On'}`}
                            onClick={() => imageSelector("thumb1")}
                        >
                            <img src={thumb1} alt="imagenes"/>
                        </div>
                        <div id="thumb2" className={`swiper-thumbs__items ${thumb2Selected && 'thumb2On'}`}
                            onClick={() => imageSelector("thumb2")}
                        >
                            <img src={thumb2} alt="imagenes"/>
                        </div>
                        <div id="thumb3" className={`swiper-thumbs__items ${thumb3Selected && 'thumb3On'}`}
                            onClick={() => imageSelector("thumb3")}
                        >
                            <img src={thumb3} alt="imagenes"/>
                        </div>
                        <div id="thumb4" className={`swiper-thumbs__items ${thumb4Selected && 'thumb4On'}`}
                            onClick={() => imageSelector("thumb4")}
                        >
                            <img src={thumb4} alt="imagenes"/>
                        </div>
                    </div>
                    {/* <div className="swiper-thumbs">
                        {
                            SlideData.map((data, key) => {
                                return (
                                    <div key={key} 
                                        id={data.id} 
                                        className={data.class}
                                        onClick={() => imageSelector(data.id)}
                                    >
                                        <img src={data.img} alt="imagenes"/>
                                    </div>
                                );
                            })
                        }
                    </div> */}

                </div>
            </div>
    );
}

export {Slide};