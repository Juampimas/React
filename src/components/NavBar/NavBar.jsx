import React from "react"
import Carrito from "../CartWidget/CartWidget"
import "../../styles/NavBar.scss"

function NavBar() {
    return(
        <header className="navbar">
            <img className="logotipo" src='../img/Recurso 1.png' alt="logo" />
            <ul>
                <li><a href="celulares">celulares</a></li>
                <li><a href="tablets">tablets</a></li>
                <li><a href="computadoras">computadoras</a></li>
                <li><a href="consolas">consolas</a></li>
                <li><a href="televisores">televisores</a></li>
            </ul>
            <div className="carrito">
                <Carrito />
            </div>
        </header>
    )
}

export default NavBar 