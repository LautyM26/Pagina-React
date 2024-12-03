import React from 'react'
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/Logo.webp"
import "bootstrap/dist/css/bootstrap.min.css"

function NavBar () {
    return (
        <header className="header d-flex justify-content-between">
            <div> <img src={logo} alt="logo" className="logo" /> </div>

            <div>
                <nav className="navbar">
                  <a href="">Computadoras</a>
                  <a href="">Celulares</a>
                  <a href="">Consolas</a>
                  <a href="">Videojuegos</a>
                  <a href="">Otros</a>
                </nav>
            </div>

            <div className="carrito"> <CartWidget/> </div>

        </header>
    )
}

export default NavBar