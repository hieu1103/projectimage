<template>
  <section class="product">
    <h2 class="product-category">Newest</h2>
    <button class="pre-btn">
      <img src="../../assets/img/arrow.png" alt="" />
    </button>
    <button class="next-btn">
      <img src="../../assets/img/arrow.png" alt="" />
    </button>
    <div class="product-container">
      <ProductCard v-bind:product=product v-for="product in products" v-bind:key="product.id"/>

    </div>
  </section>
  <!-- collection -->
     <h2 class="product-category">Category</h2>
  <section
    class="collection-container">
    <Collection v-bind:category ="category" v-for="category in categories" v-bind:key="category.id"/>

  </section>
</template>
<script>
import ProductCard from "../../components/ProductCard.vue";
import Collection from "../../components/Collection.vue";

import "../../assets/js/home.js";
export default {
  name: "Home",
  components: {
    ProductCard,
    Collection,
  },
  mounted() {
    this.homeContainer();
  },
  computed: {
    categories() {
      return this.$store.state.Shop.categories;
    },
    products(){
      return this.$store.state.Shop.products;
    }
  },
  methods: {
    homeContainer() {
      const productContainers = [
        ...document.querySelectorAll(".product-container"),
      ];
      const nextBtn = [...document.querySelectorAll(".next-btn")];
      const preBtn = [...document.querySelectorAll(".pre-btn")];
      productContainers.forEach((item, i) => {
        let containerDimenstions = item.getBoundingClientRect();
        let containerWidth = containerDimenstions.width / 4;

        nextBtn[i].addEventListener("click", () => {
          item.scrollLeft += containerWidth;
        });

        preBtn[i].addEventListener("click", () => {
          item.scrollLeft -= containerWidth;
        });
      });
    },
  },
};
</script>
<style lang="">
</style>