import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main/Home.vue'
import Error404 from '../views/Errors/404NotFound.vue'
import ProductDetail from '../views/main/ProductDetail.vue'
import shopRoutes from './module/shop.js'
import authRoutes from './module/auth.js'

const baseRoute = []
const routes = baseRoute.concat(shopRoutes, authRoutes)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router