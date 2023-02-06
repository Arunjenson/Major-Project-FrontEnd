import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the signup information to your API for processing
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="firstName"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div >
            <div>
                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div >
            <button type='submit'>Sign Up</button>
        </form >
    );

}

export default Signup