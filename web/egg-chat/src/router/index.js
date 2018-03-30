import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import iView from 'iview'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
