<template>
    <div class="mb-0 border-b-2 h-max py-2 px-4">
      <p class="font-bold text-lg">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'title',
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    }
}
</script>