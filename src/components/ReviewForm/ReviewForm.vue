<script setup>
import { ref, inject } from 'vue'
import { bookReviewsList } from '../../store/bookReviewsList.js'
import AppButton from '../AppButton/AppButton.vue'

const isRecommended = ref('')
const userReview = ref('')
const reviewStore = bookReviewsList()
const bookId = inject('bookId')
const showReviewForm = false
const emit = defineEmits(['set-form-status'])

function submitReview() {
  reviewStore.addUserReview(bookId, isRecommended.value, userReview.value)
  resetForm()
}
function resetForm() {
  isRecommended.value = ''
  userReview.value = ''
}
function hideReviewForm() {
  emit('set-form-status', showReviewForm)
}

</script>

<template>
  <form @submit.prevent="submitReview">
    <div class="mb-4">
      <p class="text-sm">Would you recommend this book?</p>
      <input type="radio" id="yes" :value="true" name="recommend" required v-model="isRecommended">
      <label for="yes" class="text-sm mx-2">Yes</label>
      <input type="radio" id="no" :value="false" name="recommend" v-model="isRecommended">
      <label for="no" class="text-sm mx-2">No</label>      
    </div>
    <textarea 
      name="review-section" id="review-section" cols="30" rows="10" required
      class="w-full p-2 border text-sm focus:outline-none"
      v-model="userReview"
    ></textarea>
    <div class="mt-4 flex items-center justify-end">
      <AppButton btnType="primary">Submit</AppButton>
      <span 
        @click="hideReviewForm"
        role="button"
        class="ml-4 text-violet-600 hover:text-violet-700 cursor-pointer"
      >Cancel</span>
    </div>
  </form>
</template>