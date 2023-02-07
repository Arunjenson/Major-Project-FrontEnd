import React, { useState } from 'react'

const Login = () => {
    const [loginData, setLoginData] = useState({
        phone: '',
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
        setLoginData({
            phone: '',
            password: ''
        })
    };

    return (
        <form className='login-form' onSubmit={handleLoginSubmit}>
            <input
                type='number'
                placeholder='Enter your Phone Number'
                name='phone'
                value={loginData.phone}
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