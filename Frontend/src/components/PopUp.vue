<template lang="">
   <div class="popup">
          <div class="popup-inner">
          	<h3 class="msg">{{ msg }}</h3>
            
              <button class="close-popup-btn" @click="close()">
                  Continue
              </button>
          </div>
      </div>    
</template>
<script>
export default {
    name : "PopUp",
      data (){
        return {
            msg :this.$store.state.PopUp.msg
        }
    },
    methods : {
        close(){
            const route = this.$store.state.PopUp.route
            this.$store.commit("CLOSE_POPUP")
            this.$router.push(route)
        }
    }
}
</script>
<style lang="">
    
</style>