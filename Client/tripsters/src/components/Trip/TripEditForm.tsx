import { TripCreate } from '../../interfaces/trip';
import { editTrip, getTripById } from '../../services/tripService';
import { useNavigate, useParams } from 'react-router-dom';
import TripForm from './TripForm';
import { useEffect, useState } from 'react';


const TripEditForm = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [trip, setTrip] = useState();

    useEffect(() => {
        (
            async () => {
                var response = await getTripById(params.id);
                setTrip(response);
            }
        )();

    }, [params])

    const onSubmit = async (values: TripCreate, actions: any) => {

        const response = await editTrip(values, params.id);

        console.log(response);

        if (response.ok) {
            navigate('/trip/all', { replace: true });
        }
    }

    return (
        <TripForm formName='Edit' onSubmit={onSubmit} trip={trip}></TripForm>
    );
}

export default TripEditForm;