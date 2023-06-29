import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './pagenotfound.css'

const PagenotFound = () => {
    let plsMutateMe = 0;
    const impureAdd = (num) => {
        return plsMutateMe += num;
    };
    // const d = impureAdd(5);
    // const e = impureAdd(5);
    function* hello() {
        console.log("zero");
        yield 1
        console.log('first');
        yield 2
    }
    const d = hello()
    const e = d.next().value
    // const f = d.next().value

    console.log(e)

    const [a, seta] = useState(5)
    const [state, setState] = useState(4)
    const [updateA, setUpdateA] = useState(false);
    const abc = () => {
        // setState((prev) => console.log(prev))
        setState(7)
    }

    useEffect(() => {
        if (updateA) {
            seta(10)
            setUpdateA(false)
        }
    }, [state]);

    useEffect(() => {
        setUpdateA(true)
    }, [state])

    return (
        <div className="d-flex justify-content-center align-items-center h-100 ">
            {/* <div className="row  d-flex align-items-center justify-content-center ">
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
                        GOTO HOME PAGE
                    </Link>
                    <button onClick={abc}>click </button>{state}-{a}
                </div>
            </div> */}
            <div className='parent border'>
                <div className='child'>1</div>
                <span className='border '>123<a className='border border-danger'>i am paragraph</a>456</span>
            </div>
        </div>
    )
}

export default PagenotFound