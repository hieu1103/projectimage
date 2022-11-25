import axios from 'axios'
import { getRequest } from '../../helper/Request'

export default {
    name: "Shop",
    state: {
        categories: [],
        products: []
    },
    getters: {},
    mutations: {
        CATEGORIES(state, categories) {
            state.categories = categories
        },
        PRODUCTS(state, products) {
            state.products = products
        },
    },
    actions: {
        getCategoriesAndProducts({ commit }) {
            getRequest("/api/v1/shop/all-categories")
                .then(res => {
                    let categories = res.data
                    this.commit('CATEGORIES', categories)
                }).catch(err => {
                    console.log(err);
                }),
                getRequest("/api/v1/shop/products/all")
                .then(res => {
                    let products = res.data
                    this.commit('PRODUCTS', products)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
}