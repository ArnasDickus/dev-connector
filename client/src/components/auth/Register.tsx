import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AllRoutes } from '../../enum/allroutes.enum';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log('success');
        }
    }
    return (
    <React.Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={event => onSubmit(event)}>
            <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={event => onChange(event)} 
                    required />
            </div>
            <div className="form-group">
                <input 
                type="email" 
                placeholder="Email Address" 
                name="email"
                value={email}
                onChange={event => onChange(event)}  
                required 
                />
                <small className="form-text"
                >This site uses Gravatar so if you want a profile image, use a
                Gravatar email</small>
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={event => onChange(event)}
                // minLength="6"
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={event => onChange(event)}
                // minLength="6"
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
        Already have an account? <Link to={AllRoutes.LOGIN}>Sign In</Link>
        </p>
    </React.Fragment>
    )
}

export default Register;
