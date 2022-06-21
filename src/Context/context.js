import React from "react";

const AppContext = React.createContext();

function AppProvider (props) {
    /* ===== Logica del Add Product ===== */
    const [product, setProduct] = React.useState(0);
    const addProduct = () => {
        setProduct(product + 1);
    }
    const deleteProduct = () => {
        if(product !== 0) {
            setProduct(product - 1);
        }
    }
    const productPrice = 125.00;
    const totalAmount = productPrice * product;
    /* ===== Logica del Menu desplegable ====== */
    const [openCart, setOpenCart] = React.useState(false);
    if(product > 0){
        setOpenCart(true);
    }
    return(
        <AppContext.Provider value={{
            product,
            setProduct,
            addProduct,
            deleteProduct,
            productPrice,
            totalAmount,
            openCart,
            setOpenCart,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};