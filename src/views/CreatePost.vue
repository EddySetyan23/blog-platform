<template>
    <div class="create-post">
      <h1>Create New Post</h1>
      <form @submit.prevent="submitPost">
        <div>
          <label for="post-title">Title</label>
          <input id="post-title" v-model="newPost.title" type="text" required>
        </div>
        <div>
          <label for="post-content">Content</label>
          <textarea id="post-content" v-model="newPost.content" rows="10" required></textarea>
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const newPost = ref({ title: '', content: '' });
  
      const submitPost = () => {
        if (newPost.value.title && newPost.value.content) {
          // Dispatch an action to add the post to the store
          store.dispatch('addPost', { ...newPost.value, id: Date.now() });
          // Reset the form
          newPost.value = { title: '', content: '' };
        }
      };
  
      return {
        newPost,
        submitPost
      };
    }
  };
  </script>
  
  <style scoped>
  
.create-post {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.create-post h1 {
  margin-bottom: 1rem;
  color: #333;
}

.create-post form {
  display: flex;
  flex-direction: column;
}

.create-post label {
  margin-bottom: 0.5rem;
}

.create-post input[type="text"],
.create-post textarea {
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-post button {
  padding: 10px 15px;
  background: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-post button:hover {
  background: #4cae4c;
}
</style>

  