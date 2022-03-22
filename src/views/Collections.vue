<script setup>
import { bookCollections } from '../store/bookCollections.js'

const store = bookCollections()
</script>

<template>
  <div class="flex">
    <div 
      v-for="book in store.getCollections" :key="book.id"
      class="flex-1 flex border shadow mr-4 last:mr-0"
    >
      <img :src="book.image" :alt="book.title" />
      <h2 class="neutral-text-sm">{{ book.title }}</h2>
    </div>    
  </div>
</template>