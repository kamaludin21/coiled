<template>
  <section class="my-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">{{ sectionTitle }}</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">{{ sectionTitle }}</span>
        <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
      </button>
    </div>
    <div class="flex flex-row justify-evenly mt-5 space-x-5">
      <ImageCard
        :photoUrl="photoUrl"
        :title="title"
        :author="author"
        :like="like"
        :comment="comment"
        :hours="hours"
      />
      <div class="w-1/3">
        <ScrollCard
          :title="`Trending on ` + sectionTitle + ``"
          :trendings="trending"
        />
      </div>
      <div class="w-1/3">
        <ScrollCard
          :title="`Latest on ` + sectionTitle + ``"
          :trendings="articles"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ImageCard from "./ImageCard";
import ScrollCard from "../scrollcard/ScrollCard";

export default {
  name: "Section",
  components: {
    ChevronRightIcon,
    ImageCard,
    ScrollCard,
  },
  props: {
    sectionTitle: String,
    title: String,
    author: String,
    like: String,
    comment: String,
    hours: String,
    photoUrl: {
      type: String,
      default:
        "https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?auto=compress",
    },
    trending: Object,
  },
  data() {
    return {
      articles: [
        // 5 Items
        {
              id: 1,
              title: "Duel WGM Irene Kharisma vs GothamChess Berakhir Imbang",
              photoUrl: "https://images.pexels.com/photos/5691847/pexels-photo-5691847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 2,
              title: "Kisah Edwin Valero: Raja KO dari Venezuela yang Hidupnya Berakhir Tragis",
              photoUrl: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 3,
              title: "Madrid vs Liverpool: Tampil Garang, Los Blancos Hantam The Reds",
              photoUrl: "https://images.pexels.com/photos/6507966/pexels-photo-6507966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
        {
          id: 4,
          title:
            "Andi Arief Bicara SK Kemenkumham: Ada Indikasi Kantor DPP Akan Direbut Paksa",
          photoUrl: "https://images.pexels.com/photos/6507966/pexels-photo-6507966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "Maguire Henry",
          like: 87,
          comment: 36,
          hours: "5 Hours ago",
        },
        {
          id: 5,
          title:
            "Gerbang Tol Cileunyi Akan Hilang, Jasa Marga Operasikan Gerbang Sementara",
          photoUrl: "https://images.pexels.com/photos/6507966/pexels-photo-6507966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "Ngolo Kante",
          like: 12,
          comment: 19,
          hours: "1 Day ago",
        },
      ],
    };
  },
};
</script>