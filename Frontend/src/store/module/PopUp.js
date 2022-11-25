import { createStore } from 'vuex'


export default {
    name: "PopUp",
    state: {
        status: false,
        msg: 'Hllo',
        route: '/'
    },
    mutations: {
        SET_POPUP: (state, data) => {
            state.status = !state.status
            state.msg = data.msg
            state.route = data.route
        },
        CLOSE_POPUP: (state) => {
            state.status = false
            state.route = '/home'
        }
    },
    actions: {
        setPopUp({ commit, state }, data) {
            commit("SET_POPUP", data)
        }
    },


}