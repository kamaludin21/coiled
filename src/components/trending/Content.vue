<template>
  <div class="card-wrapper hover:bg-gray-100">
    <div class="card-content-wrapper">
      <p class="card-title">
        {{ trending.title }}
      </p>
      <div class="author-wrapper">
        <span class="author">{{ trending.author }}</span>
        <VerifyIcon class="w-4" />
      </div>
      <ContentInfo :like="trending.like" :comment="trending.comment" :hours="trending.hours" />
    </div>
    <div class="w-1/3">
      <img
        :src="trending.photoUrl"
        class="object-cover object-center"
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
    trending: Object
  },
};
</script>

<style lang="postcss">
.card-wrapper {
  @apply flex flex-row justify-between items-start w-full border-b px-4 py-5;
}

.card-content-wrapper {
  @apply w-2/3 pr-2;
}

.card-title {
  @apply text-base leading-none font-semibold;
}

.author-wrapper {
  @apply inline-flex items-center;
}

.author {
  @apply capitalize text-xs my-2 mr-1;
}
</style>