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
    const [slideImage, setSlideImage] = useState(0);
    const [thumb1Selected, setThumb1Selected] = useState(true);
    const [thumb2Selected, setThumb2Selected] = useState(false);
    const [thumb3Selected, setThumb3Selected] = useState(false);
    const [thumb4Selected, setThumb4Selected] = useState(false);
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
        thumb1Selected, 
        setThumb1Selected,
        thumb2Selected, 
        setThumb2Selected,
        thumb3Selected, 
        setThumb3Selected,
        thumb4Selected, 
        setThumb4Selected,
    });
}

export {useLogic};