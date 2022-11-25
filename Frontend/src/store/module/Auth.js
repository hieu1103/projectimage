import { getCurrentUser } from '../../helper/Auth';
import { createStore } from 'vuex'

const user = getCurrentUser()

export default {
    name: "Auth",
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        accessToken: ''
    },
    getters: {
        IS_LOADING: state => {
            return state.loading;
        },
        IS_LOGGED_IN: state => {
            return state.isLoggedIn
        },
        CURRENT_USER: state => {
            return state.currenUser
        },
        AUTH_ERROR: state => {
            return state.authError
        },
    },
    mutations: {
        LOGIN_SUCCESS(state, data) {
            state.currentUser = data.user
            state.isLoggedIn = true
            state.accessToken = data.access_token
            console.log(state.currentUser)
            localStorage.setItem('user', JSON.stringify(state.currentUser))
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = "Authorization=" + "Bearer " + data.access_token + ";" + expires + ";path=/"

        },
        LOGOUT(state) {
            state.currentUser = null
            state.isLoggedIn = false
            state.accessToken = ''
            localStorage.removeItem('user')
            sessionStorage.removeItem('token')

        }
    },

}