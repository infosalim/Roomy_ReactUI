import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import footerLogo from '../../../assets/footer-logo.png';
import instagram from '../../../assets/icons/instagram.png'; 
import facebook from '../../../assets/icons/facebook.png'; 
import tripadvisor from '../../../assets/icons/tripadvisor.png'; 

import "./styles.scss";

const Footer = () => {
  const menuItems = [{title: 'Accomodations', linkTo: '/'}, {title: 'Extra Services', linkTo: '/extra-service'}, {title: 'Contact Us 0700-79 79 79', linkTo: '/contact-us'}];

const renderMenu = menuItems.map((item, i) => (<li key={i}><Link to={item.linkTo}>{item.title}</Link></li>))
  return (
    <footer>
      <Container>
        <Row>
          <Col md="12">
          <div className="footer-wrapper">
            <div className="logo-container">
            <Link to='/' className="logo">
              <img src={footerLogo} alt='logo' />
            </Link>
            </div>
            <nav>
                <ul>{renderMenu}</ul>
            </nav>
            <div className="social-links">
                <ul>
                    <li><Link to={{pathname: "https://instagram.com"}} target="_blank"><img src={instagram} alt="icon"/></Link></li>
                    <li><Link to={{pathname: "https://facebook.com"}} target="_blank"><img src={facebook} alt="icon"/></Link></li>
                    <li><Link to={{pathname: "https://www.tripadvisor.com/"}} target="_blank"><img src={tripadvisor} alt="icon"/></Link></li>
                </ul>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
