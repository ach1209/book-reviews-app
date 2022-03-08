<script setup>
import ThumbsUp from '../ThumbsUp/ThumbsUp.vue'
import ThumbsDown from '../ThumbsDown/ThumbsDown.vue'

const props = defineProps({
  isRecommended: { type: Boolean, required: true },
  userReview: { type: String, required: true },
  helpfulCount: { type: Number, required: true, default: 0 }
})
</script>

<template>
  <div class="border p-3">
    <h3 v-if="props.isRecommended" class="font-semibold text-neutral-600 italic">The reviewer recommends this book.</h3>
    <p v-else class="font-semibold text-neutral-600 italic">The reviewer does not recommend this book.</p>
    <div class="mt-4 mb-6">
      <p>{{ props.userReview }}</p>
    </div>
    <div class="border-t flex justify-between pt-4">
      <p>{{ props.helpfulCount }} users found this review helpful</p>
      <div class="flex">
        <p>Was this review helpful?</p>
        <ThumbsUp size="sm" />
        <ThumbsDown size="sm" />
      </div>
    </div>
  </div>
</template>