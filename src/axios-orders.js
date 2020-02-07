import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://latihan-921e1.firebaseio.com/'
});

export default instance;

