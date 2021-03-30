<template>
  <div class="flex flex-col bg-white w-1/3 border-t-4 border-black shadow-lg">
    <Title title="TRENDING" />
    <!-- content wrap -->
    <div
      class="scrollbar overflow-auto overflow-active w-full"
      style="height: 62vh"
    >
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </div>
    <!-- end content -->
    <Footer />
  </div>
</template>

<script>
import Content from './Content'
import Title from './Title'
import Footer from './Footer'

export default {
    name: 'ScrollCard',
    components: {
        Content,
        Title,
        Footer
    }
}
</script>