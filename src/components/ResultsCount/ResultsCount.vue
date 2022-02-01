<script setup>
const props = defineProps({
  resultsCount : { type: Number, required: true }
})
</script>

<template>
  <div v-if="props.resultsCount > 0" class="my-8">
    <p class="font-inter font-semibold text-indigo-600 text-xl">{{ props.resultsCount }} results were found</p>
  </div>
</template>