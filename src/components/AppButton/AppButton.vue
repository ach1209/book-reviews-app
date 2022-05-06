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
  @apply bg-violet-600 hover:bg-violet-700 text-white;
}

.tab-btn {
  @apply shadow-none px-0 mr-4 last:mr-0 text-neutral-500 hover:text-violet-600 active:text-violet-600;
}

.disabled-btn {
  @apply bg-slate-400 hover:bg-slate-400;
}

.wide-btn {
  @apply w-64 h-12 px-6 bg-white hover:bg-violet-50 text-neutral-700 hover:text-violet-500 text-left text-sm truncate drop-shadow shadow-none;
}

.active {
  @apply text-violet-600;
}
</style>