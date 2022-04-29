import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addto from '../views/addnew.vue'
import upda from '../views/updat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Addto',
    name: 'Addto',
    component: Addto
  },
  ,
  {
    path: '/upda/:name',
    name: 'upda',
    component: upda
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
