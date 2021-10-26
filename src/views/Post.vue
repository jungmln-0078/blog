<template>
  <div class="post route">
      <table>
        <colgroup>
            <col width="10%">
            <col width="50%">
            <col width="15%">
            <col width="25%">
        </colgroup>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Created at</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
            <td><router-link :to="`/post/${post.id}`">{{ post.id }}</router-link></td>
            <td><router-link :to="`/post/${post.id}`">{{ post.title }}</router-link></td>
            <td><router-link :to="`/post/${post.id}`">{{ post.author }}</router-link></td>
            <td><router-link :to="`/post/${post.id}`">{{ post.createdate }}</router-link></td>
        </tr>
      </table>
      <router-link to="/post/new"><button>Write</button></router-link>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: "post",
    setup() {
      const posts = ref([]);
      const store = useStore();
      onMounted(() => { posts.value = store.state.posts; });
      return { posts }
    }
}
</script>