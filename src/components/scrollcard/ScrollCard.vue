<template>
  <div class="flex flex-col bg-white border-t-4 border-black shadow">
    <Title :title="title" />
    <!-- content wrap -->
    <div
      class="scrollbar overflow-auto overflow-active w-full h-96"
    >
      <div :key="trending.id" v-for="trending in trendings">
        <Content :trending="trending" />
      </div>
    </div>
    <!-- end content -->
  </div>
</template>

<script>
import Content from "./Content";
import Title from "./Title";

export default {
  name: "ScrollCard",
  components: {
    Content,
    Title,
  },
  props: {
    title: String,
    trendings: Array,
  },
};
</script>
