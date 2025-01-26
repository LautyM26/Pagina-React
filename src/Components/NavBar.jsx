import React from "react"
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/Logo.webp"
import { Link } from "react-router"
import { Navbar, Nav, Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

function NavBar() {
    return (
        <header className="header d-flex justify-content-between">
            <img src={logo} alt="logo" className="logo" />
           
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/category/Consolas">Consolas</Nav.Link>
                            <Nav.Link as={Link} to="/category/Computadoras">Computadoras</Nav.Link>
                            <Nav.Link as={Link} to="/category/Videojuegos">Videojuegos</Nav.Link>
                            <Nav.Link as={Link} to="/category/Accesorios">Accesorios</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            
            <CartWidget/>
        </header>
    );
}

export default NavBar