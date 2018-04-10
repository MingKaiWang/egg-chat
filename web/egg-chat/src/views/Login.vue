<template>
  <div class="container">
    <img src="../assets/logo.png">
    <row>
      <i-input class="logininput" v-model="username" placeholder="username" size="large" v-bind:maxlength=25 v-on:on-change="checkUsername" clearable v-bind:autofocus=true></i-input>
    </row>
    <row v-if="!usernameChecked">
      <span class="tips">请输入少于25个字符、数字和"-"</span>
    </row>
    <br>
    <row>
      <i-input class="logininput" v-model="password" placeholder="password" size="large" v-bind:maxlength=25 clearable v-on:on-enter="login" v-on:on-change="checkPassword" type="password"></i-input>
    </row>
    <row v-if="!passwordChecked">
      <span class="tips">请输入6~25个字符和数字</span>
    </row>
    <br>
    <row>
      <i-button class="resigterbutton" @click="toRegister" type="text">regist a account !</i-button>
    </row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { checkUname, checkPwd } from '../services/check'
import { LOGIN } from '../store/action-types'
import { EGG_LOGIN_TOKEN } from '../utils/constant'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      usernameChecked: true,
      passwordChecked: true
    }
  },
  methods: {
    ...mapActions({
      loginAction: LOGIN
    }),
    login: function () {
      const { usernameChecked, passwordChecked, username, password } = this
      if (usernameChecked && passwordChecked) {
        this.loginAction({ username, password })
      }
    },
    toRegister: function () {
      this.$router.push('/register')
    },
    checkUsername: function () {
      this.usernameChecked = checkUname(this.username) && this.username
    },
    checkPassword: function () {
      this.passwordChecked = checkPwd(this.password) && this.password
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  watch: {
    currentUser: function (val, oldVal) {
      if (val.username && val.token) {
        localStorage.setItem(EGG_LOGIN_TOKEN, val.token)
        this.$router.push('/chat')
      }
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
.tips {
  color: #ff9900;
}
</style>
