import Vue from 'vue'
import Vuex from 'vuex'
import Post from './models/post.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    postid: 1
  },
  mutations: {
    newPost(state, payload) {
      state.posts.push(new Post(payload.title, payload.context, payload.author, state.postid++));
    }
  },
  actions: {
  },
  modules: {
  }
})
