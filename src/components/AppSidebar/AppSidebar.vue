<script setup>
const tabData = [
  { title: 'Find Books', id: 0, path: '/find-books' },
  { title: 'Collections', id: 1, path: '/collections' }
]
</script>

<template>
  <div class="w-3/12 lg:h-auto py-4">
    <router-link to="/">
      <h1 class="text-violet-600 hover:text-violet-500 text-xl">Book Reviews App</h1>
    </router-link>
    <ul class="mt-12 bg-white rounded-lg drop-shadow">
      <li 
        v-for="tab in tabData" :key="tab.id"
        class="h-16 px-4 neutral-text-lg hover:rounded-lg hover:bg-violet-50 hover:text-violet-500"
      >
        <router-link :to="tab.path" class="w-full h-full flex items-center">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>