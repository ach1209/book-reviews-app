<script setup>
import AppSideBar from './components/AppSidebar/AppSidebar.vue'
</script>

<template>
  <div class="max-w-screen-lg min-h-screen mx-auto py-8 drop-shadow">
    <div class="flex justify-around">
      <AppSideBar />
      <div class="flex-1 min-h-max p-4 bg-white rounded-tr-sm rounded-br-sm">
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
