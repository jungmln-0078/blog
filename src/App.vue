<template>
  <div id="app">
    <div class="nav">
      <router-link to="/post">Post</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App"
}
</script>