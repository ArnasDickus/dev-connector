import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AllRoutes } from '../../enum/allroutes.enum';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         console.log('success');
    }
    return (
    <React.Fragment>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={event => onSubmit(event)}>
            <div className="form-group">
            <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email} 
                onChange={event => onChange(event)} 
                required
            />
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password} 
                onChange={event => onChange(event)} 
            />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
            Don't have an account? <Link to={AllRoutes.REGISTER}>Sign Up</Link>
        </p>
    </React.Fragment>
    )
}

export default Login;
