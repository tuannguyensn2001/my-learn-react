import axios from 'axios';
import {refresh} from "./authService";

const myLearn = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization' : `Bearer ${localStorage.getItem('user_token')}`,

    }
})

myLearn.interceptors.response.use(response => {
    return response;
},error => {
        const {status, data} = error.response;

        if (status !== 401 || data.message !== 'Token Expired') return Promise.reject(error);

        return refresh()
            .then(response => {
                const {token} = response.data;
                localStorage.setItem('user_token',token);
                error.config.headers['Authorization'] = `Bearer ${token}`;
                return myLearn.request(error.config);
            })

})


export default myLearn;