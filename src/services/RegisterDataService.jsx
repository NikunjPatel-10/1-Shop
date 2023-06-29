import { baseUrl } from './../../environment';
import axios from 'axios';


export const postRegistrationData = async (data) => {
    return await axios.post(baseUrl + "RegisterData.json", { ...data })
};

export const getRegistrationData = async () => {
    return await axios.get(baseUrl + "RegisterData.json")
}