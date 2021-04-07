<template>
  <div class="w-full flex mb-4 space-x-4 px-4">
    <div
      v-for="subcarousel in subcarousels"
      :key="subcarousel.id"
      class="bg-gray-100 w-1/2 h-60"
      :style="{ backgroundImage: 'url(' + subcarousel.photoUrl + ')' }"
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
            {{ subcarousel.title }}
          </h3>
          <div class="inline-flex items-center">
            <span class="capitalize font-base text-xs my-1 mr-1">
              {{ subcarousel.author }}</span
            >
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo
            :like="subcarousel.like"
            :comment="subcarousel.comment"
            :hours="subcarousel.hours"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentInfo from "./ContentInfo";
import VerifyIcon from "./../icons/VerifyIcon";

export default {
  name: "SubCarousel",
  components: {
    VerifyIcon,
    ContentInfo,
  },
  data() {
    return {
      subcarousels: [
        {
          id: 1,
          photoUrl:
            "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=660&w=476",
          title: "Resep Telur Dadar Kekinian, Renyah dan Tebal Bikin Puas Makan",
          author: "KumparanFOOD",
          like: 12,
          comment: 76,
          hours: "8 Minutes ago",
        },
        {
          id: 2,
          photoUrl:
            "https://images.pexels.com/photos/3754296/pexels-photo-3754296.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=660&w=476",
          title: "Hoaxbuster: Klaim Kopi Bisa Sebabkan Stunting pada Anak",
          author: "Munarman",
          like: 40,
          comment: 39,
          hours: "2 Hours ago",
        },
      ],
    };
  },
};
</script>