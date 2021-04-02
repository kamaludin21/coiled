<template>
  <button class="flex flex-row items-center py-4 px-4 border-t w-max">
    <div class="bg-gray-600 hover:bg-gray-900 text-white py-2 px-3 mr-2">
      <ArrowRightIcon class="w-4" />
    </div>
    More on<span class="font-semibold ml-1">trending</span>
  </button>
</template>

<script>
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default {
  name: "Footer",
  components: {
    ArrowRightIcon,
  },
};
</script>