import React from 'react';
import avatar from '../../assets/avatar.png';

export default function Home() {
    return (
        <div className='contentStyle'>
            <img src={avatar} alt='avatar' className='avatarStyle'></img>
            <div><p>
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
                <br />Place: Williamsburg, VA
                <br />Musician: Taylor Swift
                <br />Animal: Owl
            </p></div>
        </div>
    )
}
