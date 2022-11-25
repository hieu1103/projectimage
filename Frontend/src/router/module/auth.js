import Login from "../../views/users/Login.vue"
import Register from "../../views/users/Register.vue"
import Logout from "../../views/users/Logout.vue"
import User from "../../views/users/User.vue"
import ChangePassword from "../../views/users/ChangePassword.vue"


let routes = [{
        path: "/user/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/user/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/user/logout",
        name: "Logout",
        component: Logout
    },
    {
        path: "/user/dashboard",
        name: "User",
        component: User
    },
    {
        path :"/user/change-password",
        name : "changePassword", 
        component : ChangePassword
    },
]

export default routes