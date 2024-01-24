<template>
    <form @submit.prevent="submitComment">
      <textarea v-model="newComment" placeholder="Write a comment..."></textarea>
      <button type="submit">Post Comment</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    emits: ['submitComment'],
    setup(props, { emit }) {
      const newComment = ref('');
  
      const submitComment = () => {
        emit('submitComment', newComment.value);
        newComment.value = ''; // reset the textarea after submit
      };
  
      return {
        newComment,
        submitComment,
      };
    },
  };
  </script>
  
  <!-- Add styles for CommentForm here -->
  