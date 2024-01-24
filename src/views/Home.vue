<template>
    <div class="home">
      <SearchBar v-model="searchQuery" />
      <CommentList :comments="filteredComments" />
      <!-- List of blog posts -->
      <div v-for="post in filteredPosts" :key="post.id">
        <!-- Post preview component or direct HTML -->
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          <h2>{{ post.title }}</h2>
        </router-link>
        <p>{{ post.excerpt }}</p>
        <!-- Add more post details you'd like to preview -->
      </div>
    </div>
  </template>
  
  <script>
  import SearchBar from '@/components/SearchBar.vue';
  import CommentList from '@/components/CommentList.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    components: {
      SearchBar,
      CommentList,
    },
    setup() {
      const store = useStore();
      const searchQuery = ref('');
  
      const filteredPosts = computed(() => {
        if (searchQuery.value) {
          return store.state.posts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
          );
        }
        return store.state.posts;
      });
  
      return {
        searchQuery,
        filteredPosts,
      };
    },
  };
  </script>
  