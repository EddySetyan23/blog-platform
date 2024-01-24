<template>
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="Search posts..." />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const searchQuery = ref('');
  
      return {
        searchQuery,
      };
    },
  };
  </script>
  
  <!-- Add styles for SearchBar here -->
  
  .search-bar input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  