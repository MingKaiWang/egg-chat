import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Chat from '../views/Chat'
import iView from 'iview'
import { EGG_LOGIN_TOKEN } from '../utils/constant'

Vue.use(Router)
Vue.use(iView)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(EGG_LOGIN_TOKEN)
  if (!token) {
    next('/')
  }
  next()
})

export default router
