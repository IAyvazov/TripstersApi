import { useEffect, useState } from "react"
import { Button, Card, Nav } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { TripDetail } from "../../interfaces/trip";
import { getTripDetails } from "../../services/tripService";

const TripDetails = (creatorId: { creatorId: string }) => {
    const params = useParams();
    const [trip, setTrip] = useState<TripDetail['trip']>();

    const [isCreator, setIsCreator] = useState(false);

    useEffect(() => {
        (
            async () => {
                const tripid = params.id;
                const response = await getTripDetails(tripid);
                const trip = await response;
                setTrip(trip);
                setIsCreator(creatorId.creatorId === trip.creatorId)
            }
        )();
    }, [params,creatorId])

    return (
        <Card className="mt-5">
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#info">Trip Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#members">Members</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#comments" >
                            Comments
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{trip?.name}</Card.Title>
                <Card.Text>
                    From: {trip?.fromTown}
                </Card.Text>
                <Card.Text>
                    To: {trip?.toTown}
                </Card.Text>
                <Card.Text>
                    Creator: {trip?.creatorName}
                </Card.Text>
                {
                    trip?.description ?
                        <Card.Text>
                            Description: {trip?.description}
                        </Card.Text>
                        :
                        ""
                }
                {
                    trip?.travelers.length ?
                        <Card.Text>
                            Available Sets: {trip?.travelers}
                        </Card.Text>
                        :
                        ""
                }
                <Card.Text>
                    Start Date: 02.02.2022
                </Card.Text>
                {
                    isCreator ?
                        < Card.Text >
                            <Button variant="warning">Edit</Button>{' '}
                            <Button variant='danger'>Delete</Button>{' '}
                        </Card.Text>
                        :
                        <Button >Join</Button>
                }
            </Card.Body>
        </Card >
    )
}

export default TripDetails;