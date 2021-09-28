<template>
  <div class="postview route">
      <h1>{{post.title}}</h1>
      <p>Author: {{post.author}}  Created at: {{post.createdate}}</p>
      <p class="content" v-html="post.content"></p>
  </div>
</template>

<script>
export default {
    props: {
        id: String
    },
    data() {
        return {
            post: {}
        }
    },
    beforeMount() {
        this.post = this.$store.state.posts.find(p => p.id == this.id);
    }
}
</script>