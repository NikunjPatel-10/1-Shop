import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const login = localStorage.getItem("auth");

    if (!login) {
        console.log();
        navigate("/login")
    }


    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute