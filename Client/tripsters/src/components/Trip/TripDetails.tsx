import { useEffect, useState } from "react"
import { Button, Card, Nav } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { TripDetail } from "../../interfaces/trip";
import { getTripDetails, joinTrip, deleteTrip, editTrip } from "../../services/tripService";

const TripDetails = (userId: { userId: string }) => {
    const navigate = useNavigate();

    const params = useParams();
    const [trip, setTrip] = useState<TripDetail['trip']>();

    useEffect(() => {
        (
            async () => {
                const tripid = params.id;
                const response = await getTripDetails(tripid, userId.userId);
                const trip = await response;

                setTrip(trip);
            }
        )();
    }, [params, userId])

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
                            Members: {trip?.travelers.length}
                        </Card.Text>
                        :
                        ""
                }
                <Card.Text>
                    Start Date: {trip?.startDate}
                </Card.Text>
                {
                    trip?.isCreator ?
                        < Card.Text >
                            <Button variant="warning" onClick={() => {
                                (
                                    async () => {
                                        navigate(`/trip/edit/${params.id}`, { replace: true });
                                    }
                                )();
                            }}>Edit</Button>{' '}
                            <Button variant='danger' onClick={() => {
                                (
                                    async () => {
                                        await deleteTrip(trip?.id, userId.userId);
                                        navigate("/trip/all", { replace: true });
                                    }
                                )();
                            }}>Delete</Button>{' '}
                        </Card.Text>
                        :
                        trip?.isMember ?
                            ""
                            :
                            <Button onClick={() => {
                                (
                                    async () => {
                                        await joinTrip(trip?.id, userId.userId);
                                        navigate("/trip/all", { replace: true });
                                    }
                                )();
                            }}>Join</Button>
                }
            </Card.Body>
        </Card >
    )
}

export default TripDetails;