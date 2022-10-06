import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env._BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env._API_KEY ? process.env._API_KEY : '',
    },
});

axiosInstance.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 404) {
        }
        return Promise.reject(error);
    }
);
