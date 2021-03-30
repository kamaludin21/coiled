<template>
  <div class="card-wrapper">
    <div class="card-content-wrapper">
      <p class="card-title">
        {{ title }}
      </p>
      <div class="author-wrapper">
        <span class="author">{{ author }}</span>
        <VerifyIcon class="w-4" />
      </div>
      <ContentInfo />
    </div>
    <div class="w-1/3">
      <img
        src="https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg"
        class="object-cover object-center"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import VerifyIcon from "../icons/VerifyIcon";
import ContentInfo from "../carousel/ContentInfo";

export default {
  name: "Content",
  components: {
    VerifyIcon,
    ContentInfo,
  },
  props: {
    title: {
      type: String,
      default:
        "Polda Metro Sita KTA hingga Seragam FPI dari Penangkapan Teroris",
    },
    author: {
      type: String,
      default: "Author article",
    },
  },
};
</script>

<style lang="postcss">
.card-wrapper {
  @apply flex flex-row justify-between items-start w-full border-b px-2 py-5;
}

.card-content-wrapper {
  @apply w-2/3 pr-2;
}

.card-title {
  @apply text-base leading-none font-semibold uppercase;
}

.author-wrapper {
  @apply inline-flex items-center;
}

.author {
  @apply capitalize text-xs my-2 mr-1;
}
</style>