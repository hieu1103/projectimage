import { createStore } from 'vuex'
import { getRequestAuth, postRequestAuth } from "../../helper/Request"

export default {
    name: "Cart",
    state: {
        currentCart: [],
        listItems: [],
        listOrders : [],
    },
    getters: {

    },
    mutations: {
        UPDATE_CART(state, data) {
            state.currentCart = data.Cart
        },
        UPDATE_LIST_ITEM(state, data) {
            state.listItems = data.listItem
        },
        UPDATE_ORDER_LIST(state, data) {
            state.listOrders = data.OrderList
        }
    },
    actions: {
        getCart({ commit }) {
            getRequestAuth("/api/v1/cart/")
                .then(response => {
                    commit('UPDATE_CART', response.data)
                })
                .catch(err => {
                    console.log(err)
                })

            getRequestAuth("/api/v1/cart/items")
                .then(response => {
                    commit('UPDATE_LIST_ITEM', response.data)
                })
                .catch(err => {
                    console.log(err)
                })
                getRequestAuth("/api/v1/cart/order-list")
                .then (response=>{

                    commit('UPDATE_ORDER_LIST', response.data)
                })
                .catch(err=>{
                    console.log(err)
                })
            

        },
        addToCart({ commit, dispatch }, item) {
            console.log(item)
            postRequestAuth("/api/v1/cart/add", item)
                .then(res => {
                    console.log(res.data)
                    dispatch("getCart") 
                    return true
                })
                .catch(err => {
                    console.log(err)
                    return false
                })

        }
    }
}