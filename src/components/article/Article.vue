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
    <div class="p-2 bg-gray-200 mt-2 mb-4 text-sm text-gray-600">
      Kiri CEO Tokopedia (William), CEO Kumparan (Haryy), CTO WIred (Michael) dan perwakilan PBB, Maguire, Kante Dan Iliana
    </div>
    <!-- Content -->
    <div class="my-4 space-y-4 text-lg">
      <p>
        MANADO - GP Ansor Sulawesi Utara menemukan adanya sekolah, yang tidak
        melaksanakan upacara bendera termasuk tidak memberikan hormat untuk
        bendera merah putih. Selain itu, sekolah tersebut tidak memasang lambang
        Garuda Pancasila serta memajang foto kepala negara.
      </p>
      <p>
        Hal ini dikatakan Ketua GP Ansor Sulawesi Utara, Yusra Alhabsy di depan
        Menteri Agama Yaqut Kholil Qoumas dan juga Gubernur Sulawesi Utara Olly
        Dondokambey. Menurut Alhabsy, hal ini ditemukan belum lama ini.
      </p>
      <p>
        “Kami GP Ansor bukan ingin menakut-nakuti kita semua. Tapi, hal ini
        harus diungkapkan karena kita tidak memberikan toleransi apapun kepada
        hal-hal yang tak menghormati negara kita. Ini penting, karena terjadi di
        dunia pendidikan kita," kata Alhabsy.
      </p>
      <p>
        Menurut Alhabsy, lembaga pendidikan terutama sekolah itu adalah tempat
        para generasi muda menerima ilmu dan tentunya bagaimana mencintai
        negaranya sendiri. Apalagi, kepribadian seseorang juga terbentuk dari
        lingkungan terutama sekolahnya.
      </p>
      <p>
        "Tentunya kita harus perangi bersama paham-paham yang tidak mencintai
        negara kita. Terus terang, GP Ansor sangat gelisah dengan kondisi ini.
        Mungkin jika berkenan, pemerintah bisa bekerjasama dengan GP Ansor untuk
        melakukan penelitian terhadap hal-hal seperti itu," kata Yusra kembali.
      </p>
      <p>
        Sementara, Kepala Dinas Pendidikan dan Kebudayaan Sulawesi Utara, dr
        Grace Punuh, mengaku sudah menerima laporan terkait dengan hal yang
        ditemukan oleh GP Ansor tersebut. Dirinya mengakui, jika akan
        menindaklanjuti persoalan tersebut.
      </p>
      <p>
        “Kami akan tindaklanjuti segera,” ujar Grace kepada manadobacirita,
        Senin (5/4) malam ini.
      </p>
    </div>
    <!-- Tags -->
    <div class="flex space-x-1 mt-10">
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:bg-gray-300 hover:text-black font-medium px-2 py-1"
      >
        SPORT
      </p>
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:bg-gray-300 hover:text-black font-medium px-2 py-1"
      >
        NEWS
      </p>
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:bg-gray-300 hover:text-black font-medium px-2 py-1"
      >
        COVID-19
      </p>
      <p
        class="border cursor-pointer border-gray-600 text-gray-600 hover:text-black hover:bg-gray-300 font-medium px-2 py-1"
      >
        VACCINE
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
      <div class="space-y-4 mt-6 hidden" id="user">
        <div class="flex w-full justify-between items-center">
          <div class="flex items-center space-x-3">
            <img
              class="inline object-cover w-12 h-12 rounded-full shadow"
              src="https://randomuser.me/api/portraits/thumb/men/32.jpg"
              alt="Profile image"
            />
            <div>
              <p class="font-medium leading-tight">
                Ahmad Syahroni <VerifyIcon class="inline-block -mt-1 w-5" />
              </p>
              <p class="text-sm font-light">Write</p>
            </div>
          </div>
          <button
            class="bg-green-400 hover:bg-green-600 text-white px-4 py-1 font-bold text-sm shadow"
          >
            IKUTI
          </button>
        </div>
        <div class="flex w-full justify-between items-center">
          <div class="flex items-center space-x-3">
            <img
              class="inline object-cover w-12 h-12 rounded-full shadow"
              src="https://randomuser.me/api/portraits/thumb/women/36.jpg"
              alt="Profile image"
            />
            <div>
              <p class="font-medium leading-tight">
                Siti Maemun Bin Ursula <VerifyIcon class="inline-block -mt-1 w-5" />
              </p>
              <p class="text-sm font-light">Editor</p>
            </div>
          </div>
          <button
            class="bg-green-400 hover:bg-green-600 text-white px-4 py-1 font-bold text-sm shadow"
          >
            IKUTI
          </button>
        </div>
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