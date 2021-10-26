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
import router from '../router'
import { useStore } from 'vuex';
import { reactive, toRefs } from 'vue';
export default {
    name: "PostWrite",
    components: {
        Editor
    },
    setup() {
        const store = useStore();
        const state = reactive({
            title: "",
            content: "",
            author: ""
        });
        const newPost = () => {
            if (state.title === "") {
                alert("Please Insert the title");
            } else if (state.content === "") {
                alert("Please Insert the content");
            } else {
                let payload = {
                    title: state.title, 
                    content: state.content,
                    author: state.author || "Anonymous"
                }
                store.commit('newPost', payload);
                router.push(`/post/${payload.newPost.id}`);
            }
        }
        const updateContent = (newContent) => {
            state.content = newContent;
        }
        return { ...toRefs(state), newPost, updateContent }
    }
}
</script>

<style>

</style>