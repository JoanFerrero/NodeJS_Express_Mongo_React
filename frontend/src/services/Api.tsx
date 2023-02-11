import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
    const api = axios.create({
        baseURL: "http://localhost:3001"
    })

    return api;
}