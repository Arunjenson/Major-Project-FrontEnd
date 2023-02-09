import * as Yup from 'yup'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().required("Enter Your Phone Number").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short")
        .max(10, "too long"),
    password: Yup.string().min(6).required("Please enter your password")
})