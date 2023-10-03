import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image  from "react-bootstrap/Image";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

import {FcGlobe,FcMoneyTransfer} from "react-icons/fc";
import {BsFolderFill} from "react-icons/bs"
import {FaUniversity} from "react-icons/fa";
import {MdBabyChangingStation} from "react-icons/md";
import { slideInUp, slideInDown, fadeInRight, fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import me from "../img/me_.jpg";
import csu from "../img/Caraga_State_University_1.png";

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



const ShortInfo = () => {

    return (
        <StyleRoot>
        <Container className="mt-3 p-1 mb-0">
            <Row>
                <Col sm={12} md={2} className="text-center">
                        <Row> 
                            <Col className="p-2 m-2">
                            
                                
                            </Col>
                        </Row>
                        <Row> 
                            <Col className="p-2 m-2">
                               
                            </Col>
                        </Row>
                </Col>
                <Col className="text-center" sm={12} md={8} >
                        <h4 className="mt-5 fw-bold" style={styles.slideInDown}>Hi,  <Link className="text-decoration-none" to="/about">I'm Edsel Matt O. Morales</Link></h4>
                        <Image src={me} rounded fluid className="h-50" alt="edsel matt picture"/>
                        
                        <p className="mt-1" style={styles.slideInUp}>I do 
                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                            <span className="fw-bold" role="button"> web-GIS</span>
                        </OverlayTrigger>
                        
                        
                        <FcGlobe className="fs-3"/> apps using 
                        <OverlayTrigger placement="bottom"  overlay={
                                <Tooltip >
                                    Free and Open-source Software
                                </Tooltip>
                            }>
                            <span className="fw-bold"> FOSS</span>
                        </OverlayTrigger>
                        <FcMoneyTransfer className="fs-3"/>
                       , teaches in a 
                        
                        <OverlayTrigger placement="bottom" overlay={
                                <Tooltip >
                                    <Image src={csu} rounded fluid alt="caraga state university" style={logocsu}/>
                                </Tooltip>
                            }>
                            <span className="fw-bold"> university</span>
                        </OverlayTrigger>
                        <FaUniversity className="fs-3 text-success"/> 
                         and attend my SON<MdBabyChangingStation className="fs-3 text-primary"/>, Zed.</p>
                        <p>some of my  <Link className="text-decoration-none fw-bold" to="/portfolio"> works</Link>
                        <BsFolderFill className="fs-3 text-warning"/>     
                        .</p>                    
                
                </Col>
                <Col sm={12} md={2} className="text-center">
                        <Row> 
                            <Col className="p-2 m-2 ">
                                
                            
                            </Col>
                        </Row>
                        <Row> 
                            <Col className="p-2 m-2">
        
                                
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>
        </StyleRoot>
    )
};

export default ShortInfo;