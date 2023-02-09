import React from 'react'
import './Signup.css'

import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';



const initialValues = {
    name: '',
    phone: '',
    email: '',
    password: ''

}
const Signup = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
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