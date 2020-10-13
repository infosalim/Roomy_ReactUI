import React from 'react';
import './styles.scss';

export default function({ thumbSrc, title, desc }){
    return <div className='service-card'>
        <img src={thumbSrc} alt='thumbnail' />
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
}