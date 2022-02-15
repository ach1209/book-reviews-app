<script setup>
const props = defineProps({
  btnType: { type: String, required: false }
})
</script>

<template>
  <button class="btn" :class="`${props.btnType}-btn`">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  @apply block rounded px-4 py-2 shadow-sm hover:shadow-none font-semibold;
}

.results-btn {
  @apply bg-indigo-500 hover:bg-indigo-400 text-white;
}

.tab-btn {
  @apply border-none shadow-none px-0 mr-4 last:mr-0 text-neutral-500 hover:text-sky-600 active:text-sky-600;
}

.active {
  @apply text-sky-600;
}
</style>