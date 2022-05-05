<template>
  <div class="flex-1 flex min-h-max ml-4 p-4">
    <Transition name="vert-slide">
      <router-view></router-view>      
    </Transition>
  </div>
</template>

<style scoped>
.vert-slide-enter-active,
.vert-slide-leave-active {
  @apply transition-all translate-y-3 opacity-100;
}

.vert-slide-enter-from,
.vert-slide-leave-to {
  @apply translate-y-0 opacity-0;
}
</style>