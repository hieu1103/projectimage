import { getRequestAuth} from "./Request"



export function getCart() {
    const cart = []
    getRequestAuth("/api/v1/cart/")
        .then(res => {
            cart = res.data
        })
        .catch(err => {
            console.log(err)
        })
}
