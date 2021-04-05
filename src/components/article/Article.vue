<template>
  <div class="w-2/3 h-max">
    <!-- Author -->
    <div class="flex items-center space-x-1">
      <img
        class="rounded-full h-8 w-8 mr-2 flex items-center justify-center shadow-md"
        src="https://randomuser.me/api/portraits/thumb/men/67.jpg"
        alt=""
      />
      <p class="text-lg font-medium">kumparanNews</p>
      <VerifyIcon class="w-5" />
    </div>
    <!-- News Header -->
    <div class="flex items-center space-x-1 mt-3">
      <p class="text-sm font-bold text-gray-700">NEWS</p>
      <span>&bull;</span>
      <p class="text-gray-600 font-light">12 Juni 2021 12:00</p>
    </div>
    <p class="text-4xl font-bold my-4">
      Kabar Corona Dunia: Presiden Belgia COVID-19 hingga Biksu Buddha Divaksin
      2 Kali
    </p>
    <img
      class="w-full h-max"
      src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg"
      alt=""
    />
    <div class="p-2 bg-gray-300 mt-2 mb-4 text-sm text-gray-700">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem
      deserunt vero quo nemo nobis iusto fugit corporis
    </div>
    <!-- Content -->
    <div class="my-4">
      <p>
        Para biksu Buddha menunggu untuk menerima dosis pertama vaksin Sinovac
        untuk memutus mata rantai penyebaran virus corona. Vaksinasi tersebut
        dilakukan di sebuah kuil di Bangkok, Thailand.
      </p>
      <p>
        Thailand menargetkan memberikan vaksin corona sebanyak 10 juta dosis
        sebelum bulan Juni.
      </p>
    </div>
    <!-- Tags -->
    <div class="flex space-x-1">
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:text-black font-medium px-2 py-1"
      >
        SPORT
      </p>
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:text-black font-medium px-2 py-1"
      >
        NEWS
      </p>
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:text-black font-medium px-2 py-1"
      >
        COVID-19
      </p>
    </div>
    <!-- Other Informations -->
    <div class="mt-6">
      <div class="flex space-x-2 items-center">
        <a
          class="text-sm font-bold uppercase cursor-pointer hover:text-blue-600"
          >Informasi lainnya</a
        >
        <span>&bull;</span>
        <a
          class="text-sm font-bold uppercase cursor-pointer hover:text-blue-600"
          >Laporkan tulisan</a
        >
      </div>

      <div class="flex w-full items-center justify-between mt-4">
        <div class="-space-x-4">
          <img
            class="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
            src="https://randomuser.me/api/portraits/thumb/men/30.jpg"
            alt="Profile image"
          />
          <img
            class="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full"
            src="https://randomuser.me/api/portraits/thumb/women/31.jpg"
            alt="Profile image"
          />
          <img
            class="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full"
            src="https://randomuser.me/api/portraits/thumb/men/32.jpg"
            alt="Profile image"
          />
          <img
            class="relative z-0 inline object-cover w-10 h-10 border-2 border-white rounded-full"
            src="https://randomuser.me/api/portraits/thumb/men/33.jpg"
            alt="Profile image"
          />
        </div>
        <button
          tipe="button"
          class="focus:outline-none text-sm font-medium text-gray-700"
        >
          Tim redaksi
          <ChevronDown class="inline-block h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VerifyIcon from "../icons/VerifyIcon";
import ChevronDown from "../icons/ChevronDown";

export default {
  name: "Article",
  components: {
    VerifyIcon,
    ChevronDown,
  },
};
</script>