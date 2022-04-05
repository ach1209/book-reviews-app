<script setup>
import { bookCollections } from '../store/bookCollections.js'

const store = bookCollections()
</script>

<template>
  <div 
    v-if="store.getCollections.length === 0"
    class="no-item-block"
  >
    <p class="text-center text-base">There are currently no items saved to your collections.</p>
  </div>
  <div 
    v-else 
    class="flex flex-col"
  >
    <div 
      v-for="book in store.getCollections" :key="book.id"
      class="flex-1 flex border shadow mr-2 mb-4"
    >
      <img :src="book.image" :alt="book.title" class="w-28" />
      <h2 class="ml-2 mt-2 neutral-text-sm">{{ book.title }}</h2>
    </div>    
  </div>
</template>