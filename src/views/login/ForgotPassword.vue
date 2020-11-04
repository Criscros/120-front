<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Restaurar  password</h4>
                                    <p>Por favor ingrese su email . enviaremos las instrucciones para restaurar su password.</p>
                                </div>

                                <vs-input 
                                    v-if="msg"
                                    type="email" 
                                    label-placeholder="Email" 
                                    v-model="email"
                                    class="w-full mb-8" 
                                    v-validate="'required|email'"
                                    />
                                 <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                                <vs-button type="border" to="/login" class="px-4 w-full md:w-auto">Back To Login</vs-button>
                                <vs-button 
                                    v-if="msg"
                                    class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" 
                                    @click="forgotPassword()" 
                                    :disabled="!validateForm" 
                                    >Enviar Password</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      msg : true
    }
  },
  computed: {
     validateForm () {
      // && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true
      return !this.errors.any()  && this.email !== ''
    }
  },
   methods: {
      forgotPassword(){
        
        this.$store.dispatch('auth/forgotPassword', this.email).then((msg)=>{
           
           if(msg.data.success){
            
                this.$vs.notify({
                    time:8000,
                    title:'Email',
                    text:'Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.',
                    color:'success',
                    iconPack: 'feather',
                    icon: 'icon-clock'
                })
                // HIDE  INPUT EMAIL 
                this.msg = false
           }else{
                this.$vs.notify({
                    time:8000,
                    title:'Email',
                    text:'este email no coincide con los registros',
                    color:'danger',
                    iconPack: 'feather',
                    icon: 'icon-clock'
                })
           }

        })

      }
  }
}
</script>
