<template >
            <router-link to="#" class="collection">
                <img :src="category.get_category_url" alt="">
                <p class="collection-title"> {{category.name }}</p>
            </router-link>
</template>
<script>
export default {
    name : "Collection",
    props : {
        category :{
            default : ()=>  ({})
        }
    }
}
</script>
<style lang="">
    
</style>