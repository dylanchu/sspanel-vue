import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Logout from '../components/logout/Logout'
import Dashboard from '../components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
