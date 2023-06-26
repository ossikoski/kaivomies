import React from 'react'

import logoSquare from '../img/logo230603_square.png'


const Header = () => {
    return(
        <div className="header" style={{ display:'flex'}}>
            <h1>Kaivomies</h1>  
            <img className='headerPic' src={ logoSquare } alt="Logo" /> 
        </div>
    )
}
export default Header