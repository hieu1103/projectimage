<template lang="">
   <div class="cart-group">
      <div class="cart-section">
      <div class="product-list">
        <p class="cart-heading">Your cart </p>
        <div class="cart">
          <CartItem v-bind:item="item" v-for="item in listItems" v-bind:key="item.id" />
          <p class="cart-total"> Your Cart Total: ${{cart.totalCart}} </p>
        </div>
      </div>
   
    <div class="order-section"> 
      <p class="order-heading"> Order Here</p>
      <p> If you want order your cart, please fill in here </p>
      <div class="order-input"> 
        <input type="text" placeholder="Name..." v-model="orderData.name">
      </div>
       <div class="order-input"> 
        <input type="text" placeholder="Address..." v-model="orderData.address">
      </div>
       <div class="order-input"> 
        <input type="text" placeholder="Number Phone..." v-model="orderData.numberPhone">
      </div>
        <button class="order-btn" @click="order"> Order </button>
    </div>
   </div>
    </div>
    <PopUp v-if ="trigger"/>
</template>
<script>
import CartItem from "../../components/CartItem";
import PopUp from "../../components/PopUp";
import {validateOrderForm} from "../../helper/ValidationForm.js"
import { postRequestAuth } from "../../helper/Request.js"

export default {
  name: "Cart",
  data() {
    return {
      order_trigger: false,
      orderData: {
        name : '', 
        address: '' ,
        numberPhone : '' ,
        cart : this.$store.state.Cart.currentCart.cartId || ''
      }
    };
  },
  components: {
    CartItem,
    PopUp,
  },
  computed: {
    listItems() {
      return this.$store.state.Cart.listItems;
    },
    cart() {
      return this.$store.state.Cart.currentCart;
    },
    trigger() {
      return this.$store.state.PopUp.status;
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
  methods: {
      order() {
        const validate = validateOrderForm(this.orderData)
        if (validate.status ==false) {
          return this.$store.dispatch("setPopUp", {
              msg: validate.msg,
              route: "#",
            });
        } 
        else {
       postRequestAuth("api/v1/cart/order", this.orderData)
       .then(res =>{
         this.$store.dispatch("getCart")
          this.$store.dispatch("setPopUp", {
              msg: res.data.msg,
              route: "/",
            });
       }) 
       .catch(err=>{
         console.log(err)
       })
      }
      }
    }
};
</script>
<style lang="">
</style>

//  <transition name="fade">
//         <div class="order-form" v-if ="this.order_trigger==true" > 
//           <div class ="box">
//             <div class="form">
//                 <h2>Order your card</h2> 
//                 <div> 
//                     <div class = "inputBx">
//                         <input type="text" placeholder="Your name..." v-model ="this.orderData.name"> 
//                     </div>  

//                       <div class = "inputBx">
//                         <input type="text" placeholder="Address..." v-model ="this.orderData.address"> 
//                     </div>  

//                       <div class = "inputBx">
//                         <input type="number" placeholder="Number Phone..." v-model ="this.orderData.numberPhone"> 
//                     </div>  

//                     <div class ="inputBx">
//                         <button class="register-btn" @click="order"  > Order</button>
//                     </div>
//                 </div>
        
//             </div>
//         </div>
//         </div>
//         </transition>