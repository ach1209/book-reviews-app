<script setup>
import { bookCollections } from '../store/bookCollections.js'

const store = bookCollections()
</script>

<template>
  <div>Collections template</div>
  <p v-for="book in store.getCollections" :key="book.id">{{ book.title }}</p>
</template>