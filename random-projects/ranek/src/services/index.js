import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

export const api = {
    get(endPoint) {
        return axiosInstance.get(endPoint);
    },
    post(endPoint, body) {
        return axiosInstance.post(endPoint, body);
    }
}

export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}