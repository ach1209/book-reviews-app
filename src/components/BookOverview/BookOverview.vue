<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: { type: Number, required: true },
  ratingCount: { type: Number, required: true },
  pageCount: { type: Number, required: true },
  publisher: { type: String, required: true },
  isbnCode: { type: Array, required: true },
  description: { type: String, required: true }
})

const rating = computed(() => {
  if (props.rating) {
    return `${props.rating} / 5 (out of ${props.ratingCount} ratings)`
  } else {
    return 'No rating available'
  }
})
</script>

<template>
  <div class="text-sm">{{ rating }}</div>
  <div class="text-sm">Pages: {{ props.pageCount }}</div>
  <div class="text-sm">Publisher: {{ props.publisher }}</div>
  <div 
    v-for="code in props.isbnCode" :key="code.identifier"
    class="text-sm"
  >{{ code.type.replace(/_/g, ' ') }}: {{ code.identifier }}</div>  
  <p v-html="props.description"></p>
</template>