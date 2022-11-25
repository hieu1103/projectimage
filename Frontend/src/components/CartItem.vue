<template>

    <div class="sm-product">
        <img :src="item.product.get_product_url"  class="sm-product-img" alt="">
        <div class="sm-text">
            <p class="sm-product-name">{{item.product.title}} </p>
            <p class="sm-des"> {{item.product.description}} </p>
        </div>
        <div class="item-counter"> 
            <button class="counter-btn" @click = "item.quantity++">+</button>
            <p class="item-count">{{item.quantity}} </p>
            <button class="counter-btn" @click="()=>{if (this.item.quantity >1) this.item.quantity--}">-</button>
        </div>
        <p class="sm-price"> ${{item.totalPrice}}</p>
        <div class="control-group">
            <button class="control-btn" @click="update"> Update</button>
            <button class="control-btn" @click="delete_item"> Delete</button>
        </div>
    </div>
     <PopUp v-if ="trigger"/>
</template>
<script>
import {postRequestAuth} from "../helper/Request"
import PopUp from "./PopUp";
export default {
    name :"CartItem",
    data(){
        return {
            current :this.item.quantity
        }
    },
    components : {
        PopUp,
    },
    props : {
        item :{
            default:()=> ({})
        }
    },
    computed : { 
        trigger() {
            return this.$store.state.PopUp.status;
        },
    },
    methods : {
        update(){
            if(this.item.quantity != this.current){
                 const item ={
                product : this.item.product,
                quantity : this.item.quantity
            }
            const add = this.$store.dispatch("addToCart", item)
            if(add) {
                 return this.$store.dispatch("setPopUp", {
                    msg: "Update Success",
                    route: "#",
                            });
                    } 
            }
            else {
                return this.$store.dispatch("setPopUp", {
                    msg: "Somthing went wrong, please try again !!",
                    route: "#",
                            });
            }  
        },
        delete_item(){
            console.log(this.item.product)
            postRequestAuth("/api/v1/cart/remove", this.item)
            .then(res=>{
                this.$store.dispatch("getCart")
                return this.$store.dispatch("setPopUp", {
                    msg: "Item has been deleted !!",
                    route: "#",
                            });

            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style>
    
</style>