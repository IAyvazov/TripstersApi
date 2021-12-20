import { Container, Row, Col } from 'react-bootstrap';
import Signup from './Signup';

const Register = () => {

    return (
        <Container className='mt-5 my-auto'>
            <Row>
                <Col className='md-5'>
                    <Signup />
                </Col>
                <Col className='md-7 my-auto'>
                    <img className='img-fluid w-100' src="https://image.shutterstock.com/image-vector/travel-arrangements-airlines-tourist-luggage-260nw-659331847.jpg" alt='Tripster Register' />
                </Col>
            </Row>
        </Container>
    );
}

export default Register;