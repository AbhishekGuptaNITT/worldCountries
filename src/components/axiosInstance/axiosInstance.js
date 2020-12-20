import axios from 'axios'

const axiosConfig = {
    baseURL:'https://wft-geo-db.p.rapidapi.com/v1/geo/',
}
const instance = axios.create(
    axiosConfig
)

export default instance;