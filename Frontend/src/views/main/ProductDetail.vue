<template lang="">
    <Detail v-bind:product = "product"/>
</template>
<script>
import Detail from "@/components/Detail.vue"
import {getRequest} from "../../helper/Request.js"
export default {
    name :"productDetail",
    data (){
        return {
            product : {}
        }
    },
    components:{
        Detail
    },
    mounted() {
        // this.productImages()
        this.getProduct()
    },
    methods :{
        // productImages (){
        //     const productImages =document.querySelectorAll('.product-images img')
        //     const productImageSlide = document.querySelector('.image-slider')
            
        //     let activeImageSlide = 0
        //     productImages.forEach((item,i)=>{
        //         item.addEventListener('click', ()=>{
        //             productImages[activeImageSlide].classList.remove('active')
        //             item.classList.add('active');
        //             productImageSlide.style.backgroundImage =`url('${item.src}')`;
        //             activeImageSlide=i;
        //         })
        //     })
        // },
        getProduct(){
            const product_slug =  this.$route.params.product_slug
            getRequest(`/api/v1/shop/product/${product_slug}`)
            .then(res=>{
                this.product= res.data
            })
            .catch(err=>{
                console.log(err)
            })
            
        }
    }
}
</script>
<style lang="">
    
</style>