<template>
  <div class="w-1/4 bg-white p-4 h-max shadow">
    <img
      class="w-full h-44 object-cover"
      src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
      alt=""
    />
    <p class="card-title pt-2">Title</p>
    <div class="author-wrapper">
      <span class="author">Author</span>
      <VerifyIcon class="w-4" />
    </div>
    <ContentInfo :like="1" :comment="4" :hours="`12 Hours ago`" />
  </div>
</template>

<script>
import VerifyIcon from "../icons/VerifyIcon";
import ContentInfo from "../carousel/ContentInfo";

export default {
  name: "ContentVideo",
  components: {
    VerifyIcon,
    ContentInfo,
  },
};
</script>