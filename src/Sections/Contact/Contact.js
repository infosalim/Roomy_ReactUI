import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

import ContactCover from '../../assets/images/banner/contact-cover.jpg';

export default function ContactSection(){
    return <div className='contact-area'>
        <Container>
            <Row>
                <Col md='12'>
                    <img src={ContactCover} alt='cover' />
                    <SectionTitle
                        title='Contact Us'
                        desc='Whether you are feeling unsure or just want to share your experience with us, feel free to call or email anytime, anywhere. 
                        We are available 24/7 to fulfill your request.'
                        styles={{margin: 0}}  
                    />
                    <div className='contact-options'>
                        <p>Our Telephone: 0700-79 79 79</p>
                        <p>Our Email: roomy.booking@mail.com</p>
                        <p>Our Office: 123 Sunrise St., 70000 Ho Chi Minh City, Vietnam</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}