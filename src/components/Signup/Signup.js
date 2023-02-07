import React, { useState } from 'react'
import './Signup.css'
const Signup = () => {
    const [signupData, setSignupData] = useState({
        username: '',
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
                placeholder='username'
                name='username'
                value={signupData.username}
                onChange={handleSignupInput}
                required
            />
            <input
                type='email'
                placeholder='email'
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