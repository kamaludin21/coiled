<template>
  <section class="mt-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">{{ sectionTitle }}</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">{{ sectionTitle }}</span>
        <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
      </button>
    </div>
    <div class="flex flex-row justify-evenly mt-5 space-x-5 mb-20">
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
          title:
            "PKS Terima Hehamahua Dkk, Siap Usulkan Hak Angket Usut Tewasnya 6 Laskar FPI",
          photoUrl:
            "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress",
          author: "kumparanNews",
          like: 3,
          comment: 21,
          hours: "2 Hours ago",
        },
        {
          id: 2,
          title:
            "Cerita Ibu Bomber Gereja Katedral Makassar: Peluk, Pamit dan Cium Tangan",
          photoUrl:
            "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress",
          author: "Ahmad Subagyo",
          like: 167,
          comment: 3,
          hours: "3 Hours ago",
        },
        {
          id: 3,
          title:
            "Moeldoko: Saya Rela Pertaruhkan Leher untuk Tegakkan Pancasila dan Merah Putih",
          photoUrl:
            "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg?auto=compress",
          author: "Jhanet Rose",
          like: 23,
          comment: 7,
          hours: "4 Hours ago",
        },
        {
          id: 4,
          title:
            "Andi Arief Bicara SK Kemenkumham: Ada Indikasi Kantor DPP Akan Direbut Paksa",
          photoUrl:
            "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress",
          author: "Maguire Henry",
          like: 87,
          comment: 36,
          hours: "5 Hours ago",
        },
        {
          id: 5,
          title:
            "Gerbang Tol Cileunyi Akan Hilang, Jasa Marga Operasikan Gerbang Sementara",
          photoUrl:
            "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress",
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