import axios from 'axios'

export function getRequest(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
    })
}

export function getRequestAuth(url) {
    try {
        let token = ''
        const cookie = document.cookie.split("Authorization=")[1]
        if (cookie.includes("")) {
            token = cookie.split(";")[0]
        }
        token = cookie
        axios.defaults.headers.common['Authorization'] = token
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
        })
    }
    catch {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
        })

    }
}
export function postRequestAuth(url, object) {
    let token = ''
    const cookie = document.cookie.split("Authorization=")[1]
    if (cookie.includes(";")) {
        token = cookie.split(";")[0]
    }
    token = cookie
    axios.defaults.headers.common['Authorization'] = token
    return new Promise((resolve, reject) => {
        axios.post(url, object)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}