<template>
  <div class="w-full flex mb-4">
    <div
      class="bg-gray-100 ml-4 w-1/2 h-52"
      :style="{ backgroundImage: 'url(' + photoUrl + ')' }"
      style="
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="flex flex-row items-end h-full w-full">
        <div
          class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200"
        >
          <h3 class="text-base font-bold leading-5 uppercase">
            {{ title }}
          </h3>
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-xs my-1 mr-1">{{
              author
            }}</span>
            <VerifyIcon class="stroke-current stroke-1 text-blue-600 w-4" />
          </div>
          <ContentInfo like="21" comment="241" hours="1 Days ago" />
        </div>
      </div>
    </div>
    <div
      class="bg-gray-100 ml-4 w-1/2 mr-4 h-52"
      :style="{ backgroundImage: 'url(' + photoUrl + ')' }"
      style="
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="flex flex-row items-end h-full w-full">
        <div
          class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200"
        >
          <h3 class="text-base font-bold leading-5 uppercase">
            {{ title }}
          </h3>
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-xs my-1 mr-1">{{
              author
            }}</span>
            <VerifyIcon class="stroke-current stroke-1 text-blue-600 w-4" />
          </div>
          <ContentInfo like="21" comment="241" hours="1 Days ago" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentInfo from "./ContentInfo";
import VerifyIcon from "./../icons/VerifyIcon";

export default {
  name: "SubCarousel",
  components: {
    VerifyIcon,
    ContentInfo,
  },
  props: {
    photoUrl: {
      type: String,
      default:
        "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&h=350",
    },
    title: {
      type: String,
      default: "News headline",
    },
    author: {
      type: String,
      default: "Beny Ackerman",
    },
  },
};
</script>