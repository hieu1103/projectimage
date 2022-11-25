import { createStore } from 'vuex'
import Shop from "./module/shop"
import PopUp from "./module/PopUp"
import Auth from "./module/Auth"
import Cart from "./module/Cart"

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Shop: Shop,
        PopUp: PopUp,
        Auth: Auth,
        Cart: Cart,
    }
})