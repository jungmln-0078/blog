<template>
  <div class="postwrite route">
      <p>
          <strong>Title : </strong><input type="text" size="30" v-model="title" placeholder="Insert title here">&nbsp;
          <strong>Author : </strong><input type="text" size="20" v-model="author" placeholder="Insert author here">
      </p>
      <editor @updateContent="updateContent"/>
      <button @click="newPost">Submit</button>&nbsp;<router-link to="/post"><button>Cancel</button></router-link>
  </div>
</template>

<script>
import Editor from "@/components/Editor";
export default {
    name: "PostWrite",
    components: {
        Editor
    },
    data() {
        return {
            title: "",
            content: "",
            author: ""
        }
    },
    methods: {
        newPost() {
            if (this.title === "") {
                alert("Please Insert the title");
            } else if (this.content === "") {
                alert("Please Insert the content");
            } else {
                let payload = {
                    title: this.title, 
                    content: this.content,
                    author: this.author || "Anonymous"
                }
                this.$store.commit('newPost', payload);
                this.$router.push(`/post/${payload.newPost.id}`);
            }
        },
        updateContent(newContent) {
            this.content = newContent;
            this.$forceUpdate();
        }
    }
}
</script>

<style>

</style>