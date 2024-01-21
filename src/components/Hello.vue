<template>
    <div class="home">
      <div v-for="post in posts" :key="post.id" class="post-preview">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          <h2>{{ post.title }}</h2>
        </router-link>
        <div v-html="post.excerpt"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['posts']),
    },
  };
  </script>
  
  <style scoped>
  .post-preview {
    margin-bottom: 2rem;
  }
  
  .post-preview h2 {
    margin-bottom: 0.5rem;
  }
  </style>
  