<template>
  <div
    class="w-1/3 shadow"
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
          <VerifyIcon class="w-4" />
        </div>
        <ContentInfo :like="like" :comment="comment" :hours="hours" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentInfo from '../carousel/ContentInfo'
import VerifyIcon from '../icons/VerifyIcon'


export default {
  name: "ImageCard",
  components: {
      ContentInfo,
      VerifyIcon
  },
  props: {
    title: String,
    author: String,
    photoUrl: String,
    like: String,
    comment: String,
    hours: String,
  },
};
</script>