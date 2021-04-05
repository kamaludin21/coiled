<template>
  <section class="my-10 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">
        kumparan<span class="font-black">+</span>
      </p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">kumparan+</span>
        <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
      </button>
    </div>
    <p>Konten eksklusif dari kreator pilihan kumparan</p>
    <!--  -->
    <div class="flex flex-row justify-evenly mt-5 space-x-5">
      <ContentKumparanPlus
        :key="content.id"
        v-for="content in contents"
        :content="content"
      />
    </div>
  </section>
</template>

<script>
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ContentKumparanPlus from "../kumparanplus/ContentKumparanPlus";

export default {
  name: "KumparanPlus",
  components: {
    ChevronRightIcon,
    ContentKumparanPlus,
  },
  data() {
    return {
      contents: [
        {
          id: 1,
          photoUrl:
            "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress",
          title: "Agar Tetap Dekat dengan Anak yang Sudah Remaja",
          latest: true,
          counter: 6,
        },
        {
          id: 2,
          photoUrl:
            "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress",
          title: "Rumitnya Perkara Impor Beras",
          latest: true,
          counter: 2,
        },
        {
          id: 3,
          photoUrl:
            "https://images.pexels.com/photos/6108868/pexels-photo-6108868.jpeg?auto=compress",
          title: "Asklepios",
          latest: false,
          counter: 12,
        },
        {
          id: 4,
          photoUrl:
            "https://images.pexels.com/photos/6266697/pexels-photo-6266697.jpeg?auto=compress",
          title: "Edhy Prabowo dan Duit Korupsi untuk Sespri",
          latest: false,
          counter: 5,
        },
        {
          id: 5,
          photoUrl:
            "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress",
          title: "Danyang",
          latest: false,
          counter: 6,
        },
      ],
    };
  },
};
</script>