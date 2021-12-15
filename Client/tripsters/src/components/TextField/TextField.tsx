import { ErrorMessage, useField } from "formik";
import { FunctionComponent } from "react";

interface Props {
    name: string;
    type: string;
    label: string;
}

const TextField: FunctionComponent<Props> = ({ label, ...props })=> {

    const [field, { error, touched }] = useField(props);

    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${touched && error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete='off'
            />
            <ErrorMessage component='div' name={field.name} className='text-danger' />
        </div>
    )
}

export default TextField;



