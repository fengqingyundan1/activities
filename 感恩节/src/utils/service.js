import axios from 'axios';

// create an axios instance
const service = axios.create({
    baseURL: 'https://www.toread.com.cn',
    timeout: 20000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        if (config.method == 'get') {
            config.params = {
                ...config.params,
            };
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        } else {
            if (config.data instanceof FormData) {
                config.data = Data;
                config.headers['Content-Type'] = 'multipart/form-data; charset=UTF-8';
            } else {
                config.data = {
                    ...config.data,
                };
                config.headers['Content-Type'] =
                    'application/x-www-form-urlencoded; charset=UTF-8';
            }
        }

        return config;
    },
    error => {
        return Promise.reject({
            message: error
        });
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code != 1) {
            if (Object.prototype.toString.call(res) == '[object ArrayBuffer]') {
                return res;
            }
            return Promise.reject(res.message || 'error');
        } else {
            return res.data;
        }
    },
    error => {
        return Promise.reject({
            message: error
        });
    }
);

export default service;
