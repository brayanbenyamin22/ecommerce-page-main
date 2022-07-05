import React from 'react';
import { AppUI } from './AppUI';
import { Header } from '../Header/header';
import { Main } from '../Main/main';
import { Cart } from '../Cart/cart';
import { useLogic } from  './useLogic';

function App() {
  const {
    product,
    setProduct,
    proCart, 
    setProCart,
    openCart,
    setOpenCart,
    productAdded,
    setProductAdded,
} = useLogic();
/* ==== OPCION A ==== */
/* const moreProduct = () => {
    setProduct(product + 1);
}
const minusProduct = () => {
    if(product !== 0) {
        setProduct(product - 1);
    }
} */
/* ==== OPCION B ==== */
const moreProduct = () => {
    if(productAdded !== true ){
        setProduct(product + 1);
    }
}
const minusProduct = () => {
    if(productAdded !== true){
        if(product !== 0) {
            setProduct(product - 1);
        }
    }
}
const productPrice = 125.00;
const totalAmount = productPrice * proCart;

/* ==== Forma Manual ==== Ya funciona */
const cart = () => { 
    setOpenCart(!openCart);
} 
/* Productos Added */
const cartProducts = () => {
    if(product === 0){
        setProductAdded(false);
    } else {
        setProductAdded(true);
        setProCart(product);
    }
}
console.log(proCart);
const deleteProducts = () => {
    setProductAdded(false);
    setProduct(0);
}

const notification = () => {
    product !== 0 ? setProductAdded(true) : setProductAdded(false); 
}

return (
    <React.Fragment>
       <AppUI
            product={product}
            productAdded={productAdded}
            proCart={proCart}
       >
            <Header 
                cart={cart}
                notification={notification}
                proCart={proCart}
            />
            <Main 
                minusProduct={minusProduct}
                moreProduct={moreProduct}
                cartProducts={cartProducts}
            />
            <Cart 
                openCart={openCart} 
                productPrice={productPrice}
                totalAmount={totalAmount}
                deleteProducts={deleteProducts}
                proCart={proCart}
            />
       </AppUI>
    </React.Fragment>
);
}

export default App;
