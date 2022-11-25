<template>
  <nav class="navbar">
    <div class="nav">
      <router-link to="/">
        <img src="../assets/img/wecam.png" class="brand-logo" alt="" />
      </router-link>
      <div class="nav-items">
        <div class="search">
          <input type="text" class="search-box" placeholder="Search ..." />
          <button class="search-btn">Search</button>
          
          <template v-if="!isLogged">
            <router-link to="/user/login" class="nav-link">
            <FontAwesomeIcon
                :icon="['fas', 'user-alt']"
                size="2x"
              />Login</router-link>
            <router-link to="/user/register" class="nav-link">
              <FontAwesomeIcon
                :icon="['fas', 'registered']"
                size="2x"/>Register</router-link>
          </template>
          <template v-else>
            <router-link to="/user/dashboard" class="nav-link" v-if="isLogged">
              <FontAwesomeIcon
                :icon="['fas', 'user']"
                size="2x"
              />User</router-link
            >
            <router-link to="/user/logout" class="nav-link" v-if="isLogged">
              <FontAwesomeIcon
                :icon="['fas', 'sign-out-alt']"
                size="2x"
              />Logout</router-link
            >
            <router-link to="/cart" class="nav-link">
            <div class="cart-container">
              <FontAwesomeIcon :icon="['fas', 'cart-plus']" size="2x" />
              <span class="cart-quantity">{{quantity}}</span>
            </div>
            Cart
          </router-link>
          </template>
        </div>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item">
        <router-link to="/" class="link">Home </router-link>
      </li>
      <li
        class="link-item"
        v-for="category in categories"
        v-bind:key="category"
      >
        <router-link
          v-bind:to="'/products/' + category.slug + '/'"
          class="link"
          >{{ category.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "../assets/js/navbar.js";
export default {
  name: "Navbar",
  mounted() {
    this.$store.dispatch("getCategoriesAndProducts");
    this.$store.dispatch("getCart")
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    categories() {
      return this.$store.state.Shop.categories;
    },
    isLogged() {
      return this.$store.state.Auth.isLoggedIn;
    },
    quantity(){
      try {
         return this.$store.state.Cart.currentCart.count
      }
      catch {
        return 0 
      }
    }
  },
};
</script>

<style >
</style>