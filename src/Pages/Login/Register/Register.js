import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [error, setError]=useState('');
    useTitle('Register');

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL,email,password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text"  name="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Your Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
    
        <Button variant="primary" type="submit">
        Register
        </Button>

        <Form.Text className='text-danger'>
            {error}
        </Form.Text>
    </Form>
    );
};

export default Register;

