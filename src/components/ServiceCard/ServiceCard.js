import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function({ thumbSrc, title, desc, ...props }){
    console.log(window.location.pathname);

    if(window.location.pathname === '/'){
        return <div className='service-card'>
        <img src={thumbSrc} alt='thumbnail' />
        <Link to='/extra-service'>{title}</Link>
        <p>{desc}</p>
    </div>
    }
    return <Link to='/extra-service' className='service-card'>
        <img src={thumbSrc} alt='thumbnail' />
        <h4>{title}</h4>
        <p>{desc}</p>
    </Link>
}