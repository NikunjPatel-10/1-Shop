import React from 'react'
import { Link } from 'react-router-dom'

const PagenotFound = () => {


    return (
        <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="row  d-flex align-items-center justify-content-center ">
                <div className="col-md-12 text-center">
                    <h1 className="big-text">Oops!</h1>
                    <h2 className="small-text">404 - PAGE NOT FOUND</h2>
                </div>
                <div className="col-md-6  text-center">
                    <p>
                        The page you are looking for might have been removed had its name
                        changed or is temporarily unavailable.
                    </p>

                    <Link
                        to={"/"}
                        className="home-page-button button-dark-blue iq-mt-15 text-center"
                    >
                        GO TO HOME PAGE
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PagenotFound