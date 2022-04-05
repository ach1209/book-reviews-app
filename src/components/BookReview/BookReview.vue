<script setup>
import { ref, inject, computed } from 'vue'
import { bookReviewsList } from '../../store/bookReviewsList.js'
import ReviewForm from '../ReviewForm/ReviewForm.vue'
import UserReview from '../UserReview/UserReview.vue'

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
    <div v-if="currentBookReviews.length > 0">
      <UserReview
        v-for="review in currentBookReviews" :key="review.reviewId"
        :isRecommended="review.isRecommended"
        :userReview="review.userReview"
        :helpfulCount="review.helpfulCount"
      ></UserReview>
    </div>
    <div v-else>
      <div class="no-item-block">
        <p class="text-center text-base">There are currently no reviews available for this book.</p>
        <p class="text-center text-base leading-9">Be the first to
          <span 
            @click="toggleForm(true)"
            class="text-blue-600 hover:text-blue-700 cursor-pointer"
          >write</span> a review!
        </p>
      </div>
      <div v-if="displayForm" class="mt-4">
        <ReviewForm @set-form-status="toggleForm" />
      </div>
    </div>
  </div>
</template>