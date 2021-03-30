<template>
  <div class="flex flex-row justify-between">
    <div class="flex flex-row">
      <div class="w-max inline-flex items-center">
        <LoveIcon class="w-4" />
        <span class="text-xs ml-1 antialiased">{{ like }}</span>
      </div>
      <div class="w-max inline-flex ml-4 items-center">
        <CommentIcon class="w-4" />
        <span class="text-xs ml-1 antialiased">{{ comment }}</span>
      </div>
      <div class="w-max inline-flex ml-4 items-center">
        <ClockIcon class="w-4" />
        <span class="text-xs ml-1 antialiased">{{ hours }}</span>
      </div>
    </div>
    <div class="w-max">
      <DotsVertical class="w-4" />
    </div>
  </div>
</template>

<script>
import LoveIcon from '../icons/LoveIcon'
import CommentIcon from '../icons/CommentIcon'
import ClockIcon from '../icons/ClockIcon'
import DotsVertical from '../icons/DotsVertical'

export default {
    name: 'ContentInfo',
    components: {
        LoveIcon,
        CommentIcon,
        ClockIcon,
        DotsVertical
    }, 
    props: {
        like: String,
        comment: String,
        hours: String
    }
}
</script>