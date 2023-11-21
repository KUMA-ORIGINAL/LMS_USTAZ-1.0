import axios from 'axios';

//base url
export const API_URL = `http://localhost:8000/api/`


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {   
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;    
        try {
            const token = JSON.parse(localStorage.getItem('user'));
            if(token){
            const response = await $api.post("user/token/refresh/", {refresh: token.tokens.refresh})
            localStorage.setItem('token', response.data.access);
            return $api.request(originalRequest);
            }
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;


// axios.post(`${API_URL}user/token/refresh/`, 
//             {
//                 refresh: token.tokens.refresh,
//             },
//             {withCredentials:true})