<template>
  <select
    name="select" class="rounded-md font-medium border
    border-gray-medium focus:border-gray-dark text-sm p-2  block"
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
<script lang="ts" setup>
defineProps<{
  options?: string[]
  modelValue?: string | null
}>()
</script>
