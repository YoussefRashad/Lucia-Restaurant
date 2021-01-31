import axios from 'axios'
import { BE_URL } from '../utils/URL'

export const getMenuList = async ()=>{
    try {
        const response = await axios.get(`${BE_URL}/menuList`)
        return response
    } catch (error) {
        return { status: 500, error: error.message }
    }
}