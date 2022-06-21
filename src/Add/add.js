import React from "react";
import { AppContext } from "../Context/context";
import './add.css';

function Add() {
    const {
        product,
        addProduct,
        deleteProduct,
    } = React.useContext(AppContext);
    return (
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
                    <div className="add-container">
                        <div className="added-products">
                            <span className="button-minus">
                                <img 
                                    src={require("../images/icon-minus.svg").default} 
                                    alt="icon minus"
                                    onClick={deleteProduct}
                                />
                            </span>
                            <p className="products-counter">
                                {product}
                            </p>
                            <span className="button-plus">
                                <img 
                                    src={require("../images/icon-plus.svg").default} 
                                    alt="icon plus"
                                    onClick={addProduct}
                                />
                            </span>
                        </div>
                        <div className="add-cart-container">
                            <button 
                                type="button" 
                                className="add-cart--button"
                                /* onClick={} */
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
    );
}

export {Add};