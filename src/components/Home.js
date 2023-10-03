import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image  from "react-bootstrap/Image";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { Link } from "react-router-dom";

import {FcGlobe,FcMoneyTransfer} from "react-icons/fc";
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaUniversity, FaBlogger, FaYoutube, FaFacebookSquare} from "react-icons/fa";
import {MdBabyChangingStation} from "react-icons/md"
import { slideInUp, slideInDown, fadeInRight, fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import me from "../img/me_.jpg";
import csu from "../img/Caraga_State_University_1.png";
import Nav from "./Nav";

const styles = {
    slideInUp: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    slideInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
      fadeInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    },
    fadeInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
  }

  const popover = (
    <Popover id="popover-basic" className="rounded-0">
      <Popover.Header as="h3" className="bg-dark text-white rounded-0">Apps I've developed</Popover.Header>
      <Popover.Body>
      <ul className="list-group p-0">
            <li className="list-group-item"><a href="http://geoagri.da.gov.ph/" target="blank" className="text-decoration-none fw-bold">GEOAGRI</a></li>
            <li className="list-group-item"><a href="http://mindset.ccgeo.info/evidens" target="blank" className="text-decoration-none fw-bold">Flood EViDEns</a></li>
            <li className="list-group-item"><a href="https://geoitp.ccgeo.info/" target="blank" className="text-decoration-none fw-bold">ITP Portal</a></li>
            </ul>
      </Popover.Body>
    </Popover>
  );

  const logocsu = {
    height:"auto",
    width: "150px"
  };

 
  const popoverCSU = (
    <Popover className="rounded-0 bg-transparent border-0">
      <Popover.Body>
      <Image src={csu} rounded fluid alt="caraga state university" style={logocsu}/>
      </Popover.Body>
    </Popover>
  );
     /*
  const popoverFOSS = (
    <Popover className="rounded-0 bg-transparent border-0">
      <Popover.Body>
      <Image src={csu} rounded fluid alt="caraga state university" style={logocsu}/>
      </Popover.Body>
    </Popover>
  );
  */


const Home = () => {

    return (
      <>
      <Nav/>
     
        <StyleRoot>
        <Container className="mt-3 p-1 position-relative">
            <Row>
            <Col className="rounded-3 col-md-2 col-sm-12">
                    <Row> 
                        <Col className="p-2 m-2">
                            <p style={styles.fadeInLeft} className="align-right">
                             <FaBlogger className="fs-1 text-warning" />
                            </p>
                            
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="p-2 m-2">
                            <p style={styles.fadeInLeft} className="align-right"> <FaYoutube className="fs-1 text-danger" />
                            </p>
                        </Col>
                    </Row>
            </Col>
            <Col className="text-dark text-center rounded-3 col-md-8 col-sm-12">
                    <h4 className="mt-5 fw-bold" style={styles.slideInDown}>Hi,  <Link className="text-decoration-none" to="/about">I'm Edsel Matt O. Morales</Link></h4>
                    <Image src={me} rounded fluid className="h-25" alt="edsel matt picture"/>
                    
                    <p className="mt-1" style={styles.slideInUp}>I do 
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <span className="fw-bold" role="button"> web-GIS</span>
                    </OverlayTrigger>
                    
                    
                    <FcGlobe className="fs-3"/> apps using <span className="fw-bold">FOSS</span><FcMoneyTransfer className="fs-3"/>, teaches in a 
                    <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverCSU}>
                        <span className="fw-bold"> university</span>
                    </OverlayTrigger>
                    <FaUniversity className="fs-3 text-success"/> 
                    and attend my SON<MdBabyChangingStation className="fs-3 text-primary"/>, Zed.</p>
                 
               
            </Col>
            <Col className="text-center rounded-3 col-md-2 col-sm-12">
                    <Row> 
                        <Col className="p-2 m-2 text-center">
                            <p style={styles.fadeInRight}><FaFacebookSquare className="fs-1 text-primary" /></p>
                           
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="p-2 m-2 text-center">
                            <p style={styles.fadeInRight}><BsFillTelephoneFill className="fs-2 text-success" /> 
                            </p>
                            
                        </Col>
                    </Row>
            </Col>
            </Row>

        </Container>
        </StyleRoot>
        </>
    )
};

export default Home;