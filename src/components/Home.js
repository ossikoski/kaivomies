import React from 'react'

import Contact from './Contact.js'


const Home = () => {
    return(
    // {{ color: 'black', backgroundColor: '#E8DED1', display:'flex', alignItems: 'center', position: 'absolute', left: 100, top: 300}}>
        <div style={{marginTop: 200}}>
            Teemme kaivohuollot ja muut perseen rapsutukset käden käänteessä! ;D
            <div className="home" style={{alignItems: 'left', marginTop: 100}}>
                <Contact/>
            </div>
        </div>
    )
}

export default Home