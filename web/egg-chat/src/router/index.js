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
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})

router.beforeEach((to, from, next) => {
  const routers = ['login', 'register']
  if (~routers.indexOf(to.name)) {
    next()
  } else {
    const token = localStorage.getItem(EGG_LOGIN_TOKEN)
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
