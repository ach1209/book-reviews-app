<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getResults } from '../store/getResults.js'

const store = getResults()
const route = useRoute()

const details = computed(() => {
  return store.getAllSearchResults.find(detail => detail.volumeInfo.title.toLowerCase().replace(/[,\s]+|[,\s]+/g, '-') === route.params.id)
})
</script>

<template>
  <div>Books Template</div>
  <p>{{ details.volumeInfo.title }}</p>
  <p>{{ details.volumeInfo.description }}</p>
</template>