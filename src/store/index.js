import { createStore } from 'vuex';
import Post from './models/post.js'

export default createStore({
  state: {
    posts: [],
    postid: 1
  },
  mutations: {
    newPost(state, payload) {
      let newPost = new Post(payload.title, payload.content, payload.author, state.postid++);
      state.posts.push(newPost);
      payload.newPost = newPost;
    },
    delPost(state, payload) {
      let idx = state.posts.findIndex(post => post.id == payload.id);
      if (idx !== -1) {
        state.posts.splice(idx, 1);
      }
    }
  },
  actions: {
  },
  getters: {
    getPosts: state => {
      return state.posts;
    }
  },
  modules: {
  }
})
