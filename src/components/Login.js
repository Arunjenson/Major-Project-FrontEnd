import React, { useState } from 'react'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleLoginInput = event => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    const handleLoginSubmit = event => {
        event.preventDefault();
        console.log(loginData);
    };

    return (
        <form className='login-form' onSubmit={handleLoginSubmit}>
            <input
                type='email'
                placeholder='Email'
                name='email'
                value={loginData.email}
                onChange={handleLoginInput}
                required
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
                value={loginData.password}
                onChange={handleLoginInput}
                required
            />
            <button type='submit'>Login</button>
        </form >
    );
};

export default Login;