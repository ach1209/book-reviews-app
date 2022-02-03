<script setup>
const props = defineProps({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true, default: 'https://placehold.co/120x150?text=No+Image+Available' },
  description: { type: String, required: true }
})
</script>

<template>
  <div class="flex border shadow p-4">
    <img :src="props.thumbnail" :alt="props.title" />
    <div class="w-full flex flex-col justify-between ml-4">
      <div>
        <h2 class="font-inter font-semibold text-rose-600">{{ props.title }}</h2>
        <p class="font-inter text-sm text-neutral-700" v-html="props.description"></p>        
      </div>
      <div class="flex justify-end">
        <slot></slot>         
      </div>
    </div>
  </div>
</template>