<template>
  <div class="container">
    <img src="../assets/logo.png">
    <row>
      <i-input class="registerinput" v-model="username" placeholder="username" size="large" v-bind:maxlength=25 clearable v-on:on-change="checkUsername" v-on:on-enter="register"></i-input>
    </row>
    <row v-if="!usernameChecked">
      <span class="tips">请输入少于25个字符、数字和"-"</span>
    </row>
    <br>
    <row>
      <i-input class="registerinput" v-model="password" placeholder="password" size="large" v-bind:maxlength=25 clearable type="password" v-on:on-change="checkPassword" v-on:on-enter="register"></i-input>
    </row>
    <row v-if="!passwordChecked">
      <span class="tips">请输入6~25个字符和数字</span>
    </row>
    <br>
    <row>
      <i-input class="registerinput" v-model="validate" placeholder="password again" size="large" v-bind:maxlength=25 clearable v-on:on-enter="register" v-on:on-change="checkValidate" type="password"></i-input>
    </row>
    <row v-if="!validateChecked">
      <span class="tips">两次输入不一致,请重新输入</span>
    </row>
    <br>
    <row>
      <i-button class="loginbutton" @click="login" type="text">have a account ? go to login</i-button>
    </row>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import {
  REGISTER
} from '../store/action-types'
import {
  checkUname,
  checkPwd
} from '../services/check'

import { EGG_LOGIN_TOKEN } from '../utils/constant'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      validate: '',
      usernameChecked: true,
      passwordChecked: true,
      validateChecked: true
    }
  },
  methods: {
    ...mapActions({
      registerAction: REGISTER
    }),
    register: function () {
      const { username, password } = this
      if (this.username && this.password && this.validate && this.usernameChecked && this.passwordChecked && this.validateChecked) {
        this.registerAction({ username, password })
        console.log(`register`)
      } else {
        this.password = ''
        this.validate = ''
        this.passwordChecked = true
        this.validateChecked = true
      }
    },
    checkUsername: function () {
      this.usernameChecked = checkUname(this.username) && this.username
    },
    checkPassword: function () {
      this.passwordChecked = checkPwd(this.password) && this.password
    },
    checkValidate: function () {
      this.validateChecked = this.password && this.password === this.validate
    },
    login: function () {
      this.$router.push('/')
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
.registerinput {
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
.loginbutton {
  border: none;
  outline: none;
}
</style>
