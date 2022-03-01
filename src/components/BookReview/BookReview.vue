<script setup>
import { ref } from 'vue'
import ReviewForm from '../ReviewForm/ReviewForm.vue'

const displayForm = ref(false)

function toggleForm() {
  displayForm.value = !displayForm.value
}
</script>

<template>
  <div class="mt-4">
    <div class="min-h-max py-4 bg-blue-100 rounded-md flex flex-col items-center justify-center">
      <p class="text-center text-base">There are currently no reviews available for this book.</p>
      <p class="text-center text-base leading-9">Be the first to
        <span 
          @click="toggleForm"
          class="text-blue-600 hover:text-blue-700 cursor-pointer"
        >write</span> a review!
      </p>
    </div>
    <div 
      v-if="displayForm"
      class="mt-4"
    >
      <ReviewForm />
    </div>
  </div>
</template>