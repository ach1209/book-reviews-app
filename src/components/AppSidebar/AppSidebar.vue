<script setup>
import { reactive } from 'vue'

const tabData = reactive([
  { title: 'Home', id: 0, path: '/' },
  { title: 'Completed', id: 1, path: '/completed' },
  { title: 'Reviews', id: 2, path: '/reviews' }
])
</script>

<template>
  <div class="w-2/12 lg:h-48 p-4 bg-white rounded-lg shadow-sm">
    <h2 class="text-center">My Books</h2>
    <ul>
      <li v-for="tab in tabData" :key="tab.id">
        <router-link :to="tab.path">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>