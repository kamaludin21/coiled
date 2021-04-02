<template>
  <div class="flex flex-col bg-white border-t-4 border-black shadow">
    <Title title="#5 TRENDING" />
    <!-- content wrap -->
    <div
      class="scrollbar overflow-auto overflow-active w-full"
      style="height: 62vh"
    >
      <div :key="trending.id" v-for="trending in trendings">
        <Content :trending="trending" />
      </div>
    </div>
    <!-- end content -->
    <Footer />
  </div>
</template>

<script>
import Content from "./Content";
import Title from "./Title";
import Footer from "./Footer";

export default {
  name: "Trending",
  components: {
    Content,
    Title,
    Footer,
  },
  props: {
    trendings: Array,
  },
};
</script>
