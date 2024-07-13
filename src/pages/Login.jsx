import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import mainImg from "./../assets/images/login-img.png";
import logo from "./../assets/images/logo.png";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import useRegisterData from "../hooks/useRegisterData";

const Login = () => {
  const [registerData, fetchRegisterData] = useRegisterData();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const data = await fetchRegisterData();
      const Auth = data.find(
        (res) => res.email === values.email && res.password === values.password
      );

      if (Auth) {
        localStorage.setItem("auth", true);
        localStorage.setItem("user", Auth.id);
        navigate("../home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Failed to fetch register data", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper h-100">
      <div className="row h-100 overflow-auto">
        <div className="col-12 col-sm-6 gx-0 order-1">
          <div className="h-100 d-flex flex-column align-items-center">
            <div>
              <figure className="logo-img-wrapper mb-0">
                <img src={logo} alt="Logo" />
              </figure>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form-size">
                <div className="heading-text mb-4 px-3"></div>
                <div className="mb-4">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control rounded-pill"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="mb-4">
                  <div className="form-control d-flex custom-password rounded-pill">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="form-input p-0 border-0"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="border-0 bg-white eye-icon-btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <IconEye className="text-gray" />
                      ) : (
                        <IconEyeOff className="text-gray" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className="login-btn rounded-pill w-100 border-0 text-white p-2"
                  >
                    Submit
                  </button>
                </div>
                <div className="detail-text my-2">
                  <p className="text-center">
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
        <div className="col-12 col-sm-6 gx-0 login-image order-sm-2">
          <figure className="main-img-wrapper mb-0">
            <img src={mainImg} alt="Main" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Login;
