import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { UserID } from "../../interfaces/identity";
import { Trip } from "../../interfaces/trip";
import { getAllTripsByUser } from "../../services/tripService";
import TripCard from "./TripCard";

const MyTrips = ({ userId }: UserID) => {

    const [trips, setTrips] = useState<[]>();

    useEffect(() => {
        (
            async () => {
                const response = await getAllTripsByUser(userId);
                const trip = await response;
                setTrips(trip);
            }
        )();

    }, [userId]);

    return (
        <div className='mb-5 mt-5'>

            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">

                {
                    trips?.map((trip: Trip['trip']) => {
                        return <TripCard key={trip.id + trip.name} trip={trip} />
                    })
                }

            </Row>

        </div>
    )
}

export default MyTrips;