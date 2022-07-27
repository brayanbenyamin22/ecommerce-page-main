import React from 'react';
import { AppUI } from './AppUI';
import { Header } from './header';
import { Main } from './main';
import { Cart } from './cart';
import { SlideModal } from './slideModal';
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
    slideModal,
    setSlideModal,
} = useLogic();

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

const deleteProducts = () => {
        setProductAdded(false); //Cierra la muestra del producto
        setProCart(0); //Reinicia el contador del Cart
        setProduct(0); //Reinicia el contador del Adder
}

const notification = () => {
    product !== 0 ? setProductAdded(true) : setProductAdded(false); 
}
/*  Abrir Slide Modal */
const openModal = () => {
    setSlideModal(true);
}
const closeModal = () => {
    setSlideModal(false);
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
                openModal={openModal}
                slideModal={slideModal}
            />
            <Cart 
                cart={cart}
                openCart={openCart} 
                productPrice={productPrice}
                totalAmount={totalAmount}
                deleteProducts={deleteProducts}
                proCart={proCart}
            />
            <SlideModal 
                slideModal={slideModal}
                closeModal={closeModal}
            />
       </AppUI>
    </React.Fragment>
);
}

export default App;
