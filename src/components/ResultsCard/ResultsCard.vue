<script setup>
const props = defineProps({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  searchInfo: { type: Object, required: false},
  description: { type: String, required: true }
})
</script>

<template>
  <div class="flex border shadow p-4">
    <img :src="props.thumbnail" :alt="props.title" />
    <div class="w-full flex flex-col ml-4">
      <div>
        <h2 class="font-inter font-semibold text-rose-600">{{ props.title }}</h2>
        <p v-if="props.searchInfo" class="font-inter text-sm text-neutral-700" v-html="props.description"></p>        
      </div>
      <div class="ml-auto mt-auto">
        <slot></slot>         
      </div>
    </div>
  </div>
</template>