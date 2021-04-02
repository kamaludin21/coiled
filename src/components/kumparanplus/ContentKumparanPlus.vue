<template>
  <div class="w-1/5">
    <img
      class="object-cover h-64 w-full"
      :src=content.photoUrl
      alt=""
    />
    <p class="text-base font-semibold text-red-600">{{ content.latest ? 'Terbaru' : '' }}</p>
    <p class="capitalize text-lg font-bold leading-tight py-1">
      {{ content.title }}
    </p>
    <p class="text-sm text-gray-500">{{ content.counter }} Konten</p>
  </div>
</template>

<script>
export default {
  name: "ContentKumparanPlus",
  props: {
    content: Object
  },
};
</script>