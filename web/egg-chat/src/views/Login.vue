<template>
  <div class="container">
    <img src="../assets/logo.png">
    <row>
      <i-input class="logininput" v-model="username" placeholder="username" size="large" v-bind:maxlength=25 clearable v-bind:autofocus=true></i-input>
    </row>
    <br>
    <row>
      <i-input class="logininput" v-model="password" placeholder="password" size="large" v-bind:maxlength=25 clearable v-on:on-enter="login" type="password"></i-input>
    </row>
    <br>
    <row>
      <i-button class="resigterbutton" @click="register" type="text">regist a account !</i-button>
    </row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      
    ]),
    login: function () {
      console.log(`username: ${this.username}, password: ${this.password}`)
    },
    register: function () {
      this.$router.push('/register')
      console.log(`register`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logininput {
  width: 300px;
}
.container {
  width: 300px;
  margin: 0 auto;
}
.resigterbutton {
  border: none;
  outline: none;
}
</style>
