<script setup>
const tabData = [
  { title: 'Home', id: 0, path: '/' },
  { title: 'Collections', id: 1, path: '/collections' },
  { title: 'Reviews', id: 2, path: '' }
]
</script>

<template>
  <div class="w-2/12 lg:h-auto py-4 bg-white rounded-tl-sm rounded-bl-sm border-r">
    <ul>
      <li 
        v-for="tab in tabData" :key="tab.id"
        class="h-10 px-4 flex items-center neutral-text-sm hover:rounded-sm hover:bg-blue-50 hover:text-blue-500"
      >
        <router-link :to="tab.path">
          {{ tab.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>