import React from 'react'


const Home = () => {
    return(
        <div className='infoText'>
            <h2>
                Miksi puhdistaa kaivo?
            </h2>
            <br></br>
            Vesirengaskaivot keräävät ajan myötä pohjalle ja renkaiden sisäpinnalle lietettä.
            Tämä aiheuttaa veden kirkkauden heikentymistä ja mahdollista makuhaittaa.
            Ylärenkaiden väleistä saattaa päästä pintavettä kaivoon, joten ne tulisi saumata umpeen.
            Huonojen kansirakenteiden takia kaivoon voi päästä eläimiä,
            kuten pieniä nisäkkäitä, sammakoita tai etanoita. 
            <br></br><br></br>
            Kaivojen huoltotarve vaihtelee:
            esimerkiksi jotkin rauta- tai mangaanipitoista vettä tuottavat kaivot
            keräävät veteen väriä niin sankoin määrin, että niiden puhdistus täytyy tehdä
            tyypillistä 5-10 vuoden huoltoväliä useammin.
            Käyttämättömissä kaivoissa seisova vesi alkaa monesti haista,
            joten runsas käyttö vedentuoton puitteissa on kaivolle vain hyväksi.

            <h2>
                Mitä kaivonhuoltotyöhön kuuluu?
            </h2><br></br>
            Kaivohuoltotyöhön kuuluu kaivon ulkoinen ja sisäinen tarkistus,
            veden pH-arvon mittaus, kaivonrenkaiden pesu, pohjalietteiden poisto,
            yläsaumojen tiivistäminen ja veden desinfiointi.
            Pohjan koostumuksen ja veden pH-arvon mukaan kaivon pohjalle lisätään tarvittaessa
            kalkkia ja suodatinhiekkaa.
            <br></br><br></br>
            <h3>
                Hinnasto
            </h3>
            <ul>
                <li>100cm ja 80cm sisähalkaisija 495€</li>
                <li>120cm sisähalkaisija +100€</li>
                <li>150cm sisähalkaisija +150€</li>
                <li>yli 7m syvä kaivo +100€</li>
            </ul>
            Ylen artikkeli <a href="https://yle.fi/a/3-12047949" style={{ textDecoration: 'None'}}>Rengaskaivon huollon hinnoissa on tuhansien eurojen ero </a> 
             voi antaa hyvää vertailukohtaa hinnoittelulle. <br></br>

            Muista, että kaivohuollon voit merkitä veroilmoituksen kotitalousvähennyksiin ja
            saada 50% verovähennystä.
            <br></br>
            <h2>
                Toimialue
            </h2>
            <br></br>
            Toimin Varsinais-Suomen ja Satakunnan alueella, mutta kysy tarjousta myös pidemmälle!
        </div>
    )
}

export default Home