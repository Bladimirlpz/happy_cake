import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css"
import { FcContacts } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { BsCake2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className='nav-bar'>
            <Container>
                <Nav className="me-auto">
                    <FcShop size={30} /><Link to={'/'}>Home</Link>
                    <FcContacts size={30} /><Link to={'/contacto'}>Contacto</Link>
                </Nav>
                <Navbar.Brand><Link to={'/'}>HAPPY CAKE</Link> <BsCake2 size={25} /></Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;