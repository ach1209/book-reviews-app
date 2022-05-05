<script setup>
import { bookCollections } from '../store/bookCollections.js'

const store = bookCollections()
</script>

<template>
  <div class="self-center flex">
    <div class="flex-1">
      <h2 class="text-4xl text-neutral-700 capitalize">You have read <span class="text-violet-500">{{ store.getCollections.length }}</span> books</h2>
      <router-link to="/find-books" class="text-lg leading-10 text-violet-500 hover:text-violet-700">Find More Books to Read</router-link>
    </div>
    <div class="flex-1">
      <img src="../assets/undraw_book_lover_re_rwjy.svg" alt="Reading books" />
    </div>    
  </div>
</template>