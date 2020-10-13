
const axios = require('axios')

const baseURL = 'http://localhost:3500'

const contactUS = async (data)=>{
    try {
        const response = await axios.post(`${baseURL}/contactUS`, data)
        console.log(response);
        return response;
    } catch (error) {
        return { status: 500}
    }
}

export default contactUS