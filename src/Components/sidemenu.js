import React from "react";
import '../Styles/sidemenu.css';

function Sidemenu(props) {

    return(
            <nav>
              <ul className={`sidemenu ${props.openMenu && 'activeMenu'}`} onClick={props.ocMenu}>
                <li>
                    <a href="#home">Collections</a>
                </li>
                <li>
                    <a href="#home">Men</a>
                </li>
                <li>
                    <a href="#home">Women</a>
                </li>
                <li>
                    <a href="#home">About</a>
                </li>
                <li>
                    <a href="#home">Contact</a>
                </li>
              </ul>
              <div 
                    className={`bg ${props.openMenu && 'on'}`} 
                    onClick={props.ocMenu}
              >
              </div>          
            </nav> 
    );
}

export {Sidemenu};