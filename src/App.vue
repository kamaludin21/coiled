<template>
  <Navigator/>
  <router-view></router-view>

</template>

<script>
import Navigator from "./components/navigator/Navigator";

export default {
  name: "App",
  components: {
    Navigator,
  },
};
</script>

<style>
.scrollbar:hover::-webkit-scrollbar-thumb {
  @apply bg-gray-800;
}
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #2033cd; 
} */
</style>
