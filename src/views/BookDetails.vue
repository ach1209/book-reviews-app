<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getResults } from '../store/getResults.js'
import AppButton from '../components/AppButton/AppButton.vue'
import BookOverview from '../components/BookOverview/BookOverview.vue'

const store = getResults()
const route = useRoute()

const details = computed(() => {
  return store.getAllSearchResults.find(detail => detail.volumeInfo.title.toLowerCase().replace(/[,\s]+|[,\s]+/g, '-') === route.params.id)
})
</script>

<template>
  <div class="flex items-center">
    <div>
      <img :src="details.volumeInfo.imageLinks?.thumbnail" :alt="details.volumeInfo.title" />
    </div>
    <div class="flex-1 ml-4">
      <h1>{{ details.volumeInfo.title }}</h1>
      <span class="text-sm text-gray-500">Written by: {{ details.volumeInfo.authors[0] }}</span>
      <div class="flex">
        <AppButton btnType="tab">Overview</AppButton>
        <AppButton btnType="tab">Reviews</AppButton>        
      </div>
      <BookOverview
        :rating="details.volumeInfo.averageRating"
        :ratingCount="details.volumeInfo.ratingsCount"
        :pageCount="details.volumeInfo.pageCount"
        :publisher="details.volumeInfo.publisher"
        :isbnCode="details.volumeInfo.industryIdentifiers"
        :description="details.volumeInfo.description"
      ></BookOverview>
    </div>
  </div>
</template>