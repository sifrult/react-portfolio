import React from 'react';

export default function Portfolio(props) {
    return (
        <div>
            <a href={props.link} target="_blank">{props.name}</a><br />{props.description}<br />{props.languages}
            <p>---</p>
        </div>
    )
}
