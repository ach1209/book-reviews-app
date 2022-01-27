<script setup>
import { ref } from 'vue'
import ResultsCard from '../components/ResultsCard/ResultsCard.vue'
import AppButton from '../components/AppButton/AppButton.vue'

const iValue = ref('')
const searchResults = ref([])

// preliminary for now. fix later
async function getSearchResults() {
  if (iValue.value) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${iValue.value}`)
    const results = await response.json()
    searchResults.value = results.items
    console.log(searchResults.value.length)
    console.log(searchResults.value)
    iValue.value = ''
  } else {
    return null
  }
}
</script>

<template>
  <label for="search" class="font-inter text-sm">Please enter a title</label>
  <input
    type="text" v-model="iValue" id="search"
    @keyup.native.enter="getSearchResults"
    class="w-full h-12 px-2 rounded border border-indigo-500 bg-indigo-50 font-inter focus:outline-none" />
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