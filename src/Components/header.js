import React from "react";
import { Sidemenu } from "./sidemenu";
import '../Styles/header.css';
import avatar from '../images/image-avatar.png';
import { useLogic } from "./useLogic";
function Header (props) {
    const {
        menu,
        setMenu,
    } = useLogic();
    return (
        <header className="head-container">
            <div className="head-container__items">
                {/* === Container Left */}
                <div className="head-container__left">
                    <span 
                        onClick={() => setMenu(!menu)}
                        className="icon-menu"
                    > {/* === Aqui ira el componente sidebar y navbar*/}
                        <img src={require("../images/icon-menu.svg").default} alt="Menu del icono"/>
                    </span>
                    <div className="logo">
                        <img src={require("../images/logo.svg").default} alt="Logo"/>
                    </div>
                    <Sidemenu 
                        openMenu={menu}
                        ocMenu={() => setMenu(!menu)}
                    />
                </div>
                {/* === Container Right */}
                <div className="head-container__right">
                    <span 
                        onClick={props.cart}
                        className="icon-cart">
                        <span className={`notification ${props.productAdded && 'notification-enable'}`}>
                            <p>{props.proCart}</p>
                        </span>
                        <img
                            className={`cart ${props.productAdded && 'newColor'}`}
                            src={require("../images/icon-cart.svg").default} 
                            alt="Carrito de compras"/>
                    </span>
                    <span className="icon-avatar">
                        <img src={avatar} alt="Perfil"/>
                    </span>
                </div>
            </div>
        </header>
    );
}

export { Header };