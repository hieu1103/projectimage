import Home from '../../views/main/Home.vue'
import Category from '../../views/main/Category.vue'
import Error404 from '../../views/Errors/404NotFound.vue'
import ProductDetail from '../../views/main/ProductDetail.vue'
import Cart from '../../views/main/Cart.vue'
let routes = [{
        path: '/',
        name: 'Home',
        component: Home

    },
    {
        path: '/detail',
        name: 'ProductDetail',
        component: ProductDetail

    },

    {
        path: '/product/:product_slug',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/:pathMatch(.*)*',
        name: "Error",
        component: Error404
    },
    {
        path: '/products/:category/',
        name: 'category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
]
export default routes