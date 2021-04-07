<template>
  <!-- Video -->
  <section class="my-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">Video</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">Video</span>
        <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
      </button>
    </div>
    <div class="flex flex-row justify-start mt-5 space-x-5">
      <ContentVideo />
    </div>
  </section>
</template>

<script>
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ContentVideo from "./ContentVideo";

export default {
  name: "Video",
  components: {
    ChevronRightIcon,
    ContentVideo,
  },
};
</script>