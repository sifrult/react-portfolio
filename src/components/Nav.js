import React from 'react';

export default function Nav({currentPage, handlePageChange}) {

    const navLink = {color: '#4b5171'}
    const navLinkActive = {color: '#9d8db1', textDecoration: '#9d8db1 overline wavy'}

    return (
        <div className='header'>
            <h1>
                Amy Snarr
            </h1>
            <ul className='headerLinks'>
                <li>
                    <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    style={currentPage === 'Home' ? navLinkActive : navLink}
                    >About Me
                    </a>
                </li>
                <li>
                    <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    style={currentPage === 'Portfolio' ? navLinkActive : navLink}
                    >Portfolio
                    </a>
                </li>
                <li>
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    style={currentPage === 'Contact' ? navLinkActive : navLink}
                    >Contact
                    </a>
                </li>
                <li>
                    <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    style={currentPage === 'Resume' ? navLinkActive : navLink}
                    >Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}
