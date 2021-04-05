<template>
  <div class="m-4">
    <div
      class="bg-gray-100 m-auto w-full h-72"
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
          <router-link to="article" class="text-base font-bold leading-5 uppercase">
            {{ title }}
          </router-link>
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-xs my-1 mr-1">{{
              author
            }}</span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="like" :comment="comment" :hours="hours" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentInfo from "./ContentInfo";
import VerifyIcon from "../icons/VerifyIcon";

export default {
  name: "HeadlineContent",
  components: {
    ContentInfo,
    VerifyIcon,
  },
  props: {
    title: String,
    like: String,
    photoUrl: String,
    author: String,
    comment: String,
    hours: String,
  },
};
</script>