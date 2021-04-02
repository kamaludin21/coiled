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
  
  <section class="mt-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">Video</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">Video</span>
        <svg
          class="inline-block -mt-0.5 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row justify-evenly mt-5 space-x-5 mb-20">
      <div class="w-1/4 bg-white p-4 h-max shadow">
        <img
          class="w-full h-44 object-cover"
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          alt=""
        />
        <p class="card-title pt-2">Title</p>
        <div class="author-wrapper">
          <span class="author">Author</span>
          <VerifyIcon class="w-4" />
        </div>
        <ContentInfo :like="1" :comment="4" :hours="`12 Hours ago`" />
      </div>
      <div class="w-1/4 bg-white p-4 h-max shadow">
        <img
          class="w-full h-44 object-cover"
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          alt=""
        />
        <p class="card-title pt-2">Title</p>
        <div class="author-wrapper">
          <span class="author">Author</span>
          <VerifyIcon class="w-4" />
        </div>
        <ContentInfo :like="1" :comment="4" :hours="`12 Hours ago`" />
      </div>
      <div class="w-1/4 bg-white p-4 h-max shadow">
        <img
          class="w-full h-44 object-cover"
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          alt=""
        />
        <p class="card-title pt-2">Title</p>
        <div class="author-wrapper">
          <span class="author">Author</span>
          <VerifyIcon class="w-4" />
        </div>
        <ContentInfo :like="1" :comment="4" :hours="`12 Hours ago`" />
      </div>
      <div class="w-1/4 bg-white p-4 h-max shadow">
        <img
          class="w-full h-44 object-cover"
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          alt=""
        />
        <p class="card-title pt-2">Title</p>
        <div class="author-wrapper">
          <span class="author">Author</span>
          <VerifyIcon class="w-4" />
        </div>
        <ContentInfo :like="1" :comment="4" :hours="`12 Hours ago`" />
      </div>
    </div>
  </section>

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

  <!-- Opini & Cerita -->
  <section class="mt-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">Opini &amp; Cerita</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">Opini &amp; Cerita</span>
        <svg
          class="inline-block -mt-0.5 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row justify-evenly mt-5 space-x-5 mb-20">
      <div
        class="flex flex-row justify-between items-start px-4 py-4 bg-white shadow w-1/2"
      >
        <div class="w-3/4">
          <p class="text-xs font-semibold text-red-600">Terpopuler</p>
          <p class="text-lg leading-none">Keberanian melawan teroris</p>
          <div class="author-wrapper">
            <span class="author">Abdul Wahid</span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="0" :comment="0" :hours="0" />
        </div>
        <img
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          class="object-cover h-20"
        />
      </div>
      <div
        class="flex flex-row justify-between items-start px-4 py-4 bg-white shadow w-1/2"
      >
        <div class="w-3/4">
          <p class="text-xs font-semibold text-red-600">Terpopuler</p>
          <p class="text-lg leading-none">Keberanian melawan teroris</p>
          <div class="author-wrapper">
            <span class="author">Abdul Wahid</span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="0" :comment="0" :hours="0" />
        </div>
        <img
          src="https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress"
          class="object-cover h-20"
        />
      </div>
    </div>
  </section>

  
  <footer class="w-full mt-20 py-10 bg-gray-200">
    <div class="flex justify-center w-full">
      <img src="../assets/img/coiled.png" class="w-80" alt="" />
    </div>
    <p class="text-center">A clone ui from hybrid 
      <a href="https://kumparan.com/" class="link">kumparan</a> 
      and
      <a href="https://www.wired.com/" class="link">wired</a>
    </p>

    <div class="text-center items-center">
      <a href="https://github.com/kamaludin21" class="link">Github</a>
      |
      <a href="https://twitter.com/KamalZyel" class="link">Twitter</a>
    </div>
  </footer>
</template>

<script>
import Headline from "../components/carousel/Headline";
import Trending from "../components/trending/Trending";
import KumparanPlus from "../components/kumparanplus/KumparanPlus";
import Section from "../components/sections/Section";

export default {
  name: "Home",
  components: {
    Headline,
    Trending,
    KumparanPlus,
    Section,
  },
  data() {
    return {
      trendings: [
        // 5 Items
        {
          id: 1,
          title:
            "PKS Terima Hehamahua Dkk, Siap Usulkan Hak Angket Usut Tewasnya 6 Laskar FPI",
          photoUrl: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
          author: "kumparanNews",
          like: 3,
          comment: 21,
          hours: "2 Hours ago",
        },
        {
          id: 2,
          title:
            "Cerita Ibu Bomber Gereja Katedral Makassar: Peluk, Pamit dan Cium Tangan",
          photoUrl:"https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
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
            "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
            
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
            "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
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
            "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
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
          photoUrl:
            "https://images.pexels.com/photos/975545/pexels-photo-975545.jpeg?auto=compress",
          author: "Budi Sadikin",
          like: 2,
          comment: 32,
          hours: "A hours ago",
          trending: [
            {
              id: 1,
              title:
                "Muhammadiyah: Teror di Mabes Polri Tamparan Keras Bagi Polisi",
              photoUrl:
                "https://images.pexels.com/photos/1110492/pexels-photo-1110492.jpeg?auto=compress",
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
          photoUrl:
            "https://images.pexels.com/photos/6507965/pexels-photo-6507965.jpeg?auto=compress",
          author: "Budi Sadikin",
          like: 2,
          comment: 32,
          hours: "A hours ago",
          //
          trending: [
            {
              id: 1,
              title: "Duel WGM Irene Kharisma vs GothamChess Berakhir Imbang",
              photoUrl:
                "https://images.pexels.com/photos/6693061/pexels-photo-6693061.jpeg?auto=compress",
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