<script setup>
import AppSideBar from './components/AppSidebar/AppSidebar.vue'
import AppContent from './components/AppContent/AppContent.vue'
</script>

<template>
  <div class="max-w-screen-xl min-h-screen mx-auto py-8 drop-shadow-md">
    <div class="flex min-h-screen p-8 bg-zinc-100 rounded-xl">
      <AppSideBar />
      <AppContent />
    </div>
  </div>
</template>

<style>
#app {
  @apply bg-slate-200;
}
</style>
