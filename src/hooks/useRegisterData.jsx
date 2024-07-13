import { useState, useCallback, useEffect } from 'react';
import { getRegistrationData } from '../services/RegisterDataService';

const useRegisterData = () => {
    const [registerData, setRegisterData] = useState([]);

    const fetchRegisterData = useCallback(async () => {
        try {
            const response = await getRegistrationData();
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
            setRegisterData(responseData);
            return responseData;
        } catch (error) {
            console.log("Error while getting user data", error);
            throw error;
        }
    }, []);

    useEffect(() => {
        fetchRegisterData();
    }, [fetchRegisterData]);

    return [registerData, fetchRegisterData];
};

export default useRegisterData;
