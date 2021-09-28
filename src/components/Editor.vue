<template>
  <div class="editor-wrapper">
    <vue-editor v-model="editorContent"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: "Editor",
  components: {
    VueEditor
  },
  data() {
      return {
         content: ""
      }
  },
  computed: {
    editorContent: {
      get() { return this.content },
      set(updatedContent) { 
          this.content = updatedContent;
          this.$emit('updateContent', updatedContent);
      }
    },
  },
};
</script>