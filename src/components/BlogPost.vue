<template>
    <div class="blog-post">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-post {
    margin-bottom: 2rem;
  }
  
  .blog-post h2 {
    margin-bottom: 0.5rem;
  }
  </style>
  