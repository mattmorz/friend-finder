import React, { useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const MyNav = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">Friend Finder</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Matt Morales</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default MyNav;