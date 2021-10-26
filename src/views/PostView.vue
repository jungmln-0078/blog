<template>
  <div class="postview route">
      <h1>{{post.title}}</h1>
      <p>Author: {{post.author}}  Created at: {{post.createdate}}</p>
      <button @click="delPost">Delete</button>
      <p class="content" v-html="post.content"></p>
  </div>
</template>

<script>
import router from '../router'
import { useStore } from 'vuex';
import { onBeforeMount, reactive, toRefs } from 'vue';
export default {
    props: {
        id: String
    },
    setup(props) {
        const store = useStore();
        const state = reactive({post: {}});
        const delPost = () => {
            store.commit('delPost', { id: state.post.id })
            router.push({name: "Post"})
        }
        onBeforeMount(() => {
             state.post = store.state.posts.find(p => p.id == props.id);
        });
        return { ...toRefs(state), delPost }
    }
}
</script>