<script setup>
import { ref, inject, computed } from 'vue'
import { bookCollections } from '../../store/bookCollections.js';
import AppButton from '../AppButton/AppButton.vue'

const store = bookCollections()
const isButtonClicked = ref(false)
const targetBookId = inject('bookId')
const targetBookTitle = inject('bookTitle')

const props = defineProps({
  rating: { type: Number, required: true, default: 0 },
  ratingCount: { type: Number, required: true, default: 0 },
  pageCount: { type: Number, required: true },
  publisher: { type: String, required: false },
  isbnCode: { type: Array, required: true },
  description: { type: String, required: true, default: 'No description available' }
})

const rating = computed(() => {
  if (props.rating) {
    return `${props.rating} / 5 (out of ${props.ratingCount} ratings)`
  } else {
    return 'No rating available'
  }
})

const buttonText = computed(() => isButtonClicked.value ? 'Saved to Collections' : 'Add to Collections')

function addBook() {
  store.addToCollection(targetBookId, targetBookTitle)
  isButtonClicked.value = !isButtonClicked.value
}
</script>

<template>
  <div class="flex justify-between mt-2">
    <div class="flex-1">
      <span class="text-neutral-700 text-sm leading-6">{{ rating }}</span><br />
      <span class="text-neutral-700 text-sm leading-6">Pages: {{ props.pageCount }}</span><br />
      <span v-if="props.publisher" class="text-neutral-700 text-sm leading-6">Publisher: {{ props.publisher }}</span>
    </div>
    <div class="flex-1">
      <div 
        v-for="code in props.isbnCode" :key="code.identifier"
        class="text-neutral-700 text-sm leading-6"
      >{{ code.type.replace(/_/g, ' ') }}: {{ code.identifier }}</div>
    </div>
  </div>
  <div class="mt-4">
    <p v-html="props.description"></p>    
  </div>
  <div class="flex justify-end mt-4">
    <AppButton 
      btnType="primary" 
      @click.once="addBook"
    >{{ buttonText }}</AppButton>
  </div>
</template>