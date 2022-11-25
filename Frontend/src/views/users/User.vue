<template lang="">
    <div>
        <div class="user-section"> 
            <div class="user-info"> 
                <h1>About you </h1>
                <p> Name :  Chinh Nguyen</p>
                <p> Email : chinh@gmail.com </p>
                <p> Number Phone : 0326550233 </p>
                <router-link to="/user/change-password">
                    <button class="user-btn"> Change Password</button>
                </router-link>
                <button class="user-btn"> Change Profile</button>
            </div>     
            <div class="user-order"> 
                 <h1>Your Ordered</h1>
                <OrderItem v-bind:order=order v-for="order in orderList" v-bind:key="order.id"/>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { getRequestAuth } from "../../helper/Request";
import OrderItem from "../../components/OrderItem.vue";
export default {
  name: "User",
  components: {
    OrderItem,
  },
  computed: {
    orderList() {
      return this.$store.state.Cart.listOrders;
    },
  },
};
</script>
<style lang="">
</style>