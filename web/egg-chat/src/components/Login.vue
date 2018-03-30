<template>
  <div class="container">
    <img src="../assets/logo.png">
    <row>
      <i-input class="logininput" v-model="username" placeholder="username" size="large" v-bind:maxlength=25 clearable v-bind:autofocus=true></i-input>
    </row>
    <br>
    <row>
      <i-input class="logininput" v-model="password" placeholder="password" size="large" v-bind:maxlength=25 clearable on-enter:="login" type="password"></i-input>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log('on-enter')
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
</style>
