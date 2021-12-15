import { ReactElement } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (): ReactElement => {

    // Context => username 

    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* if(username){
                       
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/profile/id">Username</Nav.Link>
                    </Nav>
                    } */}

                    <Nav className="m-auto">
                        <Navbar.Brand as={Link} to="/">Tripsters</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register"> Register</Nav.Link>
                    </Nav>

                    {/* if(username){
                        <Nav>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/addTrips">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allTrips">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/myTrips">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    </Nav>
                    } */}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;