import React from 'react'
import igLogo from '../img/ig_logo.png'
import fbLogo from '../img/fb_logo.png'


const Footer = () => {

    return(
        <div class="foot">
            <div class="left">
                Kaivomies Oy<br></br>
                Y-tunnus: 3461968-8
            </div>

            <div class="middle">
                <h3>Ota yhteyttä</h3>
                Elias Mako, puh. 0400781589<br></br>
                kaivomiesoy@gmail.com
            </div>

            <div class="right">
                <a href='https://www.instagram.com/kaivomies' target='_blank' rel="noreferrer" style={{ marginRight: '10px' }}>
                    <img className='socialsPic' src={ igLogo } alt="Instagram" />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100093469816422' target='_blank' rel="noreferrer">
                    <img className='socialsPic' src={ fbLogo } alt="Facebook" />
                </a>
            </div>
        </div>

    )
}

export default Footer