<script setup>
const tabData = [
  { title: 'Home', id: 0, path: '/' },
  { title: 'Collections', id: 1, path: '/collections' },
  { title: 'Reviews', id: 2, path: '/reviews' }
]
</script>

<template>
  <div class="w-2/12 lg:h-48 p-4 bg-white rounded-lg shadow-sm">
    <h2 class="text-center text-rose-600">My Books</h2>
    <ul>
      <li v-for="tab in tabData" :key="tab.id">
        <router-link :to="tab.path">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>