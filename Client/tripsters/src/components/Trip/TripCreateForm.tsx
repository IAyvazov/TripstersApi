import { Formik, Form } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TextField from '../TextField/TextField';
import * as yup from 'yup';
import { TripCreate } from '../../interfaces/trip';

const TripCreateForm = () => {

    const onSubmit = async (values: TripCreate, actions: any) => {
        console.log(values);
    }

    const validationSchema = yup.object().shape({
        name: yup.string().min(6, 'Symbols should be minimum 6').max(100, 'Symbols should be maximum 100').required('Name is a required field'),
        fromTown: yup.string().min(4, 'Symbols should be minimum 4').max(30, 'Symbols should be maximum 30').required('To Town is a required field'),
        toTown: yup.string().min(4, 'Symbols should be minimum 4').max(30, 'Symbols should be maximum 30').required('To Town is a required field'),
        description: yup.string().min(15, 'Symbols should be minimum 15').max(1000, 'Symbols should be maximum 1000'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                fromTown: '',
                toTown: '',
                description: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Container className='mt-5 my-auto'>
                <Row>
                    <Col className='md-4 my-auto'>
                    </Col>
                    <Col className='md-4'>
                        <div>
                            <h1 className='my-4 font-weight-bold .display-4'>Create Trip</h1>
                            <Form >
                                <TextField name="name" label="Name" type='text' />
                                <TextField name="fromTown" label="From Town" type='text' />
                                <TextField name="toTown" label="To Town" type='text' />
                                <TextField name="description" label="Description" type='text' />
                                <Button variant='dark' className='mt-3' type='submit' >Create</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col className='md-4 my-auto'>
                    </Col>
                </Row>
            </Container>

        </Formik>
    );
}

export default TripCreateForm;