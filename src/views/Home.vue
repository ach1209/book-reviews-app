<script setup>
import { ref } from 'vue'

const iValue = ref('')

// preliminary for now. fix later
async function getSearchResults() {
  if (iValue.value) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${iValue.value}`)
    const results = await response.json()
    console.log(results)
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
    class="w-full h-12 px-2 rounded border border-indigo-500 bg-indigo-50 font-inter font-semibold focus:outline-none" />
</template>