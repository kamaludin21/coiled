<template>
  <div class="menu-list" v-for="menu in menus" :key="menu.id" >
    <div class="menu-title" :class="menu.active ? 'active' : ''">
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
          title: "kumparan+",
          active: false,
        },
        {
          id: 4,
          title: "Opini & Cerita",
          active: false,
        },
        {
          id: 5,
          title: "Kabar Daerah",
          active: false,
        },
        {
          id: 6,
          title: "Peringkat Penulis",
          active: false,
        },
        {
          id: 7,
          title: "News",
          active: false,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.menu-list {
  @apply border-r font-medium text-sm w-full text-center hover:bg-blue-400 hover:text-white border-collapse;
}

.active {
    @apply border-b-4;
}

.menu-title {
    @apply h-full w-full py-2 border-blue-700;
}
</style>