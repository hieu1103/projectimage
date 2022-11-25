<template lang="">
    <div class="user-order-section"> 
      <div class="order-info"> 
                     <div class="info-group-1"> 
                        <p> CartId :{{ order.cartId}} </p>
                        <p> Price : $ {{order.totalCart}}</p> 
                        <p> Shipped:  {{order.order[0].shipped}}</p> 
                     </div>
                      <div class="info-group-2"> 
                        <p>Fullname :{{ order.order[0].name}} </p>
                        <p>Address :  {{order.order[0].address}}</p> 
                        <p>Number Phone:  {{order.order[0].numberPhone}}</p> 
                     </div>
                     <button v-if="this.showDetail" class="detail-btn" @click="this.showDetail= !this.showDetail">Hide</button>        
                     <button v-else class="detail-btn" @click="this.showDetail= !this.showDetail"> Detail</button>        
     </div>
      <div class="order-items" v-if="this.showDetail">
        <div class="item-detail" v-bind:item=item v-for ="item in order.items" v-bind:key="item.id" >
            <img  :src=item.product.get_product_url alt=""/>
            <div class="item-info">
              <p class="item-title"> {{item.product.title }}</p>
              <p class="item-price"> Price : ${{item.product.price }}</p>
            </div>
             <div class="item-info-2">
              <p> Quantity : {{item.quantity}} </p>
              <p> TotalPrice : ${{item.totalPrice}}</p>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import { postRequestAuth } from "../helper/Request.js";
export default {
  name: "OrderItem",
  data() {
    return {
      showDetail: false,
    };
  },
  props: {
    order: {
      default: () => ({}),
    },
  },
  methods: {
    getItem() {
      const cart = this.order.cart.cartId;
      postRequestAuth("/api/v1/cart/get-items", {
        cart: cart,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="">
</style>