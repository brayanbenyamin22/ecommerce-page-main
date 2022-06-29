import React from "react";
//import { AppContext } from "../Context/context";
import './cart.css';
import image from '../images/image-product-1-thumbnail.jpg';
function Cart (props) {
    return (
        <div className={`cart-container ${props.openCart && 'active'}`}>
            <div className="cart-header">
                <p className="cart-title">
                    Cart
                </p>
            </div>
            <div className="cart-content">
                <p className="cart-empty disable">
                    Your cart is empty
                </p>
                <div className="cart-product">
                    <div className="product-info">
                        <span className="product-img">
                            <img src={image} alt="producto"/>
                        </span>
                        <div className="product-description">
                            <p className="product-title">Fall Limited Edition Snea...</p>
                            <span className="product-price">
                                <p className="product-quation">
                                    ${props.productPrice.toFixed(2)} x {props.product}
                                </p>
                                <p className="product-amount">
                                    {props.totalAmount.toFixed(2)}
                                </p>
                            </span>
                        </div>
                        <span className="deleteBtn">
                            <img src={require("../images/icon-delete.svg").default} alt="icon delete"/>
                        </span>
                    </div>
                    <button className="checkoutBtn">
                        <p>Checkout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export {Cart};