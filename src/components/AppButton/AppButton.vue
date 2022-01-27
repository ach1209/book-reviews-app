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
  @apply block rounded px-4 py-1 shadow-sm hover:shadow-none font-inter font-semibold;
}
</style>