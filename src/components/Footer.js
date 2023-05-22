import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from "../img/logo.svg";
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href='/'><img src={navIcon1} alt="nav-icon"/></a>
                            <a href='/'><img src={navIcon2} alt="nav-icon"/></a>
                            <a href='/'><img src={navIcon3} alt="nav-icon"/></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;