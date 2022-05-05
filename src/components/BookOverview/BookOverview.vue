<script setup>
import { ref, inject, computed } from 'vue'
import { bookCollections } from '../../store/bookCollections.js';
import AppButton from '../AppButton/AppButton.vue'

const store = bookCollections()
const isButtonClicked = ref(false)
const targetBookId = inject('bookId')
const targetBookTitle = inject('bookTitle')
const targetBookImg = inject('bookImg')

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

const buttonText = computed(() => {
  const text = ref('Add to Collections')
  
  store.getCollections.find(book => {
    if (book.isInCollection && book.id === targetBookId) {
      text.value = 'Already saved to collections'
      isButtonClicked.value = true
    }
  })

  return text.value
})

function addBook() {
  isButtonClicked.value = !isButtonClicked.value
  store.addToCollection(targetBookId, targetBookTitle, targetBookImg, isButtonClicked.value)
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
      @click="addBook"
      :disabled="isButtonClicked"
      :class="{ 'disabled-btn': isButtonClicked }"
    >{{ buttonText }}</AppButton>
  </div>
</template>