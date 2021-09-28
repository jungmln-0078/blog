import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/post/new',
    name: 'PostWrite',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostWrite.vue'),
    props: true
  },
  {
    path: '/post/:id',
    name: 'PostView',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
