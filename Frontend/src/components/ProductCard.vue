<template>
    <div class="product-card">
        <router-link :to="'/product/'+product.slug" class="detail-link">
            <div class="product-image">
            <span class="discount-tag">50% Off</span>
            <img :src="product.get_product_url" class="product-thumb" alt="">
            <button class="card-btn">Add to whislist</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">{{product.title}}</h2>
            <p class="product-short-des">{{product.description}}</p>
            <span class="price">$ {{product.price}}</span>
            <!-- <span class="actual-price">$40</span> -->
        </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name : "Productcard",
    props:{
        product :{
            default: ()=>({})
        }
    }
   
}
</script>
<style>
</style>