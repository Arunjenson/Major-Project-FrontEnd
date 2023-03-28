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
            const { name, phone, password } = values;
            const res = await axios.post('http://127.0.0.1:4000/api/adduser', { name, phone, password });
            console.log(res.data);
            console.log(res.status)

            if (res.status === 422 || !res) {
                window.alert("Invalid registration");
                console.log("invlaid registration ");
            }
            else {
                console.log("valid registratin");

                navigate("/login")
            }

        },
    });

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