<template>
  <div class="w-1/2 h-max">
    <p class="text-smborder border-black bg-gray-300 px-4 py-2 rounded">
      Ingatlah untuk menjaga komentar tetap hormat dan mengikuti pedoman
      komunitas kami
    </p>
    <div class="flex justify-between items-center mt-4">
      <p class="text-xl font-bold">12 Komentar</p>
      <div class="flex space-x-2">
        <img
          class="w-8 h-8"
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <img
          class="w-8 h-8"
          src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png"
          alt=""
        />
      </div>
    </div>
    <hr class="my-2" />
    <div class="my-2">
      <div class="flex space-x-2 justify-between items-end">
        <textarea
          rows="1"
          class="w-full bg-gray-100 p-2 shadow outline-none"
          placeholder="Tulis komentar"
        ></textarea>
        <button
          class="bg-gray-800 hover:bg-black px-4 py-2 text-white font-bold shadow-md"
        >
          KIRIM
        </button>
      </div>
    </div>
    <div class="mt-6 space-y-4">
      <div class="flex items-start">
        <img
          class="rounded-full w-8 h-8"
          src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
          alt=""
        />
        <div class="mx-2 w-full">
          <p class="font-bold">Maumane Ikmona</p>
          <p class="text-sm">Great buddy 😋😂</p>
          <div class="flex flex-row justify-between items-center mt-1">
            <div class="flex flex-row items-center space-x-2">
              <span class="text-xs">A Hours ago</span>
              <p>&bull;</p>
              <span class="text-xs">1 Suka</span>
              <p>&bull;</p>
              <span class="text-xs">Report</span>
            </div>
            <div class="w-max">
              <DotsVertical class="w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsVertical from "../icons/DotsVertical";

export default {
  name: "Comment",
  components: {
    DotsVertical,
  },
};
</script>