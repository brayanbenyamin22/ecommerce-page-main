import React from "react";

const AppContext = React.createContext();

function AppProvider (props) {
    /* ===== Logica del Add Product ===== */
    const [product, setProduct] = React.useState(0);

    /* ===== Logica del Menu desplegable ====== */
    const [openCart, setOpenCart] = React.useState(false);
    
    /* ==== Logica del boton añadir productos ==== */
    const [productAdded, setProductAdded] = React.useState(false);

    /* ==== Logica Menu ==== */
    const [menu, setMenu] = React.useState(false);
    return(
        <AppContext.Provider value={{
            product,
            setProduct,
            openCart,
            setOpenCart,
            productAdded, 
            setProductAdded,
            menu,
            setMenu,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};