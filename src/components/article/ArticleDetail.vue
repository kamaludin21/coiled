<template>
  <div class="flex flex-row space-x-4">
    <Article />
    <Comment />
  </div>
</template>

<script>
import Article from "./Article";
import Comment from "./Comment";

export default {
  name: "ArticleDetail",
  components: {
    Article,
    Comment,
  },
};
</script>