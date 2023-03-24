import React from 'react';

export default function Portfolio(props) {
    return (
        <div>
            {props.name}
            <br />{props.description}
            <br />{props.languages}
            <p>---</p>
        </div>
    )
}
