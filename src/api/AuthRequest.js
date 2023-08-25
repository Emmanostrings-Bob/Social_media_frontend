import axios from "axios"

const API = axios.create({baseURL: process.env.REACT_APP_BACKEND_URL})

export const logIn = (formdata) => API.post('/auth/login', formdata)
export const signUp = (formdata) => API.post('/auth/register', formdata)