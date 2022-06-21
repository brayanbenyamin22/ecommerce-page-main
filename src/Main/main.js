import React, { useState } from "react";
import { Cart } from "../Cart/cart";
import { Slide } from "../slide/slide";
import { Add } from "../Add/add";
import './main.css'
import { AppContext } from "../Context/context";


function Main () {
    return (
        <main className="main-container">
            <Cart 
                /* openCart={openCart} */
            />
            {/* ===== Slide ===== */}
            <Slide />
            {/* ===== Information ===== */}
            <Add
                /* product={product}
                addProduct={addProduct()}
                deleteProduct={deleteProduct()} */
            />
        </main>
    );
}

export { Main }; 