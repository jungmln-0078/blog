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
      let newPost = new Post(payload.title, payload.content, payload.author, state.postid++);
      state.posts.push(newPost);
      payload.newPost = newPost;
    }
  },
  actions: {
  },
  modules: {
  }
})
