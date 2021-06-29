import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Shop from '../views/Shop.vue'
import Thankspage from '../views/Thankspage.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/thankspage',
    name: 'thanks',
    component: Thankspage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
