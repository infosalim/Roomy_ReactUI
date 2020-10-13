import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

import RoomyButton from '../../components/Button/Button';

// assets
import checkIcon from '../../assets/icons/check.png';

export default function ({ coverSrc, title, desc, cardType, ...props }){
    return <div className={`featured-card ${cardType}`}>
        <Container>
            <Row>
                <Col md='7'>
                    <div className='cover-image'>
                        { props.checkIcon ? <img src={checkIcon} className='check-icon' alt='icon' /> : null }
                        <img src={coverSrc} alt='cover' />
                    </div>
                </Col>
                <Col md='5'>
                    <div className='featured-content'>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <RoomyButton linkTo='/contact-us' caption='Call to Book' />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}