import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form'


const Contact = () => {

    return(
        <div>
            <h2 style= {{fontSize: 40}}>Ota yhteyttä</h2>
            Elias Mako, puh. 0400781589, kaivomiesoy(at)gmail.com
            <br></br><br></br>
            <Form>
                <Form.Label style={{ fontSize: 25}}>Jätä yhteydenottopyyntö</Form.Label><br></br>

                
                <Form.Text className="text-muted">
                    Vastaamme sähköpostilla mahdollisimman pian.
                    Emme jaa tietojanne kenellekään muulle.
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nimi:</Form.Label>
                    <Form.Control type="input" placeholder="Lisää nimi" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sähköpostiosoite:</Form.Label>
                    <Form.Control type="email" placeholder="Lisää sähköpostiosoite" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Lisätietoja:</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={}>
                    Lähetä
                </Button>
            </Form>
        </div>
    )
}

export default Contact