import React from 'react'
import { useFormik } from 'formik';
import './Login.scss'
import { LoginSchema } from '../../schemas';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';


const initialValues = {
    phone: '',
    password: ''

}
const Login = () => {
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            const { phone, password } = values;
            const res = await axios.post('http://127.0.0.1:5000/api/login', { password, phone });
            console.log(res.config.data);
            console.log(res.status)

            if (res.status === 400 || !res) {
                console.log("invlaid registration ");
                navigate('/login')
            }
            else {
                console.log("valid registratin");
                navigate("/")
            }

        },
    });
    return (
        <>
        <form className='login-form' onSubmit={handleSubmit}>
            <h4>Login</h4>
            <input
                type='number'
                placeholder='Registered number'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (<p className='form-error'>{errors.phone}</p>) : null}

            <input
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
            <button type='submit'>Login</button>
        </form>
        <div className="signUp-Link">
            <p>New to Farm IT?</p>
            <Link className='link' to="/signup">Create an account</Link>
        </div>
    </>
    );
};

export default Login;