<template>
  <section class="mt-32 px-56">
    <div class="flex w-full h-full">
      <Headline />
      <ScrollCard />
    </div>
  </section>
</template>

<script>
import Headline from "../components/carousel/Headline";
import ScrollCard from "../components/scrollcard/ScrollCard";

export default {
  name: "Home",
  components: {
    Headline,
    ScrollCard
  },
};
</script>
