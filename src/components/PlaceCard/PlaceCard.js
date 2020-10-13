import React from 'react';
import './styles.scss';

export default function PlaceCard ({ thumbSrc, price, title, rating, desc }){
    return <div className='place-card'>
        <div className='thumb'>
            <img src={thumbSrc} alt='thumb'/>
            <div className='thumb-caption'>
                <h6>from vnd</h6>
                <h5>{price}</h5>
            </div>
        </div>
        <div className='details'>
            <div className='title-rating'>
                <h4>{title}</h4>
                <h4>{rating}/10</h4>
            </div>
        </div>
        <p>{desc}</p>
    </div>
}