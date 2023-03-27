import React from 'react';

export default function Portfolio(props) {

    const cardStyle = {backgroundImage: 'url('+props.img+')', height: '200px', backgroundSize: 'cover' }

    return (
        <div style={cardStyle}>
            <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a><br />{props.description}<br />{props.languages}
            <p>---</p>
        </div>
    )
}
