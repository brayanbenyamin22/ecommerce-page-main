import React from "react";
import { Slide } from "./slide";
/* import { Add } from "../Add/add"; */
import '../Styles/main.css'


function Main (props) {

    return (
        <main className="main-container">
            <div className="main-container__items">
                <Slide 
                    openModal={props.openModal}
                    slideModal={props.slideModal}
                />
                {/* ====== ADD ====== */}
                <div className="info-container">
                    <div className="info-container__items">
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
                            <div className="add-container">
                                <div 
                                    className="added-products"
                                    disabled={true}
                                >
                                    <button
                                        type="button" 
                                        className="button-minus">
                                        <img 
                                            src={require("../images/icon-minus.svg").default} 
                                            alt="icon minus"
                                            onClick={props.minusProduct}
                                        />
                                    </button>
                                    <p className="products-counter">
                                        {props.product}
                                    </p>
                                    <button
                                        type="button" 
                                        className="button-plus">
                                        <img 
                                            src={require("../images/icon-plus.svg").default} 
                                            alt="icon plus"
                                            onClick={props.moreProduct}
                                        />
                                    </button>
                                </div>
                                <div className="add-cart-container">
                                    <button 
                                        type="button" 
                                        className="add-cart--button"
                                        onClick={props.cartProducts}
                                    >
                                        <div className="add-cart">
                                            <span className="cart">
                                                <img src={require("../images/icon-cart.svg").default} alt=""/>
                                            </span>
                                            <p>Add to cart</p>
                                        </div>
                                    </button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export { Main }; 