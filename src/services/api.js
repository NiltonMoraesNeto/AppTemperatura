import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?key=3341767c&city_name='
});

export default api;