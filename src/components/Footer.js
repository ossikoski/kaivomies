import React from 'react'
import igLogo from '../img/ig_logo.png'
import fbLogo from '../img/fb_logo.png'

const Footer = () => {

    return(
        <div className='footer'><div className='footerText'>
            <h2 style={{marginTop: '30px'}}>Ota yhteyttä</h2>
            Elias Mako<br></br>
            puh. 0400781589<br></br>
            kaivomiesoy(at)gmail.com<br></br><br></br>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer" style={{ marginRight: '10px' }}>
                <img className='socialsPic' src={ igLogo } alt="Instagram" />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
                <img className='socialsPic' src={ fbLogo } alt="Facebook" />
            </a>
        </div></div>
    )
}

export default Footer