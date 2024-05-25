const axios = require("axios");
const axiosClient = axios.create(
    {
        baseURL:"http://localhost:3000",
        timeout:1000,
        headers:{'Content-Type':'application/json'}
    }
);
module.exports = axiosClient;