<template>
  <!-- Headline -->
  <div class="headline-wrapper">
    <!-- Headline slide -->
    <Carousel
      :title="title"
      :author="author"
      :photoUrl="photoUrl"
      :like="like"
      :comment="comment"
      :hours="hours"
    />
    <!-- sub slide -->
    <!-- Binding data here -->
    <SubCarousel />
  </div>
</template>

<script>
import Carousel from "./Carousel";
import SubCarousel from "./SubCarousel";

export default {
  name: "Headline",
  components: {
    Carousel,
    SubCarousel,
  },
  data() {
    return {
      id: 77387,
      title:
        "BIN: PELAKU BOM BUNUH DIRI DI KATEDRAL MAKASSAR MEMANG DALAM PENGEJARAN PETUGAS",
      author: "Agnez Bazooka",
      photoUrl:
        "https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350",
      like: 12,
      comment: 45,
      hours: "2 Hours ago",
    };
  },
};
</script>

<style lang="postcss">
.headline-wrapper {
    @apply bg-white border-t-4 border-black mr-6 w-2/3 shadow
}
</style>