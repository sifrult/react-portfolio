import React from 'react';

export default function Portfolio(props) {
    const imageStyle = {
        backgroundImage: 'url('+props.img+')',
        height: '200px',
        backgroundSize: 'cover',
        borderRadius: '30px',
    }
    return (
        <div style={imageStyle} className='card'>
            <p className='cardLink'>
                <a href={props.link} target="_blank" rel="noreferrer">{props.name}
                <br />{props.languages}</a>
            </p>
        </div>
    )
}
