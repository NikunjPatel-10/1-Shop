import React, { useEffect, useState } from 'react'
import { getRegistrationData } from '../services/RegisterDataService';

const useRegisterData = () => {
    const [resgisterData, setRegisterData] = useState([]);

    useEffect(() => {
        getRegistrationData().then((response) => {
            const responseData = [];
            for (const key in response.data) {
                const id = key;
                const registrationData = {
                    id: id,
                    firstName: response.data[id].firstName,
                    lastName: response.data[id].lastName,
                    email: response.data[id].email,
                    password: response.data[id].password
                };
                responseData.push(registrationData);
            }
            setRegisterData(responseData)
        }).catch((error) => {
            console.log("error while getting user Data", error);
        })
    }, [])
    return resgisterData;

}

export default useRegisterData