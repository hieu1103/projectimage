<template lang="">
   <section class="login-form">
        <div class ="box">
           
            <div class="form">
                <h2>Register</h2> 
                <div> 
                    <div class = "inputBx">
                        <input type="email" placeholder="Email" v-model="registerData.email"> 
                    </div>  

                    <div class = "inputBx">
                        <input type="text" placeholder="Username" v-model="registerData.user_name"> 
                    </div>  

                    <div class = "inputBx">
                        <input type="password" placeholder="Password" v-model="registerData.password"> 
                    </div>  

                    <div class ="inputBx">
                        <input type="password" placeholder="Confirm Password" v-model="registerData.password2" > 
                    </div>

                    <div class = "inputBx">
                        <input type="text" placeholder="Number Phone" v-model="registerData.phone_number"> 
                    </div> 
     
                    <div class ="inputBx">
                          <button class="register-btn" @click="register()"  > Register </button>
                    </div>
                </div>
                 
                  <p>If you have an account <a href="#"> Login here </a> </p>
            </div>
        </div>
        <Popup v-if ="trigger"/>
    </section>
</template>
<script>
import Popup from "../../components/PopUp.vue";
import { registerRequest } from "../../helper/Auth.js";
import { validateRegisterForm } from "../../helper/ValidationForm.js";
export default {
  name: "Register",
  data() {
    return {
      registerData: {
        email: "",
        user_name: "",
        password: "",
        password2: "",
        phone_number: "",
      },
    };
  },
  components: {
    Popup,
  },
  computed: {
    trigger() {
      return this.$store.state.PopUp.status;
    },
  },
  methods: {
    register() {
      const checkValidation = validateRegisterForm(this.registerData);

      if (checkValidation.status == false)
        return this.$store.dispatch("setPopUp", {
          msg: checkValidation.msg,
          route: checkValidation.route,
        });

      registerRequest(this.registerData)
        .then((res) => {
          if(res.data.status=='404'){
          return this.$store.dispatch("setPopUp", {
            msg: res.data.msg,
            route: "#",
          });
          }
          return this.$store.dispatch("setPopUp", {
            msg: res.data.msg,
            route: "/user/login",
          });
        })
        .catch((err) => {
          console.log(err.status);
        });
    },
  },
};
</script>
<style lang="">
</style>
