
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const contactUS = async (data)=>{
    try {
        const response = await axios.post(`${BE_URL}/contactUS`, data)
        return response;
    } catch (error) {
        return { status: 500}
    }
}

export default contactUS