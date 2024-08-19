import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d7a0e9e10d8404d8e8c6f340574f764'
    }
})