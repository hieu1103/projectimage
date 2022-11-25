import axios from 'axios'
import { postRequestAuth } from './Request'
export async function registerRequest(params) {
    return await new Promise((resolve, reject) => {
        axios.post("/api/v1/user/register", params)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}
export async function loginRequest(params) {
    return await new Promise((resolve, reject) => {
        axios.post("/api/v1/user/login", params)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export function getCurrentUser() {
    const user = localStorage.getItem('user')
    if (!user) return null;
    return user
}



export async function changePasswordRequest(form){
    console.log(form)
    let token = ''
    const cookie = document.cookie.split("Authorization=")[1]
    if (cookie.includes(";")) {
        token = cookie.split(";")[0]
    }
    token = cookie
    axios.defaults.headers.common['Authorization'] = token
    return new Promise((resolve, reject) => {
        axios.post("/api/v1/user/change-password", form)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}