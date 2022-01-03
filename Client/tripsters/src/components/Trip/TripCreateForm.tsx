import { TripCreate } from '../../interfaces/trip';
import { createTrip } from '../../services/tripService';
import { useNavigate } from 'react-router-dom';
import TripForm from './TripForm';


const TripCreateForm = () => {

    const navigate = useNavigate();

    const onSubmit = async (values: TripCreate, actions: any) => {

        console.log(values);
        
        const response = await createTrip(values);

        if (response.ok) {
            navigate('/trip/all', { replace: true });
        }
    }

    return (
        <TripForm formName='Create' onSubmit={onSubmit}></TripForm>
    );
}

export default TripCreateForm;