import React from "react";
//import { AppContext } from "../Context/context";
import './cart.css';

function Cart () {
    /* const {
        openCart,
    } = React.useContext(AppContext); */
    const openCart = true;
    return (
        <div className={`cart-container ${openCart && 'active'}`}>
            Your cart is empty 
        </div>
    );
}

export {Cart};