<template>
  <section class="container mt-32">
    <div class="bg-white px-6 py-4 border-t-4 border-black shadow-md">
      <ArticleDetail />
      <hr class="my-5" />
      <div class="mb-4">
        <p class="font-bold text-2xl">Related stories</p>
        <div class="flex w-full justify-start space-x-4 my-5">
          <div class="w-1/4">
            <img
              class="object-cover h-32 w-full"
              src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg"
              alt=""
            />
            <p class="capitalize font-semibold leading-tight">
              Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
            </p>
            <div class="inline-flex items-center my-2">
              <span class="capitalize font-base text-xs mr-1">
                KumparanNews
              </span>
              <VerifyIcon class="w-4" />
            </div>
            <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
          </div>
          <div class="w-1/4">
            <img
              class="object-cover h-32 w-full"
              src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg"
              alt=""
            />
            <p class="capitalize font-semibold leading-tight">
              Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
            </p>
            <div class="inline-flex items-center my-2">
              <span class="capitalize font-base text-xs mr-1">
                KumparanNews
              </span>
              <VerifyIcon class="w-4" />
            </div>
            <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
          </div>

          <div class="w-1/4">
            <img
              class="object-cover h-32 w-full"
              src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg"
              alt=""
            />
            <p class="capitalize font-semibold leading-tight">
              Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
            </p>
            <div class="inline-flex items-center my-2">
              <span class="capitalize font-base text-xs mr-1">
                KumparanNews
              </span>
              <VerifyIcon class="w-4" />
            </div>
            <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
          </div>
          <div class="w-1/4">
            <img
              class="object-cover h-32 w-full"
              src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg"
              alt=""
            />
            <p class="capitalize font-semibold leading-tight">
              Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
            </p>
            <div class="inline-flex items-center my-2">
              <span class="capitalize font-base text-xs mr-1">
                KumparanNews
              </span>
              <VerifyIcon class="w-4" />
            </div>
            <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
          </div>
        </div>
      </div>
    </div>
    <div class="my-10 shadow-md bg-white border-t-4 border-black p-6">
      <div class="flex justify-between items-center">
        <p class="font-bold text-2xl">Trending on News</p>
        <button tipe="button" class="focus:outline-none text-lg">
          More on <span class="font-medium">News</span>
          <ChevronRightIcon class="inline-block -mt-0.5 h-5 w-5" />
        </button>
      </div>
      <div class="flex w-full justify-start space-x-4 my-5">
        <div class="w-1/4">
          <img
            class="object-cover h-32 w-full"
            src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg"
            alt=""
          />
          <p class="capitalize font-semibold leading-tight">
            Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
          </p>
          <div class="inline-flex items-center my-2">
            <span class="capitalize font-base text-xs mr-1">
              KumparanNews
            </span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
        </div>
        <div class="w-1/4">
          <img
            class="object-cover h-32 w-full"
            src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg"
            alt=""
          />
          <p class="capitalize font-semibold leading-tight">
            Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
          </p>
          <div class="inline-flex items-center my-2">
            <span class="capitalize font-base text-xs mr-1">
              KumparanNews
            </span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
        </div>

        <div class="w-1/4">
          <img
            class="object-cover h-32 w-full"
            src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg"
            alt=""
          />
          <p class="capitalize font-semibold leading-tight">
            Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
          </p>
          <div class="inline-flex items-center my-2">
            <span class="capitalize font-base text-xs mr-1">
              KumparanNews
            </span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
        </div>
        <div class="w-1/4">
          <img
            class="object-cover h-32 w-full"
            src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg"
            alt=""
          />
          <p class="capitalize font-semibold leading-tight">
            Agar Tetap Dekat Dengan Anak Yang Sudah Remaja
          </p>
          <div class="inline-flex items-center my-2">
            <span class="capitalize font-base text-xs mr-1">
              KumparanNews
            </span>
            <VerifyIcon class="w-4" />
          </div>
          <ContentInfo :like="1" :comment="2" :hours="`1 Days ago`" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleDetail from "../components/article/ArticleDetail";
import ContentInfo from "../components/carousel/ContentInfo";
import VerifyIcon from "../components/icons/VerifyIcon";

export default {
  name: "Article",
  components: {
    VerifyIcon,
    ContentInfo,
    ArticleDetail,
  },
};
</script>