import React from "react";
import './header.css';
import avatar from '../images/image-avatar.png';
function Header (props) {
    return (
        <header className="head-container">
            {/* === Container Left */}
            <div className="head-container__left">
                <span className="icon-menu"> {/* === Aqui ira el componente sidebar y navbar*/}
                    <img src={require("../images/icon-menu.svg").default} alt="Menu del icono"/>
                </span>
                <div className="logo">
                    <img src={require("../images/logo.svg").default} alt="Logo"/>
                </div>
            </div>
            {/* === Container Right */}
            <div className="head-container__right">
                <span 
                    onClick={props.cart}
                    className="icon-cart">
                    <span className={`notification ${props.productAdded && 'enable'}`}>
                        <p>{props.product}</p>
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
        </header>
    );
}

export { Header };