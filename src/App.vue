<script setup>
import AppSideBar from './components/AppSidebar/AppSidebar.vue'
</script>

<template>
  <div class="max-w-screen-xl min-h-screen mx-auto py-8">
    <div class="flex justify-around">
      <AppSideBar />
      <div class="flex-1 min-h-max ml-8 p-4 bg-white rounded-lg shadow-sm">
        <router-view></router-view>
      </div>      
    </div>
  </div>
</template>

<style>
#app {
  @apply bg-slate-200;
}
</style>
