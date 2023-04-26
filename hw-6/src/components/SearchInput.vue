<template>
  <input
    :placeholder="placeholder"
    type="text"
    :value="modelValue"
    class="rounded-md font-medium border
    border-gray-medium focus:border-gray-dark text-sm p-2 block "
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
<script lang="ts" setup>
defineProps<{
  placeholder?: string
  modelValue: string | null
}>()

defineEmits(['update:modelValue'])

</script>
