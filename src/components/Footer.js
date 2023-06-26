import React from 'react'
import igLogo from '../img/ig_logo.png'
import fbLogo from '../img/fb_logo.png'


const Footer = () => {

    return(
        <div class="foot">
            <div class="left">
                Tmi Kaivomies<br></br>
                Y-tunnus: 3365293-7
            </div>

            <div class="middle">
                <h3>Ota yhteyttä</h3>
                Elias Mako, puh. 0400781589<br></br>
                tmikaivomies@gmail.com
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