<template lang="">
    <div>
        <section class="login-form">
        <div class ="box">
           
            <div class="form">
                <h2>Change Your Password</h2> 
                <div> 
                    <div class = "inputBx">
                        <input type="password" placeholder="Old Password" v-model="changePasswordForm.password"> 
                    </div>  
                   
                    <div class = "inputBx">
                        <input type="password" placeholder=" New Password" v-model="changePasswordForm.new_password"> 
                    </div>  
                    <div class = "inputBx">
                        <input type="password" placeholder="Password Confirm" v-model="changePasswordForm.new_password_confirm"> 
                    </div>  

                <div class ="inputBx">
                    <button class="register-btn" @click="changePassword">Change</button>
                </div>
                </div>
            </div>
        </div>
         <Popup v-if ="trigger"/>
    </section>
    </div>
</template>
<script>
import Popup from "../../components/PopUp.vue";
import { changePasswordFormValidate } from "../../helper/ValidationForm";
import { changePasswordRequest } from "../../helper/Auth";

export default {
  name: "ChangePassword",
  data() {
    return {
      changePasswordForm: {
        password: "",
        new_password: "",
        new_password_confirm: "",
      },
    };
  },
  computed: {
    trigger() {
      return this.$store.state.PopUp.status;
    },
  },
  components: {
    Popup,
  },
  methods: {
    changePassword() {
      const checkForm = changePasswordFormValidate(this.changePasswordForm);
      if (checkForm.status == false)
        return this.$store.dispatch("setPopUp", {
          msg: checkForm.msg,
          route: checkForm.route,
        });

      changePasswordRequest(this.changePasswordForm)
        .then((res) => {
          return this.$store.dispatch("setPopUp", {
            msg: res.data.msg+ " Back to homepage !!",
            route:"/",
          });
        })
        .catch((err) => {
          return this.$store.dispatch("setPopUp", {
            msg: "Invalid password, please try again !",
            route:"#",
          });
        });
    },
  },
};
</script>
<style lang="">
</style>