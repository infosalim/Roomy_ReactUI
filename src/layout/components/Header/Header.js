import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Logo from '../../../assets/logo.png';

import "./styles.scss";

const Header = () => {
  const menuItems = [{title: 'Accomodations', linkTo: '/'}, {title: 'Extra Services', linkTo: '/extra-service'}, {title: 'Contact Us', linkTo: '/contact-us'}];

const renderMenu = menuItems.map((item, i) => (<li key={i}><Link to={item.linkTo}>{item.title}</Link></li>))
  return (
    <header>
      <Container>
        <Row>
          <Col md="12">
          <div className="header-wrapper">
            <div className="logo-container">
            <Link to='/' className="logo">
              <img src={Logo} alt='logo' />
            </Link>
      </div>
      <nav>
        <ul>{renderMenu}</ul>
      </nav>
          </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
