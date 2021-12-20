import * as yup from 'yup';
import { Formik, Form } from "formik";
import { Button, Col, Container, Row } from "react-bootstrap";
import TextField from "../components/TextField/TextField";
import { LoginData, SetUser } from '../interfaces/identity';
import { login } from '../services/identityService';
import {useNavigate } from 'react-router-dom';

function Login({ setName, setId }: SetUser) {

    const navigate = useNavigate();


    const validationSchema = yup.object().shape({
        userName: yup.string().min(3, 'Symbols should be minimum 3').max(40, 'Symbols should be maximum 40').required('Name is a required field'),
        password: yup.string().min(6, 'Symbols should be minimum 6').max(12, 'Symbols should be maximum 12').required('Password is a required field'),
    });

    const onLoginSubmit = async (values: LoginData, actions: any) => {
        var response = await login(values);

        var content = await response.json();

        navigate('/', { replace: true });
        setName(content.userName);
        setId(content.Id);
    };

    return (
        <Container className='mt-5 my-auto'>
            <Row>
                <Col className='md-5'>
                    <Formik
                        initialValues={{
                            userName: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onLoginSubmit}
                    >
                        <div>
                            <h1 className='my-4 font-weight-bold .display-4'>Sign In</h1>
                            <Form>
                                <TextField name="userName" label="Name" type='text' />
                                <TextField name="password" label="Password" type='password' />
                                <Button variant='dark' className='mt-3' type='submit'>Login</Button>
                            </Form>
                        </div>
                    </Formik>
                </Col>
                <Col className='md-7 my-auto'>
                    <img className='img-fluid w-100' src="https://image.shutterstock.com/image-vector/travel-arrangements-airlines-tourist-luggage-260nw-659331847.jpg" alt='Tripster Register' />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;