import React, { useState } from 'react'
import './Signup.css'
const Signup = () => {
    const [signupData, setSignupData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleSignupInput = event => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value
        });
    };

    const handleSignupSubmit = event => {
        event.preventDefault();
        console.log(signupData);
    };

    return (
        <form className='signup-form' onSubmit={handleSignupSubmit}>
            <input
                type='text'
                placeholder='Enter your name'
                name='name'
                value={signupData.name}
                onChange={handleSignupInput}
                required
            />
            <input
                type='text'
                placeholder='Enter your Phone Number'
                name='phone'
                value={signupData.phone}
                onChange={handleSignupInput}
                required
            />
            <input
                type='email'
                placeholder='Enter your Email'
                name='email'
                value={signupData.email}
                onChange={handleSignupInput}
                required
            />
            <input
                type='password'
                placeholder='password'
                name='password'
                value={signupData.password}
                onChange={handleSignupInput}
                required
            />
            <button type='submit'>Sign Up</button>
        </form>
    );
}

export default Signup