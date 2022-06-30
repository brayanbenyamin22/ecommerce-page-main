import React from "react";
import { AppContext } from "../Context/context";
import { Header } from "../Header/header";
import { Main } from "../Main/main";
import { Cart } from "../Cart/cart"
function AppUI () {
    const {
        product,
        setProduct,
        openCart,
        setOpenCart,
        productAdded,
        setProductAdded,
    } = React.useContext(AppContext);

    const moreProduct = () => {
        setProduct(product + 1);
    }
    const minusProduct = () => {
        if(product !== 0) {
            setProduct(product - 1);
        }
    }
    const productPrice = 125.00;
    const totalAmount = productPrice * product;
    /* === Abrir el carrito === */
    /* ----Auto---- */
    /* product === 0 ? setOpenCart(false) : setOpenCart(true); */
    /* ==== Forma Manual ==== Ya funciona */
    const cart = () => { 
        setOpenCart(!openCart);
    } 
    /* Productos Added */
    const cartProducts = () => {
        setProductAdded(true);
    }
    const deleteProducts = () => {
        setProductAdded(false);
        setProduct(0);
    }
    return (
        <React.Fragment>
            <Header 
                cart={cart}
                product={product}
                productAdded={productAdded} 
            />
            <Main 
                product={product}
                minusProduct={minusProduct}
                moreProduct={moreProduct}
                cartProducts={cartProducts}
            />
            <Cart 
              openCart={openCart} 
              product={product}
              productPrice={productPrice}
              totalAmount={totalAmount}
              productAdded={productAdded}
              deleteProducts={deleteProducts}
            />
        </React.Fragment>
    );
}

export {AppUI};