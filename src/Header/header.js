import React from "react";
import { Sidemenu } from "../Sidemenu/sidemenu";
import { AppContext } from "../Context/context";
import './header.css';
import avatar from '../images/image-avatar.png';
function Header (props) {
    const {
        menu,
        setMenu,
    } = React.useContext(AppContext);

    return (
        <header className="head-container">
            {/* === Container Left */}
            <div className="head-container__left">
                <span 
                    onClick={() => setMenu(!menu)}
                    className="icon-menu"
                > {/* === Aqui ira el componente sidebar y navbar*/}
                    <img src={require("../images/icon-menu.svg").default} alt="Menu del icono"/>
                    <Sidemenu 
                        openMenu={menu}
                    />
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
                    <span className={`notification ${props.productAdded && 'notification-enable'}`}>
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