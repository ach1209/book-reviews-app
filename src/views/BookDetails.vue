<script setup>
import { computed, shallowRef, provide } from 'vue'
import { useRoute } from 'vue-router'
import { getResults } from '../store/getResults.js'
import AppButton from '../components/AppButton/AppButton.vue'
import BookOverview from '../components/BookOverview/BookOverview.vue'
import BookReview from '../components/BookReview/BookReview.vue'

const store = getResults()
const route = useRoute()
const currentTab = shallowRef(BookOverview)
const tabs = [
  { title: 'Overview', comp: BookOverview },
  { title: 'Reviews', comp: BookReview }
]

function changeTab(tab) {
  currentTab.value = tab
}

const details = computed(() => {
  return store.getAllSearchResults.find(detail => detail.volumeInfo.title.toLowerCase().replace(/[,\s]+|[,\s]+/g, '-') === route.params.id)
})

// Book id = the current book selected by the user
const bookId = details.value.id
provide('bookId', bookId)
</script>

<template>
  <div class="flex">
    <div>
      <img :src="details.volumeInfo.imageLinks?.thumbnail" :alt="details.volumeInfo.title" />
    </div>
    <div class="flex-1 ml-4">
      <h1 class="text-neutral-800">{{ details.volumeInfo.title }}</h1>
      <span class="text-sm text-gray-500">Written by: {{ details.volumeInfo.authors[0] }}</span>
      <div class="flex">
        <AppButton 
          v-for="tab in tabs" :key="tab.title"
          :class="{ active: currentTab === tab.comp }"
          @click="changeTab(tab.comp)"
          btnType="tab"
        >{{ tab.title }}</AppButton>
      </div>
      <component v-if="currentTab === BookOverview"
        :is="currentTab"
        :rating="details.volumeInfo.averageRating"
        :ratingCount="details.volumeInfo.ratingsCount"
        :pageCount="details.volumeInfo.pageCount"
        :publisher="details.volumeInfo.publisher"
        :isbnCode="details.volumeInfo.industryIdentifiers"
        :description="details.volumeInfo.description"
      />
      <KeepAlive>
        <component v-if="currentTab === BookReview" :is="currentTab" />
      </KeepAlive>
    </div>
  </div>
</template>