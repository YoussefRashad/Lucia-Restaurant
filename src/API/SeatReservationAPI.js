
const axios = require('axios')

const baseURL = 'http://localhost:3500'

const seatReservation = async (data)=>{
    const token = JSON.parse(localStorage.getItem('userData')).data.token
    try {
        const response = await axios.post(`${baseURL}/seat-reservation`, data,{
            headers:{
                Authorization: 'Bearer ' + token 
            }
        })
        console.log('from API >>> ', response);
        return response
    } catch (error) {
        return { status: 500}
    }
}

export default seatReservation