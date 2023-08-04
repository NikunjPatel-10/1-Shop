import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import mainImg from './../assets/images/login-img.png'
import logo from './../assets/images/logo.png'
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import useRegisterData from '../hooks/useRegisterData';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const getRegisterData = useRegisterData();
    const navigate = useNavigate()
    const [resgisterData, setRegisterData] = useState([]);

    useEffect(() => {
        setRegisterData(getRegisterData)
        console.log(resgisterData);

    }, [getRegisterData]);


    const handleSubmit = (values) => {
        let Auth = resgisterData.find((res) => res.email == values.email && res.password == values.password)

        if (Auth) {
            navigate("../home");

            localStorage.setItem("auth", true)
        }


    }

    const initialValues = {
        email: "",
        password: "",
    };

    /**
     * validate using yup
     */
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("email is required"),
        password: Yup.string().required("password is required"),
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
            <div className='row  h-100 overflow-auto'>
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
                            <Form className="form-size">
                                <div className="heading-text mb-4 px-3">
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
                                    <div className="password-wrapper form-control  rounded-pill">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            className="form-input p-0 border-0"
                                            placeholder="Password"
                                        />
                                        <button type="button" className=' border-0   bg-white eye-icon-btn' onClick={togglePasswordVisibility}>
                                            {showPassword ? <IconEye className='text-gray' /> : <IconEyeOff className='text-gray' />}
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
                <div className='col-12 col-sm-6 gx-0 login-image order-sm-2 '>
                    <figure className='main-img-wrapper mb-0'>
                        <img src={mainImg} alt='no-img-found' />
                    </figure>
                </div>

            </div>
        </div>

    )
}

export default Login