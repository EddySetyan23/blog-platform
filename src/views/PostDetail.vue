<template>
    <div>
      <BlogPost :post="post" />
      <!-- You can add more post details or functionalities here, like editing or deleting a post -->
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import BlogPost from '@/components/BlogPost.vue';
  
  export default {
    components: {
      BlogPost
    },
    setup() {
      const store = useStore();
      const route = useRoute();
      const postId = Number(route.params.id);
      
      const post = computed(() => {
        // Replace with real logic to find a post by ID from the store
        return store.state.posts.find(p => p.id === parseInt(postId));
      });
  
      return { post };
    }
  }
  </script>
  