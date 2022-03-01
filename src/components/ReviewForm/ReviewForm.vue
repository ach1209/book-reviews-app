<script setup>
import { ref, inject } from 'vue'
import AppButton from '../AppButton/AppButton.vue'

const isRecommended = ref('')
const userReview = ref('')
const reviewsList = []
const bookId = inject('bookId')

function formSubmitTest() {
  reviewsList.push(
    {
      bookId: bookId,
      reviewId: Math.random(), // remove in case it's not needed. maybe useful for reviews.vue
      recommended: isRecommended.value,
      reviewText: userReview.value
    }
  )
  resetForm()
  console.log(reviewsList)
}

function resetForm() {
  isRecommended.value = ''
  userReview.value = ''
}

</script>

<template>
  <form @submit.prevent="formSubmitTest">
    <div class="mb-4">
      <p class="text-sm">Would you recommend this book?</p>
      <input type="radio" id="yes" value="Yes" v-model="isRecommended">
      <label for="yes" class="text-sm mx-2">Yes</label>
      <input type="radio" id="no" value="No" v-model="isRecommended">
      <label for="no" class="text-sm mx-2">No</label>      
    </div>
    <textarea 
      name="review-section" id="review-section" cols="30" rows="10"
      class="w-full p-2 border text-sm focus:outline-none"
      v-model="userReview"
    ></textarea>
    <div class="mt-4 flex justify-end">
      <AppButton btnType="primary">Submit</AppButton>      
    </div>
  </form>
</template>