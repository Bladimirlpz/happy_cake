import Form from 'react-bootstrap/Form';
import './contacto.css'

function Contacto() {
    return (
        <section className='seccion-contacto'>
            <h1>Cuentanos en que podemos ayudarte</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control size="lg" as="textarea" rows={5} />
                </Form.Group>
                <button>Enviar</button>
            </Form>
        </section>
    )
}

export default Contacto



