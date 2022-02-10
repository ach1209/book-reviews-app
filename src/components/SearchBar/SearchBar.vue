<script setup>
const props = defineProps({
  modelValue: { type: String, required: true }
})
const emit = defineEmits(['update:modelValue', 'set-search-value'])

function handleInput() {
  emit('set-search-value', props.modelValue)
}
</script>

<template>
  <label for="search" class="text-sm">Please enter a title</label>
  <input
    type="text" id="search" :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup.native.enter="handleInput"
    class="w-full h-12 px-2 rounded border border-indigo-500 bg-indigo-50 focus:outline-none" />
</template>