<template lang="">
   <section class="login-form">
        <div class ="box">
           
            <div class="form">
                <h2>Login</h2> 
                <div> 
                    <div class = "inputBx">
                        <input type="email" placeholder="Email" v-model="loginData.email"> 
                    </div>  
                   
                    <div class = "inputBx">
                        <input type="password" placeholder="Password"  @keyup.enter="login" v-model="loginData.password"> 
                    </div>  

                <div class ="inputBx">
                    <button class="register-btn" @click="login"  >Login</button>
                </div>
                </div>
                  <p>Forgot password ? <a href="#"> Click here </a> </p>
            </div>
        </div>
         <Popup v-if ="trigger"/>
    </section>
</template>
<script>
import { validateLoginForm } from "../../helper/ValidationForm";
import Popup from "../../components/PopUp.vue";
import { loginRequest } from "../../helper/Auth";
export default {
  name: "Login",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    Popup,
  },
  mounted(){
    if(this.$store.state.Auth.isLogged){
      this.$route.push("/")
    }
  },
  computed: {
    trigger() {
      return this.$store.state.PopUp.status;
    },
  },
  methods: {
    login() {
      const checkValidation = validateLoginForm(this.loginData);
      if (checkValidation.status == false)
        return this.$store.dispatch("setPopUp", {
          msg: checkValidation.msg,
          route: checkValidation.route,
        });

      loginRequest(this.loginData)
        .then((res) => {
          if (res.data.status == "400") {
            return this.$store.dispatch("setPopUp", {
              msg: res.data.msg,
              route: "#",
            });
          }
          else {
            this.$store.commit("LOGIN_SUCCESS", res.data)
            this.$store.dispatch("getCart")
            return this.$store.dispatch("setPopUp", {
              msg: res.data.msg,
              route: "/",
            });
          }

        })
        .catch((err) => {
          console.log(err);
          return this.$store.dispatch("setPopUp", {
              msg: "Enter a valid email address.",
              route: "#",
            });
        });
    },
  },
};
</script>
<style lang="">
</style>