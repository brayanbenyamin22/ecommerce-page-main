import React from "react";
import { Slide } from "./slide";
import '../Styles/slideModal.css';
import { useLogic } from "./useLogic";

function SlideModal (props) {

    /* console.log(`SlideModal: ${props.slideModal}`); */
    return(
        <div className={`slideModal ${props.slideModal && 'modalActive'}`}>
            <div className="slideModal-items">
                <div className="slide-button-close">
                    <img
                        onClick={props.closeModal} 
                        src={require("../images/icon-close.svg").default} 
                        alt="close"
                    />
                </div>
                <Slide  />
                <div className="bgSlideModal"></div>
            </div>
        </div>
    );
}

export {SlideModal};