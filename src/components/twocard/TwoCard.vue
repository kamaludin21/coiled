<template>
  <!-- Opini & Cerita -->
  <section class="mt-8 px-56">
    <div class="flex justify-between items-center">
      <p class="font-bold text-2xl">Opini &amp; Cerita</p>
      <button tipe="button" class="focus:outline-none text-lg">
        More on <span class="font-medium">Opini &amp; Cerita</span>
        <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
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
          <ContentInfo :like="2" :comment="5" :hours="`1 Hours ago`" />
        </div>
        <img
          src="https://images.pexels.com/photos/3926744/pexels-photo-3926744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336"
          class="object-cover h-20"
        />
      </div>
      <div
        class="flex flex-row justify-between items-start px-4 py-4 bg-white shadow w-1/2"
      >
        <div class="w-3/4">
          <p class="text-xs font-semibold text-red-600">Terpopuler</p>
          <p class="text-lg leading-none">
            Apa Hubungan Puasa Ramadhan dengan Latsar CPNS dan TQM?
          </p>
          <div class="author-wrapper">
            <span class="author">Abdul Wahid</span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="1" :comment="2" :hours="`3 Minutes ago`" />
        </div>
        <img
          src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=264&w=336"
          class="object-cover h-20"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ChevronRightIcon from "../icons/ChevronRightIcon";
import VerifyIcon from "../icons/VerifyIcon";
import ContentInfo from "../carousel/ContentInfo";

export default {
  name: "TwoCard",
  components: {
    ChevronRightIcon,
    VerifyIcon,
    ContentInfo,
  },
};
</script>