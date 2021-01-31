import { BE_URL } from "../utils/URL"
import axios from 'axios'

export const getUser = async (token)=>{
    try {
        const response = await axios.get(`${BE_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    } catch (error) {
        return { status: 500, error: error.message }
    }
}

export const loginUser = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BE_URL}/users/login`, {
            email, password
        })
        return response
    } catch (error) {
        return { status: 500, error: error.message }
    }
}

export const signUser = async ({ userName, phone, email, password, city, state, zip, image }) => {
    try {
        const response = await axios.post(`${BE_URL}/users/signup`, {
            userName, phone, email, password, city, state, zip, avatar: image
        })
        return response
    } catch (error) {
        return { status: 500, error: error.message }
    }
}