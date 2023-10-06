import React, { useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";
import logo from "../img/ff.png";
import Image from 'react-bootstrap/Image';
const MyNav = () => {
    const number_of_friends = useSelector((state) => state.friend.number_of_friends);

    return (
        <Navbar bg="light" expand="lg" variant="light" className="shadow-sm">
            <Container>
                <Link className="navbar-brand" to="/"> <Image src={logo} rounded style={{width:"50px",height:"auto"}} /></Link>
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
                    Signed in as: <a href="#login">Matt Morales</a> <Badge bg="primary" className="px-2 mx-1 rounded-5">{number_of_friends}</Badge>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default MyNav;