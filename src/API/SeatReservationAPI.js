
import axios from 'axios'
import { BE_URL } from '../utils/URL'

const seatReservation = async (data)=>{
    const token = JSON.parse(localStorage.getItem('user'))
    try {
        const response = await axios.post(`${BE_URL}/seat-reservation`, data,{
            headers:{
                Authorization: 'Bearer ' + token 
            }
        })
        return response
    } catch (error) {
        return { status: 500}
    }
}

export default seatReservation