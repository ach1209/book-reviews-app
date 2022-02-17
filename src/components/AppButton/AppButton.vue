<script setup>
const props = defineProps({
  btnType: { type: String, required: false }
})
</script>

<template>
  <button class="btn" :class="[props.btnType ? `${props.btnType}-btn` : null]">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  @apply block rounded px-4 py-2 shadow-sm hover:shadow-none font-semibold;
}

.primary-btn {
  @apply bg-blue-600 hover:bg-blue-700 text-white;
}

.tab-btn {
  @apply border-none shadow-none px-0 mr-4 last:mr-0 text-neutral-500 hover:text-blue-600 active:text-blue-600;
}

.active {
  @apply text-blue-600;
}
</style>