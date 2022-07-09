import axios from 'axios';

const request = axios.create({
    baseURL: 'https://www.doffy.xyz',
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
