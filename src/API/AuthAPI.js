
const axios = require('axios')

const baseURL = 'http://localhost:3500'

export const sendImage = async (data)=>{
    try {
        const response = await axios.post(`${baseURL}/users/signup`, data,{
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        })
        console.log(response.data);
        return {data: response.data, status: response.status}
    } catch (error) {
        return {status: 500, error: error.response.data}
    }
}


export const LoginAPI = async (data)=>{
    try {
        const response = await axios.post(`${baseURL}/users/login`, data)
        console.log(response.data);
        return {data: response.data, status: response.status}
    } catch (error) {
        return {status: 500, error: error.response.data}
    }
}


export const SignupAPI = async (data) =>{
    try {
        const response = await axios.post(`${baseURL}/users/signup`, data)
        console.log(response.data);
        return {data: response.data, status: response.status}
    } catch (error) {
        return {status: 500, error: error.response.data}
    }
}


export const AuthAPI = async (token)=>{
    try {
        const response = await axios.get(`${baseURL}/users/me`,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        })
        return {data: response.data, status: 200}
    } catch (error) {
        return {status: 500, error: error.response.data}
    }
}
