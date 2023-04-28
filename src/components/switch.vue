<template>
  <label
    class="inline-flex cursor-pointer select-none items-center gap-2"
    :class="{ 'flex-row-reverse ': labelPosition === 'right' }"
  >
    <slot name="label">{{ label }}</slot>
    <input
      v-model="modelValue"
      class="switch"
      type="checkbox"
      :disabled="disabled"
      :class="[
        {
          'switch-sm': size === 'sm',
          'switch-base': size === 'base',
          'switch-lg': size === 'lg',
          'switch-xl': size === 'xl'
        }
      ]"
    />
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: boolean
  label?: string
  labelPosition?: 'left' | 'right'
  disabled?: boolean
  size?: 'sm' | 'base' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  labelPosition: 'left',
  disabled: false,
  size: 'base'
})

const label = ref(props.label)
const modelValue = ref(props.modelValue)
const labelPosition = ref(props.labelPosition)
const disabled = ref(props.disabled)
const size = ref(props.size)

const emit = defineEmits(['update:modelValue'])

watch(modelValue, (newLoaded) => {
  emit('update:modelValue', newLoaded)
})
</script>
