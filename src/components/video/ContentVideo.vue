<template>
    <div class="w-1/4 bg-white p-4 h-max shadow" v-for="video in vidoes" :key="video.id">
      <img class="w-full h-44 object-cover" :src=video.photoUrl alt="" />
      <p class="card-title pt-2">{{ video.title }}</p>
      <div class="author-wrapper">
        <span class="author">{{ video.author }}</span>
        <VerifyIcon class="w-4" />
      </div>
      <ContentInfo
        :like="video.like"
        :comment="video.comment"
        :hours="video.hours"
      />
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
  data() {
    return {
      vidoes: [
        {
          id: 1,
          title:
            "Jokowi Teken PP 56: Bawakan Lagu Orang di Kafe hingga TV Bayar Royalti",
          photoUrl: "https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336",
          author: "Muhidin",
          like: 12,
          comment: 23,
          hours: "1 Hours ago",
        },
        {
          id: 2,
          photoUrl: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336",
          title: "Resep Telur Dadar Kekinian, Renyah dan Tebal Bikin Puas Makan",
          author: "KumparanFOOD",
          like: 12,
          comment: 76,
          hours: "8 Minutes ago",
        },
        {
          id: 3,
          title:
            "Uji Coba Vaksin AstraZeneca pada Anak-anak di Inggris Dihentikan Sementara",
          photoUrl: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336",
          author: "KumparanNEWS",
          like: 12,
          comment: 23,
          hours: "1 Hours ago",
        },
        {
          id: 4,
          photoUrl: "https://images.pexels.com/photos/1310532/pexels-photo-1310532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336",
          title: "10 HP Android Tercepat Versi AnTuTu Maret 2021, Siapa Juaranya?",
          author: "KumparanFOOD",
          like: 12,
          comment: 76,
          hours: "8 Minutes ago",
        },
      ],
    };
  },
};
</script>