<template>
  <div class="comment">
    <p><strong>{{ comment.author }}:</strong></p>
    <blockquote>{{ comment.content }}</blockquote>
  </div>
</template>


<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
      validator(comment) {
        return comment.hasOwnProperty('author') && comment.hasOwnProperty('content');
      }
    },
  },
};

</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-left: 4px solid #ccc;
  background-color: #f9f9f9;
}

.comment p {
  margin: 0.5rem 0;
}

.comment strong {
  font-weight: bold;
}

.comment blockquote {
  margin: 0;
  padding-left: 1rem;
  border-left: 2px solid #eee;
  font-style: italic;
}
</style>
