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
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
            <td><router-link :to="`/post/${post.id}`">{{ post.id }}</router-link></td>
            <td>{{ post.title }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.createdate }}</td>
        </tr>
      </table>
      <button @click="newPost">Write</button>
  </div>
</template>

<script>
export default {
    name: "post",
    data() {
      return {
        posts: []
      }
    },
    methods: {
        newPost() {
            this.$store.commit('newPost', {title: '', context: '', author: ''});
        }
    },
    beforeMount() {
        this.posts = this.$store.state.posts;
    }
}
</script>