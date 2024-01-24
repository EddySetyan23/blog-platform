<template>
  <div class="comment-list">
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    <CommentForm @submitComment="addComment" />
  </div>
</template>

<script>
import Comment from './Comment.vue';
import CommentForm from './CommentForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Comment,
    CommentForm,
  },
  computed: {
    ...mapState(['comments']),
  },
  methods: {
    ...mapActions(['addComment']),
  },
};
</script>

<!-- Add styles for CommentList here -->
.comment-list {
  margin-top: 1rem;
}

.comment {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.comment-form textarea {
  width: 100%;
  margin-bottom: 0.5rem;
}

.comment-form button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
