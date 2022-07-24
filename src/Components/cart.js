import React from "react";
import '../Styles/cart.css';
import image from '../images/image-product-1-thumbnail.jpg';

function Cart (props) {
    return (
        <React.Fragment>
            <div className="cart-container">
                <div className={`cart-container__product ${props.openCart && "active fadeInDown"}`}>
                    <div className="cart-header">
                        <p className="cart-title">
                            Cart
                        </p>
                    </div>
                    <div className="cart-content">
                        <p className={`cart-empty ${props.productAdded && 'disable'}`}>
                            Your cart is empty
                        </p> 
                        <div className={`cart-product ${props.productAdded && 'enable'}`}>
                            <div className="product-info">
                                <span className="product-img">
                                    <img src={image} alt="producto"/>
                                </span>
                                <div className="product-description">
                                    <p className="product-title">Fall Limited Edition Sneakers</p>
                                    <span className="product-price">
                                        <p className="product-quation">
                                            ${props.productPrice.toFixed(2)} x {props.proCart}
                                        </p>
                                        <p className="product-amount">
                                            ${props.totalAmount.toFixed(2)}
                                        </p>
                                    </span>
                                </div>
                                <span 
                                    onClick={props.deleteProducts}
                                    className="deleteBtn">
                                    <img src={require("../images/icon-delete.svg").default} alt="icon delete"/>
                                </span>
                            </div>
                            <button 
                                type="button"
                                className="checkoutBtn"
                                onClick={props.cart}
                            >
                                <p>Checkout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bgCart ${props.openCart && 'bgCartOn'}`} onClick={props.cart}>
            </div> {/* Solo es para cerrar el cart */}
        </React.Fragment>
    );
}

export {Cart};