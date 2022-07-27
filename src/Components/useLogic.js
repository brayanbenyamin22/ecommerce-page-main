import React, {useState} from "react";

function useLogic() {
  
    /* ===== Logica del Add Product ===== */
    const [product, setProduct] = useState(0);

    const [proCart, setProCart] = useState(0);

    /* ===== Logica del Menu desplegable ====== */
    const [openCart, setOpenCart] = useState(false);
        
    /* ==== Logica del boton añadir productos ==== */
    const [productAdded, setProductAdded] = useState(false);
    
    /* ==== Logica Menu ==== */
    const [menu, setMenu] = useState(false);

    /* ==== Logica del Slide ==== */
    const [slideModal, setSlideModal] = useState(false);
    const [slideImage, setSlideImage] = React.useState(0);
    return(
      {  
        product,
        setProduct,
        proCart, 
        setProCart,
        openCart,
        setOpenCart,
        productAdded, 
        setProductAdded,
        menu,
        setMenu,
        slideModal,
        setSlideModal,
        slideImage, 
        setSlideImage,
    });
}

export {useLogic};