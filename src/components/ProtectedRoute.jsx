import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const path = useLocation()
    const login = localStorage.getItem("auth");

    useEffect(() => {
        if (login) {
            navigate("../home")
            // if (path.pathname === '/login' && path.pathname === '/registration') {
            //     navigate('../home')
            // }
        }
        else {

            navigate("../login")
        }
    }, [])


    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default ProtectedRoute