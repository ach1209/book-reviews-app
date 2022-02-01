<script setup>
import { ref } from 'vue'
import ResultsCard from '../components/ResultsCard/ResultsCard.vue'
import AppButton from '../components/AppButton/AppButton.vue'
import SearchBar from '../components/SearchBar/SearchBar.vue'

const searchBooks = ref('')
const searchResults = ref([])

// preliminary for now. fix later
async function getSearchResults() {
  if (searchBooks.value) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchBooks.value}`)
    const results = await response.json()
    searchResults.value = results.items
    searchBooks.value = ''
    //console.log(searchResults.value)
  } else {
    return null
  }
}
</script>

<template>
  <SearchBar v-model="searchBooks" @set-search-value="getSearchResults"></SearchBar>
  <div class="my-8">
    <p v-if="searchResults.length > 0" class="font-inter font-semibold text-indigo-600 text-xl">
      {{ searchResults.length }} results were found
    </p>
  </div>
  <ResultsCard
    v-for="result in searchResults" :key="result.id"
    :title="result.volumeInfo.title"
    :thumbnail="result.volumeInfo.imageLinks.smallThumbnail"
    :searchInfo="result.searchInfo"
    :description="result.searchInfo.textSnippet"
    class="mb-4"
  >
    <AppButton btnType="results" class="mt-auto">See More Details</AppButton>
  </ResultsCard>
</template>