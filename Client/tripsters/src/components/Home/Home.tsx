import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ name }: { name: string }) => {
    return (
        <Container className='mt-3 justify-content-md-center' >
            <br />
            <Carousel indicators={false} controls={false} className='mt-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://adventure.ir/wp-content/uploads/2019/12/adventure-trips-in-india_1440486703_aNbqdJ.jpg"
                        alt="Tripsters"
                    />
                    <Carousel.Caption>
                        <Container >
                            {
                                name ?
                                    <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="justify-content-md-center">

                                        <Col xs >
                                            <Link className='btn btn-secondary' to='/addTrips'>Add Trip</Link>
                                        </Col>
                                    </Row>
                                    :
                                    <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="justify-content-md-center">

                                        <Col xs >
                                            <Link className='btn btn-secondary' to='/login'>Login</Link>
                                        </Col>
                                        <Col xs>
                                            <Link className='btn btn-secondary' to='/register' >Register</Link>
                                        </Col>
                                    </Row>
                            }

                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Home;