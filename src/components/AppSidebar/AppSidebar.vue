<script setup>
const tabData = [
  { title: 'Home', id: 0, path: '/' },
  { title: 'Find Books', id: 1, path: '/find-books' },
  { title: 'Collections', id: 2, path: '/collections' }
]
</script>

<template>
  <div class="w-3/12 lg:h-auto py-4">
    <h1 class="text-neutral-600 text-xl">Book Reviews App</h1>
    <ul class="mt-12 bg-white rounded-lg drop-shadow">
      <li 
        v-for="tab in tabData" :key="tab.id"
        class="h-16 px-4 flex items-center neutral-text-lg hover:rounded-lg hover:bg-violet-50 hover:text-violet-500"
      >
        <router-link :to="tab.path">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>