<template >
    <div class="logout-container">
        <h3> You has log out <router-link to="/"> Click here </router-link> to back homepage !!</h3>
    </div>
</template>
<script>
export default {
    name :"Logout",
    mounted(){
        this.$store.commit("LOGOUT")
    }
}
</script>
<style lang="">
    
</style>