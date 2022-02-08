<script setup>
import { ref, computed } from 'vue'
import { getResults } from '../store/getResults.js'
import ResultsCard from '../components/ResultsCard/ResultsCard.vue'
import AppButton from '../components/AppButton/AppButton.vue'
import SearchBar from '../components/SearchBar/SearchBar.vue'
import ResultsCount from '../components/ResultsCount/ResultsCount.vue'

const searchBooks = ref('')
const store = getResults()

const searchValue = () => {
  store.fetchSearchResults(searchBooks.value)
  searchBooks.value = ''
}
const searchResults = computed(() => store.getAllSearchResults)
</script>

<template>
  <SearchBar v-model="searchBooks" @set-search-value="searchValue"></SearchBar>
  <ResultsCount :resultsCount="searchResults.length"></ResultsCount>
  <ResultsCard
    v-for="result in searchResults" :key="result.id"
    :title="result.volumeInfo.title"
    :thumbnail="result.volumeInfo.imageLinks?.smallThumbnail"
    :description="result.searchInfo?.textSnippet"
    class="mb-4"
  >
    <router-link :to="{ name: 'Book', params: { id: result.volumeInfo.title.toLowerCase().replace(/[,\s]+|[,\s]+/g, '-') } }">
      <AppButton btnType="results" class="mt-auto">See More Details</AppButton>  
    </router-link>
  </ResultsCard>
</template>