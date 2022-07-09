import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    headers: {
        Accept: '*/*',
    },
});

request.interceptors.response.use(
    response => response.data,
    async error => Promise.reject(String(error)),
);

export default request;
