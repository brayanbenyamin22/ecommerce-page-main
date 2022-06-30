import React from "react";
import './sidemenu.css';

function Sidemenu(props) {

    return(
            <nav>
              <ul className={`sidemenu ${props.openMenu && 'active'}`}>
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
              <div className={`bg ${props.openMenu && 'on'}`}></div>          
            </nav> 
    );
}

export {Sidemenu};