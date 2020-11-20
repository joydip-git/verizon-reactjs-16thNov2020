import Axios from 'axios'
import { apiURL } from '../constants/appConstants'
const axiosObj = Axios.create({
    baseURL: apiURL,
    timeout: 2000
})
export default axiosObj;