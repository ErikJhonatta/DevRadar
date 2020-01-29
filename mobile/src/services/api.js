import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.247.179:3333',

});

export default api;