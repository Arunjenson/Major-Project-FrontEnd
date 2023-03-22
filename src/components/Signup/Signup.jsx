import React from 'react'
import './Signup.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import axios from 'axios';



const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: ''

}

const Signup = () => {
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            const { name, phone, email, password } = values;
            // console.log(name);
            // const res = await fetch('/api/adduser', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         name, phone, password
            //     })
            // });

            const res = await axios.post('https://localhost:5000/api/submit', { name, phone, password });
            console.log(res.data);



            const data = await res.json();

            if (data.status === 422 || !data) {
                window.alert("Invalid registration");
                console.log("invlaid registration ");
            }
            else {
                window.alert("Registration Successfull");
                console.log("valid registratin");

                navigate("/login")
            }

        },
    });


    // const registerUser = async (e, values) => {
    //     // e.preventDefault();
    //     console.log(values);
    //     const { name, phone, email, password } = values;


    // }


    return (
        <form className='signup-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter your name'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
            <input
                type='text'
                placeholder='Enter your Phone Number'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (<p className='form-error'>{errors.phone}</p>) : null}

            <input
                type='email'
                placeholder='Enter your Email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}

            <input
                type='password'
                placeholder='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}

            <button type='submit'>Sign Up</button>
        </form>
    );
}

export default Signup