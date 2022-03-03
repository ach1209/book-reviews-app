<script setup>
import { ref, inject, computed } from 'vue'
import { bookReviewsList } from '../../store/bookReviewsList.js'
import ReviewForm from '../ReviewForm/ReviewForm.vue'

const displayForm = ref(false)
const reviewStore = bookReviewsList()
const currentBookId = inject('bookId')

function toggleForm(status) {
  displayForm.value = status
}

const currentBookReviews = computed(() => {
  return reviewStore.getBookReviews.filter(review => review.bookId === currentBookId)
})
</script>

<template>
  <div class="mt-4">

    <!-- placeholder. convert to separate component when layout is done -->
    <div v-if="currentBookReviews.length > 0">
      <div 
        v-for="item in currentBookReviews" :key="item.reviewId"
        class="border p-3"
      >
        <p v-if="item.isRecommended" class="italic">The reviewer recommends this book.</p>
        <p v-else class="italic">The reviewer does not recommend this book.</p>
        <p>{{ item.userReview }}</p>
        <div class="border-t flex justify-between pt-4">
          <p>{{ item.helpfulCount }} users found this review helpful</p>
          <div class="flex">
            <p>Was this review helpful?</p>
            <span class="text-sm text-neutral-700">Yes</span>
            <span class="text-sm text-neutral-700">No</span>             
          </div>
        </div>
      </div>
    </div>


    <div v-else>
      <div class="min-h-max py-4 bg-blue-100 rounded-md flex flex-col items-center justify-center">
        <p class="text-center text-base">There are currently no reviews available for this book.</p>
        <p class="text-center text-base leading-9">Be the first to
          <span 
            @click="toggleForm(true)"
            class="text-blue-600 hover:text-blue-700 cursor-pointer"
          >write</span> a review!
        </p>
      </div>
      <div 
        v-if="displayForm"
        class="mt-4"
      >
        <ReviewForm @set-form-status="toggleForm" />
      </div>
    </div>
  </div>
</template>