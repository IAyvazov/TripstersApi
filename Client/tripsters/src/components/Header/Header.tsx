import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/identity';
import { logout } from '../../services/identityService';

const Header = ({ name, id, setName, setId }: User) => {

    const onLogoutClick = async () => {
        await logout();

        setName('');
        setId('');
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {
                        name ?
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={`/profile/${id}`}>{name}</Nav.Link>
                            </Nav>
                            :
                            ''
                    }

                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/">Tripsters</Navbar.Brand>
                    </Nav>

                    {
                        name ? <Nav>
                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/trip/create">Add Trips</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="trip/all">All Trips</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={`trip/my`}>My Trips</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/login' onClick={onLogoutClick} >Logout</Nav.Link>
                        </Nav> :
                            <Nav>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register"> Register</Nav.Link>
                            </Nav>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;