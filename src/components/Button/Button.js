import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function RoomyButton({linkTo, caption, btnType}){
    return <React.Fragment><Link to={linkTo} className={`roomy-btn ${btnType}`}>{caption}</Link></React.Fragment>
}