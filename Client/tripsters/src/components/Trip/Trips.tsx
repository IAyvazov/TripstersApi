import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Trip } from "../../interfaces/trip";
import { getAllTrips } from "../../services/tripService";
import TripCard from "./TripCard";

const Trips = () => {

    const [trips, setTrips] = useState<[]>();

    useEffect(() => {
        (
            async () => {
                const response = await getAllTrips();
                const trip = await response;
                setTrips(trip.result);
            }
        )();

    }, []);

    return (
        <div className='mb-5 mt-5'>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-5 mt-4 mb-4 mr-5 ml-5 justify-content-md-center">

                {
                    trips?.map((trip: Trip['trip']) => {
                        return <TripCard key={trip.id + trip.name} trip={trip} />
                    })
                    ??
                    <div>
                        There is no trips.
                    </div>
                }

            </Row>

        </div>
    )
}

export default Trips;