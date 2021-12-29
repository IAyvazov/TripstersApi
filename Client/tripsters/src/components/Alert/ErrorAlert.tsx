import { useState } from "react";
import { Alert } from "react-bootstrap";


const ErrorAlert = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Invalid Credentials</Alert.Heading>
            </Alert>
        );
    }
    return null;
}

export default ErrorAlert;