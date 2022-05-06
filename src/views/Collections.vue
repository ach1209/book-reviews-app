<script setup>
import { ref, computed } from 'vue'
import { bookCollections } from '../store/bookCollections.js'
import AppButton from '../components/AppButton/AppButton.vue'

const store = bookCollections()
const currentBook = ref('')

function switchBook(id) {
  currentBook.value = id
}

const updatedBook = computed(() => 
  (currentBook.value === '') ? store.getCollections[0] : store.getCollections.filter(collection => collection.id === currentBook.value)[0]
)
</script>

<template>
  <div 
    v-if="store.getCollections.length === 0"
    class="w-full self-center"
  >
    <img class="w-1/2 mx-auto" src="../assets/undraw_blank_canvas_re_2hwy.svg" alt="A person stares at a blank canvas" />
    <p class="mt-8 text-center text-base">There are currently no items saved in your collections.</p>
  </div>
  <div v-else class="flex flex-col justify-between">
    <div class="flex-1 flex items-center justify-around w-full" :key="updatedBook.id">
      <h2 class="text-2xl text-neutral-700">{{ updatedBook.title }}</h2>
      <img :src="updatedBook.image" :alt="updatedBook.title" />
    </div>
    <div class="flex flex-wrap max-w-4xl">
      <AppButton
        v-for="book in store.getCollections" :key="book.id"
        btnType="wide"
        @click="switchBook(book.id)"
        class="flex items-center mr-2 mb-2"
      >{{ book.title }}</AppButton>
    </div>
  </div>
</template>