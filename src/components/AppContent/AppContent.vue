<template>
  <div class="flex-1 flex ml-4 p-4">
    <router-view v-slot="{ Component }">
      <Transition name="vert-slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.vert-slide-enter-active,
.vert-slide-leave-active {
  @apply transition-transform translate-y-3 opacity-100;
}

.vert-slide-enter-from,
.vert-slide-leave-to {
  @apply translate-y-0 opacity-0;
}
</style>