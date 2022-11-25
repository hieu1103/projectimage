<template >
  <div class="product-containers">
          <ProductCard v-bind:product=product v-for="product in listProducts" v-bind:key="product.id"/>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard";
import { computed } from "@vue/reactivity";
export default {
  name: "Category",
  data() {
    return {
        products :[]
    };
  },
  components: {
    ProductCard,
  },

  watch: {
    $route(to, from) {
      if (to.name === "category") {
        this.getProducts();
      }
    },
  },
  computed: {
      listProducts(){
          const list = this.getProducts();
          return list
      }
  },
  methods: {
    getProducts() {
      const slug = this.$route.params.category;
      this.products = this.$store.state.Shop.products;

      const result = this.products.filter((product) => {
        return product.title.toLowerCase().includes(slug.toLowerCase());
      });
 
      return result;
    },
  },
};
</script>
<style lang="">
</style>