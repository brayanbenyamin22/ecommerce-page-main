import React from "react";
//import { AppContext } from "../Context/context";
import './cart.css';

function Cart (props) {
    return (
        <div className={`cart-container ${props.openCart && 'active'}`}>
            Your cart is empty 
        </div>
    );
}

export {Cart};