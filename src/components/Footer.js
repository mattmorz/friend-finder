import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { slideInUp, slideInDown, fadeInRight, fadeInLeft, pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import {BsFillTelephoneFill} from "react-icons/bs"
import {FaBlogger, FaYoutube, FaFacebookSquare} from "react-icons/fa";

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
    pulse: {
        animation: 'x 1s',
        animationName: Radium.keyframes(pulse, 'pulse')
    },
  }


const Footer = () => {
    return (
        <StyleRoot>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="lh-1">
                    <p style={styles.pulse} className="px-2 text-center">
                        <a href="https://www.facebook.com/ttamlesde/" target="_blank"><FaFacebookSquare className="fs-1 text-primary px-2" /></a>
                        <a href="" target="_blank"><BsFillTelephoneFill className="fs-2 text-success px-1" /></a>
                        <a href="https://www.snippetbymatt.com/" target="_blank"><FaBlogger className="fs-1 text-warning px-2" /></a>
                        <a href="https://www.youtube.com/channel/UC3-xnaUluPAwRsTuqrAmt-w" target="_blank"><FaYoutube className="fs-1 text-danger px-1" /></a>
                    </p>
                    <p className="text-center mt-0">©mattmorz.2022</p>
                </Col>
            </Row>
        </StyleRoot>
            
    )
};

export default Footer;