<template>
  <div class="hello">
    <i-input class="logininput" v-model="username" placeholder="username" size="large" ></i-input>
    <i-input class="logininput" v-model="password" placeholder="password" size="large" ></i-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logininput {
  width: 300px;
  margin: 0 auto;
}
</style>
