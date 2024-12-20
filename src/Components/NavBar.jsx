import React from "react";

import CartWidget from "./CartWidget.jsx";
import logo from "../assets/Logo.webp";

import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
    return (
        <header className="header d-flex justify-content-between">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link  to="/category/beauty" as={Link}>Beauty</Nav.Link>
                            <Nav.Link  to="/category/fragrances" as={Link}>fragrances</Nav.Link>
                            <Nav.Link  to="/category/furniture" as={Link}>furniture</Nav.Link>
                            <Nav.Link  to="/category/groceries" as={Link}>groceries</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className="carrito">
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;