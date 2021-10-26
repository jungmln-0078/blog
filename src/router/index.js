import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
