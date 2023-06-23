import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import loginImg from './../assets/images/login-img.png'
import logo from './../assets/images/logo.png'
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    /**
     * validate using yup
     */
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const [showPassword, setShowPassword] = useState(false);

    /**
     * for show password of eye icon
     */
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='login-wrapper h-100'>
            <div className='row h-100 '>
                <div className='col-12 col-sm-6 gx-0'>

                    <div className=" h-100 d-flex  flex-column  align-items-center">
                        <div>
                            <figure className='logo-img-wrapper mb-0'>
                                <img src={logo} />
                            </figure>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        // onSubmit={handleSubmit}
                        >
                            <Form className="form-size">
                                <div className="heading-text mb-4 px-3">
                                    <h3>Login page</h3>
                                </div>
                                <div className="mb-4 ">
                                    {/* <label htmlFor="email" className='m-2'>Email</label> */}
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control  rounded-pill "
                                        placeholder="email Id"
                                    />

                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                                <div className="mb-4">
                                    {/* <label htmlFor="password" className='m-2'>Password</label> */}
                                    <div className="password-wrapper form-control  rounded-pill">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            className="form-input p-0 border-0"
                                            placeholder="password"
                                        />
                                        <button type="button" className=' border-0   bg-white eye-icon-btn' onClick={togglePasswordVisibility}>
                                            {showPassword ? <IconEye className='text-secondary' /> : <IconEyeOff className='text-secondary' />}
                                        </button>
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                                <div className=" my-4">
                                    <button type="submit" className=' login-btn rounded-pill w-100 border-0 text-white p-2'>Submit</button>
                                </div>
                                <div className="detail-text my-2">
                                    <p className='text-center'>
                                        If you are a new user{" "}
                                        <Link to="../registration" className="main-text">
                                            Click here
                                        </Link>{" "}
                                        to register
                                    </p>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className='col-12 col-sm-6 gx-0 h-100'>
                    <figure className='login-img-wrapper  mb-0'>
                        <img src={loginImg} />
                    </figure>
                </div>
            </div>
        </div>

    )
}

export default Login