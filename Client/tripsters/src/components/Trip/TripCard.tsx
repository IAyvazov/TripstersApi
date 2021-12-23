import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trip } from "../../interfaces/trip";

const TripCard = ({ trip }: Trip) => {
    return (
        <Col className='mt-3 mb-3 ml-3 mr-3' style={{ display: 'flex', flexDirection: 'row' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{trip.name}</Card.Title>
                    <Card.Text>
                        From: {trip.fromTown}
                    </Card.Text>
                    <Card.Text>
                        To: {trip.toTown}
                    </Card.Text>
                    <Button>
                        <Link className="btn btn primary" to={`/trip/${trip.id}`} >Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default TripCard;