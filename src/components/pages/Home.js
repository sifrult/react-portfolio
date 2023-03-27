import React from 'react';
import avatar from '../../assets/avatar.png';

export default function Home() {

    const contentStyle = {border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column', alignItems:"center", textAlign: 'center'}

    const avatarStyle = {width: '50%'}

    return (
        <div style={contentStyle}>
            <img src={avatar} alt='avatar' style={avatarStyle}></img>
            <p>
                Hello! My name is Amy! I have a passion for math, coding, and all things logic. I love to crochet and cross stitch, and do puzzles with my two daughters.
            </p>
            <p>
                I have a B.S. in Math from Northern Arizona University, and I will soon have a Full Stack certificate from the University of Utah.
            </p>
            <p>
                Here are some favorites of mine:
                <br />Flower: Peony
                <br />Meal: Pozole
                <br />Fruit: Mango
                <br />Fast food: Popeye's
                <br />Musician: Taylor Swift
                <br />Animal: Owl
            </p>
        </div>
    )
}
