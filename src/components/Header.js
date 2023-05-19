import React from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '../utils/useWindowSize.js'

import logoPaska from '../img/logo_paska.jpeg'


const Header = () => {
    const { width } = useWindowSize()
    const asd = width/3 - 300
    var img_size = (width > 1000) ? 250 : 250*width*0.001
    console.log(img_size)
    return(
        <div className="header" style={{ display:'flex'}}>
            <h1 style={{ fontSize: 80, marginLeft: width/3-200, marginRight: 30}}>Kaivomies</h1>
            <Link to="/" style={{ position: 'absolute', right: 30, top: 30, marginLeft: 30}}>
                <img src={ logoPaska } alt="Paska logo" style={{ height: img_size, width: img_size}}/>
            </Link>
            {/* <Link to="/" style={{ marginLeft: width/10}}>
                <img src={ logoPaska } alt="Paska logo" style={{ height: 250, width: 250}}/>
            </Link> */}
        </div>
    )
}

export default Header