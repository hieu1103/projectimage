<template >
  <section class="product-detail">
    <div class="image-slider">
      <img :src="product.get_product_url" alt="" />
      <!-- <div class="product-images">
                <img :src="product.get_product_url" alt="">
            </div> -->
    </div>
    <div class="details">
      <h2 class="product-brand">{{ product.title }}</h2>
      <p class="product-short-des">{{ product.description }}</p>
      <span class="product-price">${{ product.price }}</span>
      <!-- <span class="product-actual-price">$200</span>
      <span class="product-discount">(25% off)</span> -->
      <p class="product-sub-heading">Select Quantity</p>
      <input type="number" class="input-quantity" v-model="quantity" />
      <button class="btn quantity-btn" @click="quantity++">+</button>
      <button
        class="btn quantity-btn"
        @click="
          () => {
            if (this.quantity > 1) this.quantity--;
          }
        "
      >
        -
      </button>
      <br />
      <button class="btn cart-btn" @click="addToCart">Add to cart</button>
      <button class="btn">Add to whishlist</button>
    </div>
  </section>
  <section class="detail-des">
    <h2 class="heading">Description</h2>
    <p class="des">
      {{product.description}}
    </p>
  </section>
  <PopUp v-if="trigger" />
</template>
<script>
import PopUp from "./PopUp";
export default {
  name: "Detail",
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    product: {
      default: () => ({}),
    },
  },
  computed: {
    trigger() {
      return this.$store.state.PopUp.status;
    },
  },
  components: {
    PopUp,
  },
  methods: {
    addToCart() {
      const item = {
        product: this.product,
        quantity: this.quantity,
      };
      const add =this.$store.dispatch("addToCart", item);
       if(add) {
                 return this.$store.dispatch("setPopUp", {
                    msg: "Added to your cart",
                    route: "#",
                            });
                    } 
            else {
                return this.$store.dispatch("setPopUp", {
                    msg: "Somthing went wrong, please try again !!",
                    route: "#",
                            });
            }  
    },
  },
};
</script>
<style >
</style>