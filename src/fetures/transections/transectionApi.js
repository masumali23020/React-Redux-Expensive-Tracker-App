import axios from "../../utlis/axios";

export const getTransection = async() => {
    const respons = await axios.get('/transactions')
    return respons.data;

}

export const addTransaction = async (data)=> {
    const respons = await axios.post('/transactions', data);
    return respons.data
}