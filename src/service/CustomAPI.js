import axios from "axios";

const token1 = JSON.parse(localStorage.getItem('user'))
const customAPI = () => {axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {

        Authorization : `Bearer ${token1.token}`
    }
});
}
export default customAPI