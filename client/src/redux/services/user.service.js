/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api/users/"

const getPublicContent = () => {
    return axios.get(API_URL + "all")
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() })
}

const getFacilitiesBoard = () => {
    return axios.get(API_URL + "facilities", { headers: authHeader() })
}

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() })
}

export default {
    getPublicContent,
    getUserBoard,
    getFacilitiesBoard,
    getAdminBoard
}