import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import TextField from '../TextField/TextField';
import * as yup from 'yup';
import { FC } from 'react';
import { onRegisterSybmit } from '../../services/identityService';

const Signup: FC = () => {

    const validationSchema = yup.object().shape({
        userName: yup.string().min(3, 'Symbols should be minimum 3').max(40, 'Symbols should be maximum 40').required('Name is a required field'),
        email: yup.string().email('Invalid email format').required('Email is a required field'),
        password: yup.string().min(6, 'Symbols should be minimum 6').max(12, 'Symbols should be maximum 12').required('Password is a required field'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onRegisterSybmit}
        >
            <div>
                <h1 className='my-4 font-weight-bold .display-4'>Sign Up</h1>
                <Form >
                    <TextField name="userName" label="Name" type='text' />
                    <TextField name="email" label="Email" type='email' />
                    <TextField name="password" label="Password" type='password' />
                    <TextField name="confirmPassword" label="Confirm Password" type='password' />
                    <Button variant='dark' className='mt-3' type='submit' >Signup</Button>
                </Form>
            </div>
        </Formik>
    );
}

export default Signup;