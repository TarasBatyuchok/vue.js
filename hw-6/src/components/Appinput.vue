
<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-full"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  modelValue: string | null
  placeholder?: string
  type?: string

}>(), {
  type: 'text'
})

defineEmits(['update:modelValue'])

</script>
