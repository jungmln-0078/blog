<template>
  <div class="postview route">
      {{ id }}
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
        this.post = this.$store.state.posts.find(p => p.id = this.id);
    }
}
</script>