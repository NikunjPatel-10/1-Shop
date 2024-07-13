import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import mainImg from './../assets/images/login-img.png';
import logo from './../assets/images/logo.png'
import { postRegistrationData } from '../services/RegisterDataService';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
    const navigate = useNavigate()
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    })


    const handleSubmit = (values) => {
        
        // signUpWithEmailPassword(values);
        // toast.success('Registered Successfully', {
        //     position: toast.POSITION.TOP_RIGHT
        // })
        postRegistrationData(values)
        navigate("../login");
    };

    return (
        <div className='registration-wrapper h-100'>
            <div className='row h-100 overflow-auto'>
                <div className='col-12 col-sm-6 gx-0 order-1'>

                    <div className=" h-100 d-flex  flex-column  align-items-center">
                        <div>
                            <figure className='logo-img-wrapper mb-0'>
                                <img src={logo} />
                            </figure>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form className="register-form">
                                <div className="heading-text mb-4 px-3">
                                </div>
                                <div className="mb-4 ">
                                    {/* <label htmlFor="email" className='m-2'>Email</label> */}
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control rounded-pill"
                                        placeholder="Firstname"
                                    />

                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        className="error-message"

                                    />
                                </div>
                                <div className="mb-4 ">
                                    {/* <label htmlFor="email" className='m-2'>Email</label> */}
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control rounded-pill"
                                        placeholder="Lastname"
                                    />

                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                        className="error-message"

                                    />
                                </div>
                                <div className="mb-4 ">
                                    {/* <label htmlFor="email" className='m-2'>Email</label> */}
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control  rounded-pill "
                                        placeholder="Email "
                                    />

                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="error-message"

                                    />
                                </div>
                                <div className="mb-4">
                                    {/* <label htmlFor="password" className='m-2'>Password</label> */}

                                    <Field
                                        id="password"
                                        name="password"
                                        className="form-control rounded-pill  "
                                        placeholder="Password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                                <div className=" my-4">
                                    <button type="submit" className=' register-btn rounded-pill w-100 border-0 text-white p-2' >Submit</button>
                                </div>
                                <div className="detail-text my-2">
                                    <p className='text-center'>
                                        Already a member then{" "}
                                        <Link to="../login" className="main-text">
                                            Click here
                                        </Link>{" "}
                                        to Login
                                    </p>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className='col-12 col-sm-6 gx-0 register-image order-sm-2'>
                    <figure className='main-img-wrapper mb-0'>
                        <img src={mainImg} alt='img-not-found' />
                    </figure>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}

export default Registration