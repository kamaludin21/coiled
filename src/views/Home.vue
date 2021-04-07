<template>
  <!-- Headline & Trending -->
  <section class="container">
    <div class="flex w-full">
      <!-- Slide here -->
      <Headline />
      <!-- Trending -->
      <div class="w-1/3">
        <Trending :trendings="trendings" />
      </div>
    </div>
  </section>
  <!-- kumparan+ -->
  <KumparanPlus />

  <!-- news+ -->
  <Section
    sectionTitle="News"
    :photoUrl="sections[0].photoUrl"
    :title="sections[0].title"
    :author="sections[0].author"
    :like="sections[0].like"
    :comment="sections[0].comment"
    :hours="sections[0].hours"
    :trending="sections[0].trending"
  />

  <!-- Video -->
  <Video />

  <!-- Bola & Sports -->
  <Section
    sectionTitle="Bola &amp; Sports"
    :photoUrl="sections[1].photoUrl"
    :title="sections[1].title"
    :author="sections[1].author"
    :like="sections[1].like"
    :comment="sections[1].comment"
    :hours="sections[1].hours"
    :trending="sections[1].trending"
  />

  <TwoCard />

</template>

<script>
import Headline from "../components/carousel/Headline";
import Trending from "../components/trending/Trending";
import KumparanPlus from "../components/kumparanplus/KumparanPlus";
import Section from "../components/sections/Section";
import Video from "../components/video/Video";
import TwoCard from "../components/twocard/TwoCard";

export default {
  name: "Home",
  components: {
    Headline,
    Trending,
    KumparanPlus,
    Section,
    Video,
    TwoCard,
  },
  data() {
    return {
      trendings: [
        // 5 Items
        {
          id: 1,
          title:
            "PKS Terima Hehamahua Dkk, Siap Usulkan Hak Angket Usut Tewasnya 6 Laskar FPI",
          photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "kumparanNews",
          like: 3,
          comment: 21,
          hours: "2 Hours ago",
        },
        {
          id: 2,
          title:
            "Cerita Ibu Bomber Gereja Katedral Makassar: Peluk, Pamit dan Cium Tangan",
          photoUrl: "https://images.pexels.com/photos/3873786/pexels-photo-3873786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "Ahmad Subagyo",
          like: 167,
          comment: 3,
          hours: "3 Hours ago",
        },
        {
          id: 3,
          title:
            "Moeldoko: Saya Rela Pertaruhkan Leher untuk Tegakkan Pancasila dan Merah Putih",
          photoUrl: "https://images.pexels.com/photos/1544947/pexels-photo-1544947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",

          author: "Jhanet Rose",
          like: 23,
          comment: 7,
          hours: "4 Hours ago",
        },
        {
          id: 4,
          title:
            "Andi Arief Bicara SK Kemenkumham: Ada Indikasi Kantor DPP Akan Direbut Paksa",
          photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "Maguire Henry",
          like: 87,
          comment: 36,
          hours: "5 Hours ago",
        },
        {
          id: 5,
          title:
            "Gerbang Tol Cileunyi Akan Hilang, Jasa Marga Operasikan Gerbang Sementara",
          photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
          author: "Ngolo Kante",
          like: 12,
          comment: 19,
          hours: "1 Day ago",
        },
      ],
      sections: [
        {
          sectionTitle: "News",
          title:
            "96 Sekolah Uji Coba Tatap Muka, Pemprov DKI Tetap Pertimbangkan Tren Corona",
          photoUrl: "https://images.pexels.com/photos/3837409/pexels-photo-3837409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=648&w=506",
          author: "Budi Sadikin",
          like: 2,
          comment: 32,
          hours: "A hours ago",
          trending: [
            {
              id: 1,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 2,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 3,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 4,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 5,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl: "https://images.pexels.com/photos/3947511/pexels-photo-3947511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
          ],
        },
        {
          sectionTitle: "Bola & Sport",
          title:
            "Persela vs Madura United: Head to Head, Prakiraan Line Up & Jadwal Tayang",
          photoUrl: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=648&w=506",
          author: "Budi Sadikin",
          like: 2,
          comment: 32,
          hours: "A hours ago",
          //
          trending: [
            {
              id: 1,
              title: "Duel WGM Irene Kharisma vs GothamChess Berakhir Imbang",
              photoUrl: "https://images.pexels.com/photos/2695392/pexels-photo-2695392.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 2,
              title: "Kisah Edwin Valero: Raja KO dari Venezuela yang Hidupnya Berakhir Tragis",
              photoUrl: "https://images.pexels.com/photos/1575381/pexels-photo-1575381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
            {
              id: 3,
              title: "Madrid vs Liverpool: Tampil Garang, Los Blancos Hantam The Reds",
              photoUrl: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=210&w=212",
              author: "kumparanSports",
              like: 3,
              comment: 21,
              hours: "2 Hours ago",
            },
          ],
        },
      ],
    };
  },
};
</script>


<style lang="postcss">
.container {
  @apply mt-32 px-56;
}

.link {
  @apply underline font-semibold hover:text-green-600;
}
</style>