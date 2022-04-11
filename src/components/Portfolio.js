import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Portfolio = () => {

    return (
        <Container className="mt-5">
        <Row>
            <h2>Portfolio</h2>
        </Row>
        <Row>
            <Col className="p-2 m-2 bg-dark text-center rounded-3 text-white">First</Col>
            <Col className="p-2 m-2 bg-dark text-center rounded-3 text-white">Second</Col>
            <Col className="p-2 m-2 bg-dark text-center rounded-3 text-white">Third</Col>
        </Row>
        </Container>

    )
};

export default Portfolio;