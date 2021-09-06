import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../components/Registration.vue'
import Login from '../views/Login.vue'
import Shop from '../views/Shop.vue'
import Thankspage from '../components/Thankspage.vue'
import Detail from '../components/Detail.vue'
import Thanksreserve from '../components/Thanksreserve.vue'
import Mypage from '../components/Mypage.vue'
import store from '../store/index'




Vue.use(VueRouter)

const routes = [

  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/thankspage',
    name: 'thanks',
    component: Thankspage
  },
  {
    path: '/thanksreserve',
    name: 'thanksreserve',
    component: Thanksreserve
  },

  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props:true
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/login',
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
