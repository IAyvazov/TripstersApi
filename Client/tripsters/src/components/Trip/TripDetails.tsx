import { useEffect, useState } from "react"
import { Card, Nav } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { TripDetail } from "../../interfaces/trip";
import { getTripDetails } from "../../services/tripService";

const TripDetails = () => {
    const params = useParams();
    const [trip, setTrip] = useState<TripDetail['trip']>();

    useEffect(() => {
        (
            async () => {
                const tripid = params.id;
                const response = await getTripDetails(tripid);
                const trip = await response;
                setTrip(trip);
            }
        )();
    }, [params])

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
            </Card.Body>
        </Card>
    )
}

export default TripDetails;