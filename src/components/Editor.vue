<template>
  <div class="editor-wrapper">
    <vue-editor v-model="editorContent"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from 'vue3-editor';
import { ref, computed } from 'vue';

export default {
  name: "Editor",
  components: {
    VueEditor
  },
  setup(_, context) {
    const content = ref("");
    const editorContent = computed({
      get() { return content.value },
      set(updatedContent) { 
          content.value = updatedContent;
          context.emit('updateContent', updatedContent);
      }
    });
    return { content, editorContent }
  }
};
</script>