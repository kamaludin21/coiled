<template>
  <div class="menu-list" v-for="menu in menus" :key="menu.id" >
    <div class="h-full w-full py-2 border-green-600" :class="menu.active ? 'border-b-4' : ''">
        {{ menu.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menus: [
        {
          id: 1,
          title: "Home",
          active: true,
        },
        {
          id: 2,
          title: "Trending",
          active: false,
        },
        {
          id: 3,
          title: "Video",
          active: false,
        },
        {
          id: 3,
          title: "Video",
          active: false,
        },
        {
          id: 4,
          title: "kumparan+",
          active: false,
        },
        {
          id: 5,
          title: "Opini & Cerita",
          active: false,
        },
        {
          id: 6,
          title: "Kabar Daerah",
          active: false,
        },
        {
          id: 7,
          title: "Peringkat Penulis",
          active: false,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.menu-list {
  @apply border-r font-medium text-sm w-full text-center hover:bg-green-400 hover:text-white border-collapse;
}
</style>