import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const Nav = () => {
    return(
        <div className="nav" style={{ display:'flex'}}>
            <Link to="/" style={{ marginLeft: 30, marginTop: 30, marginRight: 50 }}>
                <Button>Etusivu</Button>
            </Link>
            <Link to="/palvelut" style={{marginTop: 30}}>
                <Button>Palvelut</Button>
            </Link>
        </div>
    )
}


export default Nav