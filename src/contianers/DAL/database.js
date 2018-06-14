import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://webtrekk-api.herokuapp.com/'
});

export default instance;